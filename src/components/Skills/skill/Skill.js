import React from 'react'

const Skill = (props) => {
    let {skill} = props
    let image = `images/skills/${skill.image}`
    return (
        <div>
            <h2>{skill.name}</h2>
            <img src={image} alt="Skill Icon" />
        </div>
    )
}

export default Skill
