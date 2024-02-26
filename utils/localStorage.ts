interface Data {
  name: string;
  id: string;
  note: string;
}

export interface LocalData {
  name: string;
  id: string;
  notes: string[];
}

export const createLocalStorage = (data: Data) => {
  const stringNotes = localStorage.getItem("notes");

  if (stringNotes) {
    const notesArr: LocalData[] = JSON.parse(stringNotes);

    const existingEntry = notesArr.find((item) => item.id === data.id);

    if (existingEntry) {
      const filteredArray = notesArr.filter((item) => item.id !== data.id);

      // edit exisingEntry
      const newArray = [
        ...filteredArray,
        { ...existingEntry, notes: [data.note, ...existingEntry.notes] },
      ];

      //update localStorage

      localStorage.setItem("notes", JSON.stringify(newArray));
    } else {
      const newArray = [
        ...notesArr,
        { id: data.id, name: data.name, notes: [data.note] },
      ];

      localStorage.setItem("notes", JSON.stringify(newArray));
      return;
    }
  } else {
    localStorage.setItem(
      "notes",
      JSON.stringify([
        {
          name: data.name,
          id: data.id,
          notes: [data.note],
        },
      ])
    );

    return;
  }
};

export const getNotes = (id: string) => {
  const ourNotes = localStorage.getItem("notes");

  if (ourNotes) {
    const notesData: LocalData[] = JSON.parse(ourNotes);

    const notesId = notesData.find((item) => item.id === id);

    if (notesId) {
      return notesId.notes || [];
    } else {
      return [];
    }
  } else {
    return [];
  }
};

export const getAllNotes = () => {
  const ourNotes = localStorage.getItem("notes");

  if (ourNotes) {
    const notesData: LocalData[] = JSON.parse(ourNotes);

    return notesData
  }
};

export const deleteNote = (charIndex: number, noteIndex: number) => {
  const ourNotes = localStorage.getItem("notes");

  if (ourNotes) {
    const notesData: LocalData[] = JSON.parse(ourNotes);

    const objectToDelete = notesData[charIndex];

    const newObject = {
      ...objectToDelete,
      notes: objectToDelete.notes.splice(noteIndex, 1),
    };

    notesData[charIndex] = newObject;

    localStorage.setItem("notes", JSON.stringify(notesData));

    return notesData;
  }
};
