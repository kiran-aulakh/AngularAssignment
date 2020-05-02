export interface Delta {
    "confirmed": Number,
    "deceased": Number,
    "recovered": Number
}

export interface DitrictWiseData {
    "notes": String,
    "active": Number,
    "confirmed": Number,
    "deceased": Number,
    "recovered": Number,
    "delta": Delta
}

export interface DistrictData {
    district: DitrictWiseData[];
}

export interface StateData {
    "districtData": DistrictData,
    "stateCode": String
}

export interface CountryData{
    state:  StateData
}