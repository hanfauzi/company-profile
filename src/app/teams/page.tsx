// SSR: Fetch user data from randomuser.me
const getTeamMembers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=6&nat=us");
  const data = await res.json();
  return data.results;
};

const roles = [
  {
    title: "Chief Executive Officer (CEO)",
    description: "Leads the overall strategic vision and direction of the company.",
  },
  {
    title: "Chief Technology Officer (CTO)",
    description: "Oversees all technical aspects and ensures technological growth.",
  },
  {
    title: "Lead Software Engineer",
    description: "Manages the development team and maintains code quality.",
  },
  {
    title: "UI/UX Designer",
    description: "Designs intuitive user experiences and engaging interfaces.",
  },
  {
    title: "Cloud Infrastructure Engineer",
    description: "Maintains and optimizes cloud platforms and services.",
  },
  {
    title: "Business Analyst",
    description: "Identifies business needs and bridges communication with tech teams.",
  },
];

const TeamsPage = async () => {
  const team = await getTeamMembers();

  return (
    <section className="container font-[Montserrat] text-[#393E46] mx-auto px-6 md:px-20 py-20 space-y-12 mt-10">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Meet the People Behind ARUNIKA</h1>
        <p className="text-muted-foreground">
          Our team combines technical expertise, creativity, and dedication to deliver meaningful results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member: any, idx: number) => {
          const { title, description } = roles[idx];

          return (
            <div
              key={idx}
              className="border rounded-xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={member.picture.large}
                alt={member.name.first}
                className="w-24 h-24 rounded-full mb-4 object-cover shadow"
              />
              <h1 className="text-lg font-semibold">
                {member.name.first} {member.name.last}
              </h1>
              <p className="text-sm text-gray-500 italic">{title}</p>
              <p className="text-sm mt-1 text-muted-foreground">{description}</p>
              <p className="text-xs text-gray-400 mt-2">
                Based in {member.location.city}, {member.nat}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamsPage;
