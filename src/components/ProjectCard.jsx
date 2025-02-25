export function ProjectCard({ title, description, link }) {
    return (
      <div className="border p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
          Ver proyecto →
        </a>
      </div>
    );
  }
  export default ProjectCard;