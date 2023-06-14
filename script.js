const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector("#close-btn");


let userMessage;

const createChatLi = (message, className) => {
    // Create a chat <li> element with a passed message and a className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlines"><img src="logo1.png" alt=""></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) =>{
    let response;

    userMessage = userMessage.toLowerCase();
    console.log(userMessage);

    if (userMessage.includes("hello") || userMessage.includes("hi") || userMessage.includes("how are you")){
        response = "Hello... Welcome to Beta Geo-Consultants LTD | Solutions To Your Water Problems.\nHow can I help you today?";
    }
    else if (userMessage.includes("beta") || userMessage.includes("consultants") || userMessage.includes("beta-geo") || userMessage.includes("geo")){
        response = "Beta Geo-Consultants LTD is leading water drilling consultants agency specializing in a comprehensive range of services to meet the diverse water needs of communities, industries, and businesses. \n We offer expertise in hydrological survey, borehole drilling, borehole camera inspection, submersible pump installation, pump testing services, elevated tower construction, and borehole solarization services.";
    }
    else if (userMessage.includes("services") || userMessage.includes("offer") || userMessage.includes("service")){
        response = "At Beta Geo-Consultants LTD, The following services are offered. \n1. Hydrological Survey Services. \n2. Borehole Drilling Services. \n3. Borehole Camera Inspection Services. \n4. Submersible Pump Installation Services. \n5. Pump Testing Services. \n6. Elevated Tower Constraction Services. \n7. Borehole Solarization Services";
    }
    else if (userMessage.includes("borehole") || userMessage.includes("drilling") || userMessage.includes("bore hole")){
        response = "We offer borehole drilling services which involves drilling holes into the ground to access underground water sources. It includes site preparation, selection and mobilization of drilling equipment, drilling the boreholes to the required depth, installing casings and screens for borehole integrity, well development procedures, and completing the borehole with sealing and grouting.";
    }
    else if (userMessage.includes("survey") || userMessage.includes("hydrological") || userMessage.includes("water survey")){
        response = "We offer hydrological survey which involves assessing water availability, quality, and suitability. It includes activities such as consultation with the client, field data collection (geological mapping, water table measurements, water quality analysis), geophysical surveys, data analysis and interpretation, and preparing a comprehensive report with recommendations.";
    }
    else if (userMessage.includes("camera") || userMessage.includes("inspection") || userMessage.includes("borehole camera")){
        response = "We offer borehole camera inspection services which is a method of visually assessing the condition of boreholes. It involves deploying a camera system into the drilled boreholes, conducting visual inspections to identify damage or obstructions, documenting findings through imaging and video recordings, analyzing the inspection data, and providing detailed reports with maintenance or repair recommendations.";
    }
    else if (userMessage.includes("pump") || userMessage.includes("testing")){
        response = "We offer pump testing services which involves evaluating the performance and efficiency of installed pumps. It includes measuring flow rates, pressure, power consumption, and pump efficiency using specialized testing equipment, analyzing test results to assess pump performance, and providing reports with recommendations for maintenance, adjustments, or upgrades.";
    }
    else if (userMessage.includes("elevated") || userMessage.includes("tower") || userMessage.includes("construction")){
        response = "Elevated tower construction involves designing and constructing towers for water distribution systems. It includes designing towers based on distribution requirements and structural considerations, procuring materials and equipment, preparing the construction site and foundation, erecting the tower structure, installing pipelines, valves, and control systems, conducting quality checks and inspections, and completing the construction with necessary finishing touches and safety measures.";
    }
    else if (userMessage.includes("solarisation") || userMessage.includes("solar") || userMessage.includes("power")){
        response = "Borehole solarisation involves integrating solar power systems with borehole infrastructure to reduce reliance on conventional power sources. It includes assessing the feasibility of solarization, designing solar power systems, procuring solar panels and components, installing solar panels, wiring and integrating the solar power system with the borehole infrastructure, conducting performance tests, and providing maintenance and support services for optimal operation.";
    }
    else if (userMessage.includes("submersible") || userMessage.includes(" pump installation")){
        response = "Submersible pump installation involves selecting and installing pumps for water extraction. It includes assessing water requirements and pump specifications, selecting appropriate pumps, setting them at the correct depth in the borehole, securing them in place, connecting pumps to power supply and control systems, and conducting performance tests to ensure proper functioning.";
    }
    else if (userMessage.includes("help")){
        response = "Visit our contact page and send us an email and we will be happy to help you. \n\nYou can send us a message directly through +254715758935 or email us at betageoconsultants@gmail.com.\nThank you.";
    }
    else{
        response = "Ooop! An error occured. Please clarify your search query and try again. \nYou can try typing keywords such as: \n1. Help \n2. Services";
    }
    // Update the incoming chat message with the generated response
    incomingChatLi.querySelector("p").textContent = response;

    // Simulate delay before showing the response
    setTimeout(() => {
        // Remove "Thinking..." message
        incomingChatLi.remove();

        // Append the generated response as an incoming message
        chatbox.appendChild(createChatLi(response, "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 1000);
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";

    // Append user input to the chatbot
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for response
        const incomingChatLi = createChatLi("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

sendChatBtn.addEventListener("click", handleChat);

chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));