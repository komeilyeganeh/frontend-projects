const btnAdd = document.querySelector(".btn-add");
const closeModal = document.querySelector(".close-modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const error = document.querySelector(".error");
const inputTitle = document.querySelector(".input-title");
const inputUrl = document.querySelector(".input-url");
const bookmarks = document.querySelector(".bookmarks");
let bookmarksArr = [];

// modal toggle
btnAdd.addEventListener("click", () => {
  modalWrapper.classList.add("active");
});
closeModal.addEventListener("click", () => {
  modalWrapper.classList.remove("active");
  error.innerHTML = "";
});

// _-_-_-_-_-_ bookmarks scripts _-_-_-_-_-_
window.onload = fetchBookmark;

const generateUrl = (url) => {
  if (!url.includes("https://")) {
    return `https://${url}`;
  } else {
    return url;
  }
};

const createBookmark = (title, url) => {
  let icon = `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
  bookmarks.insertAdjacentHTML(
    "beforeend",
    `
    <div class="bookmark-items-wrapper">
        <span class="delete-bookmark" onclick="deleteBookmark('${url}')">&times;</span>
        <a href="${url}" target="_blank" class="bookmark-item">
                <img src="${icon}" alt="icon" />
                <span class="bookmark-title">${title}</span>
            </a>
    </div>
      
      `
  );
};

function addBookmark(e) {
  e.preventDefault();
  let title;
  let url;
  if (inputTitle.value && inputUrl.value) {
    title = inputTitle.value;
    url = inputUrl.value;
  } else {
    error.style.display = "block";
    error.innerHTML = "Please enter title and url !";
  }
  const generatedUrl = generateUrl(url);
  const bookmarkItem = {
    title,
    url: generatedUrl,
  };
  const existingBookmark = bookmarksArr.findIndex(bookamrk => bookamrk.url === generatedUrl);
  if (existingBookmark === -1) {
      bookmarksArr.push(bookmarkItem);
      createBookmark(title, generatedUrl);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr));
  } else {
    alert("Bookmark already added !");
  }
  bookmarkFormReset();
  modalWrapper.classList.remove("active");
  error.innerHTML = "";
}

function fetchBookmark() {
  if (localStorage.getItem("bookmarks")) {
    bookmarks.textContent = "";
    bookmarksArr = JSON.parse(localStorage.getItem("bookmarks"));
    loadBookmarks();
  }
}

function bookmarkFormReset() {
  inputTitle.value = "";
  inputUrl.value = "";
}

function loadBookmarks() {
  bookmarksArr.forEach((bookmark) => {
    createBookmark(bookmark.title, bookmark.url);
  });
}

function deleteBookmark(url) {
    const filteredBookmarks = bookmarksArr.filter(bookmark => bookmark.url !== url);
    bookmarksArr = filteredBookmarks;
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksArr));
    fetchBookmark();
};
