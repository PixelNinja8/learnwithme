// script.js
function showEurope() {
    document.getElementById('countries').innerHTML = `
        <button onclick="selectCountry('Deutschland')">Deutschland</button>
        <button onclick="selectCountry('Frankreich')">Frankreich</button>
        <button onclick="selectCountry('Italien')">Italien</button>
        <button onclick="selectCountry('Spanien')">Spanien</button>
        <!-- Weitere Länder können hier hinzugefügt werden -->
    `;
    document.getElementById('country-container').style.display = 'block';
}

function selectCountry(country) {
    document.getElementById('country-name').innerText = country;
    document.getElementById('country-details').style.display = 'block';
    document.getElementById('exercise-container').style.display = 'none';
}

function showVideo() {
    window.open('https://www.youtube.com/watch?v=Tbi4CQ3meok', '_blank');
}

function showExercise() {
    document.getElementById('exercise-container').innerHTML = `
        <h3>Übungen für ${document.getElementById('country-name').innerText}</h3>
        <p>1. Frage: Welche Farbe hat die deutsche Nationalflagge?</p>
        <p>a) Blau und Gelb<br>b) Schwarz, Rot und Gold<br>c) Weiß, Grün und Orange<br>d) Schwarz und Gelb</p>
        <input type="text" placeholder="Antwort hier eingeben..."><br>
        <p>2. Frage: Nenne mindestens 5 Nachbarländer von Deutschland!</p>
        <input type="text" placeholder="Antwort hier eingeben..."><br>
        <p>3. Frage: Was ist die Hauptstadt Deutschlands?</p>
        <p>a) München<br>b) Frankfurt<br>c) Hamburg<br>d) Berlin</p>
        <input type="text" placeholder="Antwort hier eingeben..."><br>
        <button onclick="submitExercise()">Übung abschicken</button>
    `;
    document.getElementById('exercise-container').style.display = 'block';
}

function submitExercise() {
    // Hier wird die Auswertung durchgeführt (Dummy-Auswertung)
    alert("Übung wurde eingereicht! Deine Antworten werden nun ausgewertet.");
    // Hier könntest du die Logik zur Auswertung der Antworten einfügen
}

function showCities() {
    // Hier kannst du die Logik für das Anzeigen von Städten implementieren
    alert("Städte ansehen ist noch nicht implementiert.");
}

function searchCity() {
    const city = document.getElementById('search').value;
    // Hier kannst du die Logik zur Suche von Städten implementieren
    alert(`Suche nach der Stadt: ${city}`);
}
