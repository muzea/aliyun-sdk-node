export interface GenerateUpgradeRecordResponse {
    RequestId: string;
    Records: {
        Id: number;
        BatchStrategyNo: string;
        AccountId: string;
        DbfsId: string;
        EcsId: string;
        TaskId: string;
        RegionId: string;
        ZoneId: string;
        State: string;
        CurrentVersion: string;
        TargetVersion: string;
        UpgradeStartTime: number;
        UpgradeEndTime: number;
        TaskExecutionCounts: number;
        TaskErrorReason: string;
        CreateTime: number;
        UpdateTime: number;
    }[];
}
