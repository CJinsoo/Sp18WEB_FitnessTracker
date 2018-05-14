// Model of the app
export class Tracker{
    Members: User[] = [];
}

// User objects' model
export class User {
    UserId:string;
    UserProfile: Profile;
    Workout: Activity[];
    CurrentWorkout: string;
    Password:string;
    AvailableExercises :string[];
    Today:TotalToday;
    WorkoutHistory: TotalToday[];
    Friend: Friends;
}

// Profile objects' model
export class Profile {
    Name:string;
    Age:number;
    Gender:string;
    Email:string;
    Heightft:number;
    Heightin:number;
    Weight:number;
    Bmi:number;
    Goal:string;
    ProfileImg:string;
}

// Activity objects' model
export class Activity {
    ActivityName: string;
    Duration: number;
    Cycle: number;
}

// TotalToday objects' model
export class TotalToday {
    Date:string;
    TotalTime:number;
    TotalWorkoutType:number;
    TotalWorkout:Activity[];
}

// Friends objects' model
export class Friends {
    Friends:string[];
    MyRequests:string[];
    RequestsToMe:string[];
}
