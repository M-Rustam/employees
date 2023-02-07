import TeamMemberCard from './TeamMemberCard'

const TeamMembers = ({ employees, handleEmployeeCardCklick, selectedTeam }) => {
  return (
    employees.map((employee) => (
      <TeamMemberCard employee={employee} handleEmployeeCardCklick={handleEmployeeCardCklick} selectedTeam={selectedTeam} />

    ))
  )

}
export default TeamMembers;