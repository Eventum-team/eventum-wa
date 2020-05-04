export default function containsSubStrings(container, contained){
    var splitted = contained.toLowerCase().split(" ");
    var contains = true;
    for(var index = 0; index < splitted.length; index++){
        if(!container.toLowerCase().includes(splitted[index])){
            contains = false;
            break;
        }
    }
    return contains;
}