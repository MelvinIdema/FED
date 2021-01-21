
/* De Query Selector (all) */
const bigassplaybtns = document.querySelectorAll(".bigassplaybtn");

bigassplaybtns.forEach(bigassplaybtn => {

    /* De Event Listener */
    bigassplaybtn.addEventListener("click", () => {

        /* De classList */
        bigassplaybtn.classList.add("rotate");


        /* Reset zodat je nogmaals kan klikken */
        setTimeout(() => {
            bigassplaybtn.classList.remove("rotate");
        }, 1000);
    })
})