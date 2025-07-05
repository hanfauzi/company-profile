// SSR: Fetch user data from randomuser.me
const getTeamMembers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=6&nat=us");
  const data = await res.json();
  return data.results;
};

const TeamsPage = async () => {
  const team = await getTeamMembers();

  return (
    <section className="container mx-auto px-6 md:px-20 py-20 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Meet the People Behind ARUNIKA</h2>
        <p className="text-muted-foreground">
          Our team combines technical expertise, creativity, and dedication to deliver meaningful results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member: any, idx: number) => (
          <div key={idx} className="border rounded-xl p-6 flex flex-col items-center text-center">
            <img
              src={member.picture.large}
              alt={member.name.first}
              className="w-24 h-24 rounded-full mb-4 object-cover shadow"
            />
            <h4 className="text-lg font-semibold">
              {member.name.first} {member.name.last}
            </h4>
            <p className="text-sm text-gray-500 italic">{member.location.city}, {member.nat}</p>
            <p className="text-sm mt-2 text-muted-foreground">
              {member.name.first} is a passionate team member specializing in collaborative problem-solving and creative thinking.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsPage;
