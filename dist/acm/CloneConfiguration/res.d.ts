export interface CloneConfigurationResponse {
    Message: string;
    RequestId: string;
    Code: string;
    Result: {
        Success: boolean;
        SuccessItems: {
            DataId: string;
            Group: string;
        }[];
        TotalCount: number;
    };
}
