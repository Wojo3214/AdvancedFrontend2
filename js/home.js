function appendHomePage(){
    document.querySelector("#app").innerHTML += /*html*/`
        <section id="home" class="page home-page">
            <header class="topbar">
                <h1>KuNSTE</h1>
                <h2>Art museum</h2>
            </header>
            <div class="nav-btn" onclick="openCloseNav()">
                <div></div>
                <div></div>
            </div>
            <h3>SPA Template Modules Pages</h3>
            <p>My Single Page Web App Template</p>
        </section>
    `;
}   

appendHomePage();

function openCloseNav(){
    let navContainer = document.querySelector(".nav-container");
    if(navContainer.style.right = "-3000px"){
        navContainer.style.right = "0px";
        console.log("Open nav");
    }   else if (navContainer.style.right = "0px"){
        navContainer.style.right = "-3000px";
        console.log("Close nav");
    }
    
    

}

//document.querySelector(".nav-btn").addEventListener("click", openCloseNav);
