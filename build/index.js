const axiosConfig = {
    timeout: 10000,
}
axios.create(axiosConfig)
const fillStar = function(node, currentRate) {
    const childrenStar = node.children
    for (var a = 0; a < node.children.length; a++) {
        if (a + 1 <= currentRate) {
            const svg = childrenStar[a].children[0]
            svg.classList.add("fill-current")
        }
    }
}
const listReviews = function(data) {
    const listReviews = document.getElementById("list-reviews")
    if (data.length > 0) {
        for (var a = 0; a < data.length; a++) {
            const contentChild = `<ul class="flex items-center gap-x-1 mr-4">
                            <li>
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 text-yellow-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                >
                                    <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                            </li>
                            <li>
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 text-yellow-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                >
                                    <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                            </li>
                            <li>
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 text-yellow-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                >
                                    <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                            </li>
                            <li>
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 text-yellow-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                >
                                    <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                            </li>
                            <li>
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 text-yellow-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                >
                                    <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    />
                                </svg>
                            </li>
                        </ul>
                        <span class="font-bold">4</span>,
                        <span class="ml-1 capitalize text-gray-400">text review</span>`
            //create element li and set class for list item
            const childList = document.createElement("li")
            childList.classList.add("flex")
            childList.classList.add("py-3")
            // set content of li with html string
            childList.innerHTML = contentChild
            const starContainer = childList.children[0]
            const starNumberContainer = childList.children[1]
            const reviewText = childList.children[2]
            fillStar(starContainer, data[a].rate)
            starNumberContainer.textContent = data[a].rate
            reviewText.textContent = data[a].review
            listReviews.append(childList)
        }
    }
}
const starContainer = document.getElementById("star-container")
if (starContainer != null) {
    axios.get("/api/product/1").then(resp => resp.data).then(data => {
        listReviews(data.data.rates)
        var calculated_rate = data.data.calculated_rate
        if (calculated_rate >= 3.5) {
            calculated_rate = Math.ceil(calculated_rate)
        } else {
            calculated_rate = Math.floor(calculated_rate)
        }
        fillStar(starContainer, calculated_rate)
        document.getElementById("calculated-rate").textContent = data.data.calculated_rate
    })
}
// if (document.getElementById("list-reviews") != null) {
//     listReviews(listItemReview)
// }
// form

const toggleForm = function() {
    const formContainer = document.getElementById("form-container")
    const isHidden = formContainer.classList.contains("hidden")
    if(isHidden) {
        formContainer.classList.remove("hidden")
    } else {
        formContainer.classList.add("hidden")
    }
}

const formReview = document.getElementById("form-review")
const submitReview = function(event) {
    event.preventDefault()
    const fd = new FormData(event.target)
    axios.post("/api/submit-review", fd).then(resp => {
        toggleForm()
    }).catch(e => {
        alert("failed to submit review")
    })
}
formReview.addEventListener("submit", submitReview, false)
const fillStarInput = function(currentRate) {
    const starContainer = document.getElementById("input-star")
    for (var a = 0; a < starContainer.children.length; a++) {
        const button = starContainer.children[a].children.item(0)
        if (a <= currentRate - 1) {
            button.children.item(0).classList.add("fill-current")
        } else {
            button.children.item(0).classList.remove("fill-current")
        }
    }
}
const selectStar = function(rate) {
    const inputRate = document.getElementById("rate")
    inputRate.value = rate
    fillStarInput(rate)
}
