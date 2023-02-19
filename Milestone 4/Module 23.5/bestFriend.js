function bestFriend(friends) {
    let bestFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if(friend.length > bestFriend.length){
            bestFriend = friend;
        }
    }
    return bestFriend;
}

const friends = ['Borshon', 'Chayon', 'Sani']

const findBestFriend = bestFriend(friends);

console.log(findBestFriend);