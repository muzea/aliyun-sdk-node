export interface GetQualityProjectLogResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        ProjectCreateTime: string;
        ActionType: string;
        ActionTime: string;
        ActionData: string;
        ProjectId: number;
    }[];
}
