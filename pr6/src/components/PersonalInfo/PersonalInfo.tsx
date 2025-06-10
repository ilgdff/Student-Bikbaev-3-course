import React from 'react';

interface PersonalInfoProps {
    userInfo: string;
}

class PersonalInfo extends React.Component<PersonalInfoProps> {
    constructor(props: PersonalInfoProps) {
        super(props);
    }

    render() {
        return (
            <div className="personal-info">
                <h2>{this.props.userInfo}</h2>
            </div>
        );
    }
}

export default PersonalInfo;