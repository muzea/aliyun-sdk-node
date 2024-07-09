export interface DescribePdnsOperateLogsResponse {
    TotalCount: number;
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    Logs: {
        OperateTime: string;
        Type: string;
        Action: string;
        content: string;
    }[];
}
