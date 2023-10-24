import './ProfileImage.scss';

type ProfileImageProps = {
    image: string
};

/**
 * A component used to display a the profile image of the user.
 */
const ProfileImage = ({image}: ProfileImageProps) => {

    return (
        <div className='rk-profile-image'>
            <img alt='Profile Image' src={image}/>
        </div>
    );
}

export default ProfileImage;