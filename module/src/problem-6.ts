{
    //
    interface Profile{
        name: string,
        age: number,
        email: string
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>) : Profile {
        return Object.assign({}, profile, updates);
    };

    const myProfile = {
        name: "Alice", 
        age: 25,
        email: "alice@example.com" 
    };
    
    //Result
    console.log(updateProfile(myProfile, {age: 26 }));

    //
}