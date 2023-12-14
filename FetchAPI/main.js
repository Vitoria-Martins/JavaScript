const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");

const postsContainer = document.querySelector("#posts-container");

// get id from url
const urlsearchParams = new URLSearchParams(window.location.search);

const postId = urlsearchParams.get("id");

//Get all posts

async function getAllPosts(){

    //espera os resultados
    const response = await fetch(url);

    console.log(response);

 //recebe os dados e da a resposta em array obj
    const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");
    
    //pasa por cada metodo
    data.map((post) => {

        //elemntos criados
        const div = document.createElement(" div");
        const title = document.createElement(" h2");
        const body = document.createElement(" p");
        const link= document.createElement(" a");

        //colocando conteudo nos metodos
        title.innerText = post.title ;
        body.innerText = post.body ;
        link.innerText = "Ler" ;
        //atributo é uma string contendo valor
        link.setAttribute("href, `/post.html?id=${post.id}`");  

    //cria um novo nó DOM(div) que recebe todos elementos de cada post
        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        //coloca a div no container
        postsContainer.appendChild(div);
    });
}

if (!postId){
    getAllPosts();
} else {
    console.log(postId);
}

var Y = A * B ** 2 ;
var Z = A + B / 5 * C;
var S = 5**2 * ( (2*5)+ (15/3))**3;

console.log(Y);