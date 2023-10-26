/**
 * A type to represent the details for a person.
 */
export type Person = {
    name: string;
    image: string;
    email: string,
    company: string,
    phone: string,
    education: Education[],
    experience: Experience[]
};

/**
 * A type to represent the a single education detail for a person.
 */
export type Education = {
    institution: string,
    startYear: string,
    endYear: string,
    degree: string
};

/**
 * A type to represent the a single experience for a person.
 */
export type Experience = {
    institution: string,
    startYear: string,
    endYear: string,
    title: string
};

/**
 * Represents the state stored in redux for general parts of the app.
 * For a simple app like this, a single state slice can be used for both the selected
 * person and the search string. The selected person is optional as there may not be a 
 * person selected from the list.
 */
export type AppState = {
    searchString: string,
    selectedPerson?: Person
};