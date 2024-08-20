document.getElementById('submitQuery').addEventListener('click', async () => {
    const query = document.getElementById('userQuery').value;

    const response = await fetch('http://localhost:3000/ai-query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
    });

    const data = await response.json();

    document.getElementById('chatbotResponse').innerText = data.response;
});
