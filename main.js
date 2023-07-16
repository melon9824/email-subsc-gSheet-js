const scriptURL = 'https://script.google.com/macros/s/AKfycbw0jVFpuZutttrrlA0Nwme33RudxDhx7PDRRxHsPVmj_U9_tYAaMqYaXHfyruOvVwqs1w/exec'
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');
      
    form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = 'Thanks for Subscribing!';

                setTimeout(() => {
                    msg.innerHTML = '';
                }, 5000);
                
                form.reset();

            })
            .catch(error => console.error('Error!', error.message));
    })