import pizzaImage from "./pizza.jpg";

export const loadHomePage = () => {
    const content = document.getElementById("content");

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "Lorem Ipsum Restaurant";

    content.appendChild(mainHeader);

    const image = document.createElement('img');
    image.src = pizzaImage;

    content.appendChild(image);

    const description = document.createElement('p');
    description.textContent = "Welcome to Lorem Ipsum Restaurant, We sell pizzas or something.";
    description.className = "description";

    content.appendChild(description);

    const openingTimesContainer = document.createElement('div');
    openingTimesContainer.id = "opening-times-container";

    const openingTimesHeader = document.createElement('h3');
    openingTimesHeader.textContent = "Opening Times";

    openingTimesContainer.appendChild(openingTimesHeader);
    openingTimesContainer.appendChild(generateOpeningTime("Monday", "5pm", "11pm"));
    openingTimesContainer.appendChild(generateOpeningTime("Tuesday"));
    openingTimesContainer.appendChild(generateOpeningTime("Wednesday", "5pm", "11pm"));
    openingTimesContainer.appendChild(generateOpeningTime("Thursday", "5pm", "11pm"));
    openingTimesContainer.appendChild(generateOpeningTime("Friday", "5pm", "11pm"));
    openingTimesContainer.appendChild(generateOpeningTime("Saturday", "5pm", "11pm"));
    openingTimesContainer.appendChild(generateOpeningTime("Sunday", "5pm", "11pm"));

    content.appendChild(openingTimesContainer);
}

const generateOpeningTime = (day, openingTime, closingTime) => {
    const openingTimeElement = document.createElement('p');
    if (openingTime == null || closingTime == null) {
        openingTimeElement.textContent = day + ": Closed";
    }
    else {
        openingTimeElement.textContent = day + ": " + openingTime + " - " + closingTime;
    }
    openingTimeElement.className = "opening-time";

    return openingTimeElement;
}