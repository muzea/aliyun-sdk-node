export interface ListPowerStationResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        PageNo: number;
        PageSize: number;
        Total: number;
        DataList: {
            PowerStationUid: string;
            RatedPower: number;
            AlgoInstanceUid: string;
            Description: string;
            Name: string;
        }[];
    };
}
