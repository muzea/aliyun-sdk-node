export interface StartPTDetectionResponse {
    Code: string;
    ErrorMessage: string;
    RequestId: string;
    Success: boolean;
    Data: {
        Status: string;
        InputData: string;
        Data: string;
        ErrMsg: string;
        Success: boolean;
    };
}
