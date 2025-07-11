const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'planningData.json');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    let jsonData;
    try {
        jsonData = JSON.parse(data);
    } catch (parseError) {
        console.error('Error parsing JSON from file:', parseError);
        return;
    }

    const processDescriptions = (cards) => {
        return cards.map(card => {
            if (card.koDescription && typeof card.koDescription === 'string') {
                card.koDescription = `\`${card.koDescription.replace(/`/g, '\\`')}\``;
            }
            if (card.enDescription && typeof card.enDescription === 'string') {
                card.enDescription = `\`${card.enDescription.replace(/`/g, '\\`')}\``;
            }
            return card;
        });
    };

    jsonData = processDescriptions(jsonData);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 4), 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file:', err);
        } else {
            console.log('planningData.json has been successfully updated.');
        }
    });
});
