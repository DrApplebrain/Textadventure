import "../Styles/About.css";
import Icon from "../Components/Icons";

// Die PUBLIC_URL-Konstante definieren
const PUBLIC_URL = import.meta.env.PUBLIC_URL || "";

// Bilder aus dem public Ordner abrufen
const teamMembers = [
  {
    name: "Artiom",
    image: `${PUBLIC_URL}/Team-Images/Artiom.jpg`,
    github: "https://github.com/art10mEu",
    linkedin: "https://www.linkedin.com/in/art10m/",
  },
  {
    name: "Youssef",
    image: `${PUBLIC_URL}/Team-Images/Youssef.jpg`,
    github: "https://github.com/YoussefDawod",
    linkedin: "https://www.linkedin.com/in/youssef-dawod-203273215/",
  },
  {
    name: "Kai",
    image: `${PUBLIC_URL}/Team-Images/Kai.png`,
    github: "https://github.com/DrApplebrain",
    linkedin: "https://www.linkedin.com/in/kai-apfel-1a75bb318/",
  },
  {
    name: "Mario",
    image: `${PUBLIC_URL}/Team-Images/Mario.jpg`,
    github: "https://github.com/Mario-Laudi",
    linkedin: "https://www.linkedin.com/in/mario-laudi-b8184497/",
  },
  {
    name: "Handrin",
    image: `${PUBLIC_URL}/Team-Images/Handrin.jpg`,
    github: "https://github.com/handrinh",
    linkedin: "https://www.linkedin.com/in/handrin-sarbast-hassen-688049334/+",
  },
];

function About() {
  return (
    <main className="main-about">
      <section className="content-section">
        <h1>
          Entdecke das nächste Level des Geschichtenerzählens – Dein Abenteuer,
          grenzenlos und einzigartig
        </h1>
        <p>
          Willkommen in einer neuen Dimension von Text-Adventures! Unser KI
          Text-Adventure lässt dich nicht nur eine Geschichte erleben – du
          erschaffst sie. Mit jedem deiner Schritte wird die Handlung durch
          fortschrittliche KI-Technologie in Worte gefasst und gleichzeitig in
          beeindruckende, dynamisch generierte Bilder verwandelt. Deine
          Entscheidungen formen die Welt um dich herum, während Text und Bild
          harmonisch zusammenarbeiten, um dir ein immersives Spielerlebnis zu
          bieten, das sich mit jedem Spiel neu erfindet. Und am Ende kannst du
          dein Abenteuer als PDF herunterladen – eine bleibende Erinnerung an
          deine persönliche Reise.
        </p>

        <h2>Die Macht der künstlichen Intelligenz in deinen Händen</h2>
        <p>
          Was unser Spiel so einzigartig macht, ist die Kombination aus moderner
          Texterstellung und visueller KI. Es geht nicht nur um Worte, sondern
          um lebendige Welten, die sich deinen Entscheidungen anpassen. Jedes
          Szenario, jede Szene wird individuell für dich erschaffen, und du
          erlebst eine Geschichte, die niemand sonst in genau dieser Form
          erleben wird. Du bestimmst den Verlauf, und die KI liefert die
          Visualisierungen, um deine Vorstellungskraft zu übertreffen.
        </p>

        <h2>Das Team hinter der Innovation</h2>
        <p>Hinter diesem Projekt stehen fünf junge Visionäre:</p>
        <div className="team-container">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.name}>
              <h3>{member.name}</h3>
              <img
                src={member.image}
                alt={member.name}
                className="profile-pic"
              />
              <div className="social-icons">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="github" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="linkedin" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p>
          Als Schüler haben wir dieses Spiel als unser Abschlussprojekt
          entwickelt, aber es ist mehr als das. Wir wollten beweisen, wie
          mächtig Technologie und Kreativität zusammenarbeiten können. Mit
          Leidenschaft und Entschlossenheit haben wir eine Plattform geschaffen,
          die nicht nur das Spielen, sondern auch das Erzählen von Geschichten
          neu definiert – für dich und alle, die neue Welten entdecken wollen.
        </p>
      </section>
    </main>
  );
}

export default About;
