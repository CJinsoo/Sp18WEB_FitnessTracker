export class Tracker{
    
    Members: User[] = [];
    ExerciseStack = [
        "Squat", "Leg Press", "Lunge", "Deadlift", "Leg Extension", "Leg Curl", "Standing Calf Raise", "Seated Calf Raise",
        "Bench Press", "Chest fly", "Push Up", "Pull Down", "Pull Up", "Shoulder Press", "Triceps Extension", "Biceps Curl",
        "Crunch", "Lunge", "Plank", "Running", "Mild Walking", "Fast Walking", "Yoga", "Tabata", "Dance", "Step"
    ]
}

export class User {
    UserId:string;
    UserProfile: Profile;

}

export class Profile {

    UserId:string;
    Name:string;
    Age:number;
    Gender:string;
    Email:string;
    Heightft:number;
    Heightin:number;
    Weight:number;
    Bmi:number;
    Goal:string;

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
    TotalHrWeek: number;

}