/* Return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order) */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
    const classRoom1 = new ClassRoom(19);
    const classRoom2 = new ClassRoom(20);
    const classRoom3 = new ClassRoom(34);

    return [classRoom1, classRoom2, classRoom3];
}
