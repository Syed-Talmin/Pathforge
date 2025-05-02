export const fetchApi = async(role)=>{
  try {
    const prompt = `Act as a detailed career roadmap generator. When I provide a role, respond strictly in this JSON format — ["<Role>", {"skill":"<Skill1>","topic":[{"name":"<detailed topic1>", "isCompleted":false}, {"name":"<detailed topic2>", "isCompleted":false}, ...], "duration":"<realistic duration>"}, ... , {"progress":0}].

    Ensure:
    - Important The roadmap covers beginner to advanced knowledge for each skill.
    - Each skill includes at least 6-8 granular and practical topics with isCompleted set to false by default.
    - All important skills for complete mastery of the role are included.
    - Keep the duration of each skill short under 2 months and use also duration in weeks  .
    - Add skills between 5-10 in the roadmap.
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
   
    return response?.choices[0]?.message?.content;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}