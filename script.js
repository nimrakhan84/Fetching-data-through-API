class Posts {
    hundredPosts = [];
    row;
    constructor() {
      this.row = document.getElementById('row');
      console.log(this.row);
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(data => data.json())
        .then(data => {
            console.log(data);
          this.hundredPosts = data;
          this.constructHTML();
        })
        .catch(err => console.error(err));
    }
   
    constructHTML() {
      console.log(this.hundredPosts);
      const posts = this.hundredPosts.map((post) => {
        return `
          <div class="col-lg-3 col-md-4 col-sm-6 ">
            <div class="card" style="width: 90%;">
                <img src="${post.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title">${post.title}</p>
                    <a href="${post.url}" class="btn btn-primary">View</a>
                </div>
            </div>
          </div>
        `;
      }).join('');
      this.row.innerHTML = posts;
    }
   
  }
   
  const p = new Posts();
