    let gen = ['No eres nada menos que especial', 'Eres único en tu tipo', 'Siempre haces sonreír a las personas.', 'Siempre estás allí para mí', 'Siempre ves el lado positivo de las cosas', 'Serías un gran padre', 'Eres un maravilloso anfitrión', 'Eres lo mejor que alguien podría desear.'];

    
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