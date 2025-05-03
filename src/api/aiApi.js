export const fetchApi = async(role)=>{
  try {
    const prompt = `Act as a detailed career roadmap generator. When I provide a role, respond strictly in this JSON format — ["<Role>", {"skill":"<Skill1>","topic":[{"name":"<detailed topic1>", "isCompleted":false}, {"name":"<detailed topic2>", "isCompleted":false}, ...], "duration":"<realistic duration>"}, ... , {"progress":0}].

    Ensure:
    - Important The roadmap covers beginner to advanced knowledge for each skill.
    - Each skill includes at least 9-10 granular and practical topics with isCompleted set to false by default.
    - All important skills for complete mastery of the role are included.
    - Keep the duration of each skill short under 2 months and use also duration in weeks  .
    - Add skills between more then 8 in the roadmap.
    - Add a final object in the array with a key "progress" having default value 0.
    
    Return only the JSON array. Do not include any explanation or extra text.
    
    My role is: ${role}`;

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: `${import.meta.env.VITE_AI_MODEL}`,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

   const response = await res.json();

    if (!res.ok) {
      throw new Error(`Error: ${response.error.message}`);
    }

    if (!Array.isArray(response.choices) || response.choices.length === 0) {
      throw new Error('Unexpected response format');
    }
    if (typeof response.choices[0].message.content !== 'string') {
      throw new Error('Unexpected content format');
    }
   

    const jsonResponse = JSON.parse(response.choices[0].message.content);
    
    if (!Array.isArray(jsonResponse)) {
      throw new Error('Parsed response is not an array');
    }
  
    if (typeof jsonResponse[0] !== 'string') {
      throw new Error('First element of parsed response is not a string');
    }

    if (typeof jsonResponse[1] !== 'object' || jsonResponse[1] === null) {
      throw new Error('Second element of parsed response is not an object');
    }
  
    if (typeof jsonResponse[jsonResponse.length - 1] !== 'object' || jsonResponse[jsonResponse.length - 1] === null) {
      throw new Error('Last element of parsed response is not an object');
    }
    if (!jsonResponse[jsonResponse.length - 1].hasOwnProperty('progress')) {
      throw new Error('Progress key does not exist in the last object');
    }

    return jsonResponse;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}