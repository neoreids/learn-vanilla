const fillStar = function(node, currentRate) {
    // const starContainer = document.getElementById("star-container")
    const childrenStar = node.children
    for (var a = 0; a<node.children.length; a++) {
        if(a+1 <= currentRate) {
            const svg = childrenStar[a].children[0]
            svg.classList.add("fill-current")
        }
    }
}

const listReviews = function (data) {
    const listReviews = document.getElementById("list-reviews")
    if (data.length > 0) {
        const childMaster = listReviews.children[0]
        childMaster.classList.remove("hidden")
        for (var a=0; a<data.length; a++) {
            const copyChild = childMaster
            const starContainer = copyChild.children[0]
            const starNumberContainer = copyChild.children[1]
            const reviewText = copyChild.children[2]

            // fillStar(starContainer, data[a].rate)
            listReviews.append(copyChild)
            starNumberContainer.textContent = data[a].rate
            reviewText.textContent = data[a].text
        }

    }
}

const listItemReview = [
    {
        rate: 3,
        text: "testing"
    },
    {
        rate: 4,
        text: "testing"
    },
    {
        rate: 2,
        text: "testing"
    }
]

fillStar(document.getElementById("star-container"), 4)
listReviews(listItemReview)