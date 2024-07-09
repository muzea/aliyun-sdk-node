export interface GetHotlineAgentDetailReportResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: string;
    Data: {
        PageSize: number;
        Total: number;
        Page: number;
        Columns: {
            Key: string;
            Title: string;
        }[];
        Rows: any[];
    };
}
