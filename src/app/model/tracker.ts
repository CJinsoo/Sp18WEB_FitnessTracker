export class Tracker{
    
    Members: User[] = [];
    //PossibleFriends: User[] = new Array();
    Tips:{
        url: string
    };
    Friends: Friends[];
}

export class User {
    //PossibleFriends:User[] = [];
    UserId:string;
    UserProfile: Profile;
    Workout: Activity[];
    CurrentWorkout: string;
    Password:string;
    AvailableExercises :string[];
    Today:TotalToday;
    WorkoutHistory: TotalToday[];
    //Friend: Friends;
    // Friend:Friends[];
}

export class Friends {
    UserId:string;
    PossibleFriends: User[];
    Friends:User[];
    MyRequests:User[];
    RequestsToMe:User[];
}

/* export class Friends {
    User:User;
    AreYouMyFriend:boolean;
    DidYouRequest:boolean;
    DidIRequest:boolean;
} */

export class Profile {

    //UserId:string;
    Name:string;
    Age:number;
    Gender:string;
    Email:string;
    Heightft:number;
    Heightin:number;
    Weight:number;
    Bmi:number;
    Goal:string;
    ProfileImg:string;// = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

    constructor() {
        this.Name = "Jane Doe";
        this.Age = 20;
        this.Heightft = 5;
        this.Heightin = 1;
        this.Weight = 100;
        this.Email = "example@gmail.com";
        this.Goal = "";
    }
}

export class Activity {

    ActivityName: string;
    Duration: number;
    //TotalToday: number;
    Cycle: number;
}

export class TotalToday {

    Date:string;
    TotalTime:number;
    TotalWorkoutType:number;
    TotalWorkout:Activity[];
}

