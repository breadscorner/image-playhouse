// Had it partially working but not anymore.

// LOCAL STORAGE(NOT WORKING)
// ------------------------

// Add a beforeunload event listener to the window object
// window.addEventListener('unload', function (event) {
//   localStorage.setItem('page', JSON.stringify(document.innerHTML));
// });

// window.addEventListener('load', (event) => {
//   if (localStorage.getItem('page')) {
//     document.innerHTML = JSON.parse(localStorage.getItem('page'));
//   }
//   console.log('The page has fully loaded');
// });