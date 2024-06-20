import mary from '../assets/team/mary.jpeg';
import josephine from '../assets/team/josephine.jpg';
import muligande from '../assets/team/muligande.png';
import emma from '../assets/team/emma.jpg';
import daniel from '../assets/team/daniel.png';
import olivier from '../assets/team/olivier.png';
import imageThumb from '../assets/common/governingboard.jpg';

const specialPath = ['/dashboard', '/login', '/forgot-password', '/reset-password'];

const outreachProjectsData = [
  {
    title: 'Churches',
    content: '10K',
    rowspan: 1,
    colspan: 2,
    backgroundColor: 'bg-[#f8d171]',
    textColor: 'text-primary',
  },
  {
    title: 'People',
    content: '3K+',
    rowspan: 2,
    colspan: 1,
    backgroundColor: 'bg-[#306675]',
    textColor: 'text-[#fff]',
  },
  {
    title: 'Projects',
    content: '10K',
    rowspan: 1,
    colspan: 2,
    backgroundColor: 'bg-[#eb930a]',
    textColor: 'text-white',
  },
];


const teamMembers = [
  {
    label: 'mary-kamanzi',
    name: "Mary M. KAMANZI",
    positionKey: "staff.position1",
    image: mary,
    bio: <p>
      Mary has served as the Executive Director of
      The PEACE Plan Rwanda since November,
      2016. She previously headed the family and
      orphan care initiative in the same
      Organization. Mary holds a Bachelor’s
      Degree in counseling and health care in
      family ministries from the University of the
      Nations Kona Hawaii, a second Degree in
      children social service from the University of
      the Nations, Burtigny Switzerland and a third
      Degree in education.
      <br />
      <br />
      Mary’s career spans various leadership
      positions. She served as the National
      Director for Youth with A Mission Rwanda,
      National Unity and Reconciliation Commissioner and Trainer at Vessels for Honor
      Kigali. She is the Founder of Abafasha Beza Rwanda (Pastors’ wives ministry). Mary is
      a bi-vocational pastor at her church of fellowship Christian Life Assembly; and together
      with her husband; they head the Church’s family ministry. She serves as a Board
      member in different organizations such as Youth with A Mission East Africa,
      Compassion International Rwanda, Edify Rwanda and Schools Evangelism Jinja,
      Uganda. She also founded the Christian Union at Nkozi University in Uganda. She
      worked in Uganda, Kenya, and South Africa.
      <br />
      <br />
      Mary is married to Methode Kamanzi for 35 years; having raised 11 children, three of
      them biological.
      <br />
      <br />
      She is passionate about evangelism, discipleship, education, early childhood, orphan
      care and reaching out to the vulnerable. She also loves family, travelling, interior design,
      hangouts, a good laugh, working out, prayer walking and having quiet time.
    </p>
  },
  {
    label: 'josephine-munyeli',
    name: "Josephine MUNYELI",
    positionKey: "staff.position2",
    image: josephine,
    bio: (<p>
      Josephine MUNYELI joined the PEACE Plan Rwanda in 2017 as a volunteer and later became staff.
      Previously, she led healing, peacebuilding and reconciliation initiatives in World Vision Rwanda;
      mobilized, monitored and evaluated the Gacaca processes in Johns Hopkins University and the
      National Service of Gacaca Jurisdictions. Josephine also served in administration at the Medecins
      Sans Frontieres Belgium and Holland and in the Foreign Exchange transactions unit in Commercial
      Bank of Rwanda before that. Her work life began as a facilitator of visits to National Parks in the
      Office Rwandais du Tourism et des Parcs Nationaux (ORTPN). She currently serves at the PEACE
      Plan Rwanda as the Director of Administration and Finances.
      <br />
      <br />
      Josephine holds an MBA in Project Management and a Bachelor’s Degree in Sociology. She loves
      the Lord Jesus Christ and worships at Christian Life Assembly Nyarutarama– Kigali.
    </p>)
  },
  {
    label: 'jean-pierre-muligande',
    name: "Jean Pierre MULIGANDE",
    positionKey: "staff.position3",
    image: muligande,
  },
  {
    label: 'emmanuel-ngirinshuti',
    name: "Emmanuel NGIRINSHUTI",
    positionKey: "staff.position4",
    image: emma,
    bio: (<p>
      Emmanuel NGIRINSHUTI has served as a dedicated PEACE Programs
      coordinator at PEACE Plan Rwanda since 2014. With a strong background in
      social work, he brings valuable expertise to his role in promoting PEACE
      skills and harmony within communities. Emmanuel actively engages in
      training churches on PEACE skills and effectively connects and coordinates
      volunteers for missions. Emmanuel’s extensive knowledge and experience as
      a social worker enable him to navigate the complexities of community
      development and facilitate positive change. His commitment to building
      peaceful societies and his compassionate approach make him an invaluable
      asset to the organization and the communities he serves. His educational
      background includes a bachelor’s degree in social work from Catholic
      University of Rwanda, various graduate trainings in organizational
      leadership, entrepreneurship, human rights, and child protection.

    </p>)
  },
  {
    label: 'daniel-niyonilingira',
    name: "Daniel NIYONILINGIRA",
    positionKey: "staff.position5",
    image: daniel,
  },
  {
    label: 'olivier-niyigaba',
    name: "Olivier NIYIGABA",
    positionKey: "staff.position7",
    image: olivier,
  },
];

const stories = [
  {
    id: 1,
    title: "Story One",
    description: "This is the first story.",
    link: "story-one",
    thumbnail: imageThumb 
  },
  {
    id: 2,
    title: "Story Two",
    description: "This is the second story.",
    link: "story-two",
    thumbnail: imageThumb 
  },
];



export { specialPath, outreachProjectsData, teamMembers, stories };
