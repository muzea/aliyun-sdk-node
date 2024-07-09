export interface DescribeArchiveTableListResponse {
    RequestId: string;
    Data: {
        Total: number;
        PageIndex: number;
        PageSize: number;
        Tables: {
            SchemaName: string;
            TableName: string;
            CreatedDate: number;
            SpaceSize: number;
            FileCount: number;
            LastSuccessArchiveTime: number;
            ArchiveStatus: string;
        }[];
        TobeArchivedConut: number;
        RunningCount: number;
        SuccessCount: number;
        PausedCount: number;
    };
}
