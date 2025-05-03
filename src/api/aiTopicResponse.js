export const fetchTopicResponse = async(skill,topic)=>{
    try {
      const prompt = `Act as an expert programming mentor and teacher. I will provide a skill and a topic under that skill.

Your job is to:
- Explain the topic in-depth as if teaching a serious learner.
- Break down all underlying concepts clearly.
- Cover not just what it is, but why it's used and how it's used in real-world development.
- Explain all related elements (e.g., for HTML: all tags, attributes, structure).
- Give multiple code examples and explain each line.
- Highlight common mistakes or misconceptions.
- Include tips or best practices used by professionals.
- Explain advanced usage where applicable.
- Keep the language clear but detailed and high-quality.
- Use markdown for formatting.
- Use code blocks for code examples.

Start your response with a heading like: “Topic: Semantic Tags in HTML”.

My skill is: ${skill} 
My topic is: ${topic}
`;
  
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: `${import.meta.env.VITE_TOPIC_AI_MODEL}`,
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