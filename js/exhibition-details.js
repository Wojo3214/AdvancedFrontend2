// Firebase config 



    function read() {
        this.artworkRef.onSnapshot(snapshotData => {
            let artworks = [];
            snapshotData.forEach(doc => {
                let artwork = doc.data();
                artwork.id = doc.id;
                artworks.push(artwork);
            });
            this.appendArtworks(artworks);
        });
    }

    function appendArtworks(artworks) {
        let template = "";
        for (let artwork of artworks) {
            template += /*html*/ `
        <article id="exhibition-artworks">
        <div id="artwork-text">
            <h1 class="artwork_title">${artwork.title}</h1>
            <p class="artwork_name">${artwork.name}</p>
        </div>
        <img class="artwork_img" src='${artwork.image}'>
        </article>
        `;
        }
        document.querySelector("#artwork-list").innerHTML = template;
    }

    function template() {
        document.querySelector('#app').innerHTML += /*html*/ `
               <section id="exhibition-details" class="page exhibition-details">
                   <div class="nav-btn">
                    <div></div>
                    <div></div>
                </div>
                  <div id="details-banner">
                      <h3 class="exhibition_title">Human Nature</h3>
                  </div>
                  <div id="details-description">
                      <div>
                      <h1 class="floor_number">Floor 8</h1>
                    </div>
                      <div>
                          <h3 class="description_title">Description</h3>
                          <p class="description_text">There are certain elements that people, at all times, have 
                              had to respond to in life: nature, religion, philosophy, and science.
                              KüNSTE has decided to use these themes as common threads in a new presentation 
                              of works from the collection opening in February. The purpose of the exhibition is to 
                              present the history of art as well as to allowing art to convey food for thought and a 
                              chance to reflect on life. A number of the familiar main works in our collection will, 
                              of course, be included in this new hanging.</p> 
                      </div>
                  </div>
                  <div id="exhibition-artworks">
                      <h4 class="list_title">Artworks in this exhibition</h4>
                  <div id="artwork-list"></div>
                </div>
               </section>
          `;
    }

