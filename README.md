### Note on the final exam
I tried adding the typeahead in the client side properly, displaying the typeahead form. But I did not figure out how to receive the pipe line of text in the server yet. In ```tracker.service.ts``` I implemented ```search``` function that gets from the server the requested items via a http get call. In ```share.component.ts```, ```search``` function fetches data from the typeahead form in the view, and calls ```search``` from ```tracker.service.ts```. ```share.component.html``` has been appropriately updated to show typeahead. In ```model.js```, I implemented ReturnSearchUser that filters from the Memebers and returns the filtered items. In ```controller.js```, I called the ```ReturnSearchUser``` function from ```model.js```, sending in the (supposedly) pipe line of text. It's in progress.


# Jinsoo Choi
# Sp18WEB_FitnessTracker 

## Project Explanation:

### My tracker app uses MVC design pattern:
- Model is tracker.ts which has Memebers as the entire structure.

### Important notice:
- **If nothing happens after a button click or selection from an option, it may be the button/selection did not actually get clicked. In that case, please try clicking one more time.** For some reason, these buttons want to be clicked all the way through. If the buttons are clicked properly, the app will work as expected. Thank you.
- You can run the app by ```ng serve``` and ```npm run server```

### There are key features that I focused on building up during the development of the tracker app:

### Tracker/log

**:Workout Log**

- Once the user visit the tracker page, they get the AvailableExercises list and are allowed to choose an exercise from the select option list. 
- Once the user selects an exercise, they are allowed to save workout log with duration and cycle.
- The user is allowed to save only if they have filled all fields of the form and an exercise has been selected initially. If no exercise is selected initially, they are not allowed to save even if the forms are filled.
- Once the user clicks save, the workout summary/history at the bottom gets updated with new values and the values are displayed, and all the workouts saved are listed.

**:Tracking Workout History**

- To test toggling prev/next workout history, you can save a few workouts today and then change your computer's date manually through system preferences, and go out and come back in to the tracker page(save a few workouts if you'd like) and try toggling history back and forth using the prev/next buttons.
- Upon the user's save, the WorkoutHistory gets updated with new values. Then, all the workouts done in the day is being displayed in the workout summary section. By default, today's workout summary is displayed initially.
- When the user clicks on Prev button, it shows the previous day workout summary of the user. Likewise, when the user clicks on Next button, it shows the next day workout summary. These buttons are only enabled if the previous/next day exists in the history.
- When the date changes(i.e. next day), the user's today data is resetted.

### Profile management

**:Upload Image**

- It lets the user choose a file from the file system of their computer, and displays in the profile picture segment.
- The user must click on Upload button for the image to be uploaded/updated in the server so that when the user re-signs in, the image is updated to the new one, and to allow other users to see in the share section. Otherwise, the picture is never updated in the server and the old one is still the old picture.

**:Update/Change Profile Information**

- When the user clicks edit button, user can see the edit forms. 
- The user can change their profile information via this forms.
- The forms are two-way data binded using ngModel so when the user toggles back to profile view by clicking on save button, the user can see the updated profile.
- Upon save, the updated data is sent to the server to update user data accordingly.

### Share 

**:Send Friend Request**

- The user can send a friend request to other users.
- Once the request is sent, accepted a request, or became friends, the other user is removed from the user list to prevent double requests.

**:Accept Friend Request**

- The user can accept friend requests from other users. 
- Once the user accepts, they become friends and each other can view each other's workout history and profile.
- Once they become friends, the other user appears in the user's friend list and the user can choose a friend to see their information.

**:View Friends' Workout History**

- Once the user select a friend to view from the friends list, the selected friend's profile and workout history is displayed.
- The friend's workout history works similar to the tracker/log page's history feature.
- In the share page, the data is updated real-time, showing the newly signed up users, requests and friends, through refreshing the data every second.

### Sign In
- When the user tries to access components other than home, signin and signup, they are automatically   redirected to signin page.
- If the user fails signing in, it displays a fail message.
- Once the user signs in, the server returns the matching user data and it becomes Me.
- Once the user signs in, the sign in page is never reachable by the user unless they sign out.

### Sign Up
- Checks if a desired userId already exists in the system and prevent from creating a user with the existing id.
- Once the id is confirmed to be non-existing, let the user create initial profile. These can be viewed in the Profile component.
- Once the user signs up, they do not have to sign in again, and they can access all the features.
- Once the user signs up, the sign up page is never reachable by the user unless they sign out.

### Sign Out
- Let the user sign out by asking for a confirmation.
- Once the user sign out, Me is reset to null to allow new sign up.



## Project plan:

This project is about building a fitness tracker. 
It will have at least three complete sub-systems – 1) profile management, 2) exercise log, 3) Sharing with friends. 

### Key features :
**1) Exercise Log**

- log exercise and keep track of the history.

**2) Profile management:**

- let the user initialize profile upon sign up.
- the user can update their profile in the profile page.

**3) Share with friends**

- let users be friends by sending requests and accepting requests.
- once they become friends, they can view each other's profile and workout history.

//They are subject to change//
