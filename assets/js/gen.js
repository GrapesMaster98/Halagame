    let gen = ['Array con mamada y media.'];

    
    let btn = document.querySelector('#btn');

    btn.onclick = () => {
        document.getElementById('cumplido').innerHTML = Generator(gen, gen.length);
    }

    
    function Generator(array, length) {        
        
        try {
            let ranNumber = Math.floor(Math.random() * length);
            return array[ranNumber];
        } catch (error) {
            //..
        }

    }