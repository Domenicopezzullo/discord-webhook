document.getElementById('sendButton').addEventListener('click', function() {
    var webhookUrl = document.getElementById('webhookUrl').value.trim();
    var messageContent = document.getElementById('messageContent').value.trim();
    var result = document.getElementById('result');

    result.classList.remove('hidden');

    if (!webhookUrl || !messageContent) {
      result.textContent = 'Please enter both a Webhook URL and a message.';
      result.style.color = '#f04747';
      return;
    }

    result.textContent = 'Sending message...';
    result.style.color = '#faa61a';

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: messageContent
      })
    })
    .then(response => {
      if (response.ok) {
        result.textContent = 'Message sent successfully!';
        result.style.color = 'green';
      } else {
        result.textContent = 'Failed to send message. Check the Webhook URL and try again.';
        result.style.color = 'red';
      }
    })
    .catch(error => {
      result.textContent = 'An error occurred. Please try again.';
      result.style.color = 'red';
    });
  });