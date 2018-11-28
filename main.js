
const article = document.createElement("article")
article.id = "messages"


let articleRef = document.querySelector("article")

// Update your code from the previous challenge to add the chat messages to the messages elements via a document fragment.
const fragment = document.createDocumentFragment()

    const section1 = document.createElement("section")
    section1.className = "message"
    section1.textContent = "Hey there"
    fragment.appendChild(section1)

    const section2 = document.createElement("section")
    section2.className = "message"
    section2.textContent = "sup u?"
    fragment.appendChild(section2)

    const section3 = document.createElement("section")
    section3.className = "message"
    section3.textContent = "nm"
    fragment.appendChild(section3)

    const section4 = document.createElement("section")
    section4.className = "message"
    section4.textContent = "v cool"
    fragment.appendChild(section4)

    const section5 = document.createElement("section")
    section5.className = "message"
    section5.textContent = "kBYE"
    fragment.appendChild(section5)

document.querySelector("section").appendChild(fragment)


    
    





