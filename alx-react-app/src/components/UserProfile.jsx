function UserProfile(userInfo) {
  const { name, age, bio } = userInfo;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
