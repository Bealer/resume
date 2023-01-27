export interface reference {
    name: string,
    email: string,
    company: string
}

export interface education {
    giver: string,
    diploma: string,
}

export interface experience {
    company: string,
    position: string,
    start: Date,
    end?: Date,
    duties: string[],
    achievments: string[],
}

export interface project {
    name: string,
    highlights: string[]
}

export interface projectHosted extends project {
    Url: string
}