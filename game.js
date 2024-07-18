const storyContainer = document.getElementById('game-container');
const storyText = document.getElementById('story-text');

function makeChoice(choice) {
    let newContent = '';

    switch(choice) {
        case 1:
            newContent = `
                <p>You have entered a dark and scary castle. What do you do next?</p>
                <button class="choice-button" onclick="makeChoice(2)">Pick door number 1</button>
                <button class="choice-button" onclick="makeChoice(3)">Pick door number 2</button>
                <button class="choice-button" onclick="makeChoice(4)">Pick door number 3</button>
            `;
            break;
        case 2:
            newContent = `
                <p>You die. A dragon bites your head off.</p>
                <button class="choice-button" onclick="makeChoice(1)">Restart</button>
            `;
            break;
        case 3:
            newContent = `
                <p>You die. You drowned in an auger’s swamp.</p>
                <button class="choice-button" onclick="makeChoice(1)">Restart</button>
            `;
            break;
        case 4:
            newContent = `
                <p>You have come across a hallway and there are two doors. Which door will you enter?</p>
                <button class="choice-button" onclick="makeChoice(5)">Left</button>
                <button class="choice-button" onclick="makeChoice(6)">Right</button>
            `;
            break;
        case 5:
            newContent = `
                <p>You have entered the ballroom. Do you dance or go into the kitchen?</p>
                <button class="choice-button" onclick="makeChoice(7)">Dance</button>
                <button class="choice-button" onclick="makeChoice(8)">Go into the kitchen</button>
            `;
            break;
        case 6:
            newContent = `
                <p>You have entered the ballroom. Do you dance or go into the kitchen?</p>
                <button class="choice-button" onclick="makeChoice(7)">Dance</button>
                <button class="choice-button" onclick="makeChoice(8)">Go into the kitchen</button>
            `;
            break;
        case 7:
            newContent = `
                <p>You dance the night away. You wake up in a cell. A guard stands next to the cell you are in. He pulls out a key and opens your cell. What do you do?</p>
                <button class="choice-button" onclick="makeChoice(9)">Go to court</button>
                <button class="choice-button" onclick="makeChoice(10)">Be stubborn and stay put</button>
            `;
            break;
        case 8:
            newContent = `
                <p>You have entered the kitchen. Do you eat a cake or drink a glass of wine?</p>
                <button class="choice-button" onclick="makeChoice(11)">Eat a cake</button>
                <button class="choice-button" onclick="makeChoice(12)">Drink a glass of wine</button>
            `;
            break;
        case 9:
            newContent = `
                <p>You are now in court. What do you do?</p>
                <button class="choice-button" onclick="makeChoice(13)">Accept your punishment</button>
                <button class="choice-button" onclick="makeChoice(14)">Demand to speak to the king</button>
            `;
            break;
        case 10:
            newContent = `
                <p>You die. You got food poisoning.</p>
                <button class="choice-button" onclick="makeChoice(1)">Restart</button>
            `;
            break;
        case 11:
            newContent = `
                <p>You die. You got food poisoning.</p>
                <button class="choice-button" onclick="makeChoice(1)">Restart</button>
            `;
            break;
        case 12:
            newContent = `
                <p>You die. You got food poisoning.</p>
                <button class="choice-button" onclick="makeChoice(1)">Restart</button>
            `;
            break;
        case 13:
            newContent = `
                <p>You die. You expected punishment and got it. Sadly the punishment is gelatin.</p>
                <button class="choice-button" onclick="makeChoice(1)">Restart</button>
            `;
            break;
        case 14:
            newContent = `
                <p>You die. You got drunk and found a kitchen knife oh you stabbed yourself with it.</p>
                <button class="choice-button" onclick="makeChoice(1)">Restart</button>
            `;
            break;
        default:
            newContent = `<p>Join in with your fellow peasants to beat the evil king! Who has captured our beloved queen Elizabeth and plans to steal the throne.</p>`;
    }

    storyContainer.innerHTML = newContent;
}
