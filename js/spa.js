
  
  function init(){
    this.page = document.querySelectorAll(".page");
    this.pageChange();
  }

  // Hide all pages
  function hideAllPages() {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
      page.style.display = "none";
    }
  }

  // Show page or tab
  function showPage(pageId) {
    this.hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
  }

  //Change the page
  function pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }
    this.showPage(page);
  }
