let activeIndex = 0;

const groups = document.getElementsByClassName("article-section");

const handleRightClick = () => {

    const nextIndex = activeIndex + 1 <= 3 ? activeIndex + 1 : 0;
    
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "inactive";

        nextGroup.dataset.status = "active";

        activeIndex = nextIndex;
}


const handleLeftClick = () => {

    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 3;
    
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "inactive";

        nextGroup.dataset.status = "active";

        activeIndex = nextIndex;
}