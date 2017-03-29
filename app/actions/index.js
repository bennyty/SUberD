

export const requestRide = (pickup,dropoff,numRiders,comment, user) => {
       //Import Admin SDK
       // Get a database reference to our blog
       var db = firebase.database();
       var ref = db.ref("riders/");
       var usersRef = ref.child("riders");
       usersRef.set({
        person: 
                {
                phonenumber: user.phoneNumber,
                name: user.name,
                pickup: pickup, 
                dropoff: dropoff,
                numRiders: numRiders,
                comment: comment,
                reqeustedAt: Date.now()
                }
        });
        return 1;
// Default exports are the constants.
// Import as: import actionNames from '../actions'
export default { REQUEST_RIDE  : "REQUEST_RIDE",
                 REQUEST_QUEUE : "REQUEST_QUEUE",
                 CREATE_EVENT  : "CREATE_EVENT",
                 REMOVE_RIDE   : "REMOVE_RIDE"}

};

export const createEvent = (eventName, eventID) => ({
	type: CREATE_EVENT,
	eventName,
	eventID,
	createdAt: Date.now()
	//even password
});

export const removeRider = () => ({
	type: REMOVE_RIDE,
	//removes the rider by that name from the queue, send event ID as well
});


export const requestQueue = (eventID) => {
        
        var db = firebase.database();
        var ref = db.ref("Riders");
        red.orderByChild("eventID").equalTo(eventID).on("child_added").then(function(snapshot)
        {
                // The Promise was "fulfilled" (it succeeded).
               const queue = snapshot.val(); 
               return queue; 
        },function(error)
        {
                  // The Promise was rejected.
                  console.error(error);
                  return 0;
        })
};


//get height to mainitain scroll at top/bottom
export const updateQueueHeight = (event) => {
	const layout = event.nativeEvent.layout;
	return {
		type: 'UPDATE_MESSAGES_HEIGHT',
		height: layout.height
	}
};


//login actions
export const login = () => {
    return function (dispatch) {
        dispatch(startAuthorizing());

        firebase.auth()
                .signInAnonymously()
                .then(() => {
                    dispatch(userAuthorized());
                    dispatch(fetchMessages());
                });
    }
}

export const startAuthorizing = () => ({
    type: 'USER_START_AUTHORIZING'
});

export const userAuthorized = () => ({
    type: 'USER_AUTHORIZED'
});
