function selectCat(categoryS){
    localStorage.setItem('selectedCategory', categoryS);
    window.location.href = '../Page/catalog.html'
}

document.addEventListener('DOMContentLoaded', function(){
    const epicgamesCat = document.getElementById("icon1");
    const discordCat = document.getElementById("icon2");
    const googleCat = document.getElementById("icon3");
    const steamCat = document.getElementById("icon4");
    const vkCat = document.getElementById("icon5");
    
    
    epicgamesCat.addEventListener('click',
        function(){
            selectCat('epicgames');
        }
    );
    discordCat.addEventListener('click',
        function(){
            selectCat('discord');
        }
    );
    googleCat.addEventListener('click',
        function(){
            selectCat('google');
        }
    );
    steamCat.addEventListener('click',
        function(){
            selectCat('steam');
        }
    );
    vkCat.addEventListener('click',
        function(){
            selectCat('vk');
        }
    );

}

)