export class Tracker{
    
    Members: User[] = [];
    
    Tips:{
        url: string
    };
}

export class User {
    UserId:string;
    UserProfile: Profile;
    Workout: Activity[];
    CurrentWorkout: string;
    Password:string;
    AvailableExercises :string[];
    Today:TotalToday;
    WorkoutHistory: TotalToday[];
}

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

    TotalTime:number;
    TotalWorkoutType:number;
    TotalWorkout:Activity[];
}