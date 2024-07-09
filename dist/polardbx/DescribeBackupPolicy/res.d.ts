export interface DescribeBackupPolicyResponse {
    /**
     * 返回信息，成功返回success，错误返回对应错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B87E2AB3-B7C9-4394-9160-7F639F732031`
     */
    RequestId: string;
    /**
     *  请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回体。
     */
    Data: {
        LogLocalRetentionSpace: number;
        DBInstanceName: string;
        BackupWay: string;
        BackupPeriod: string;
        ForceCleanOnHighSpaceUsage: number;
        BackupType: string;
        LocalLogRetention: number;
        RemoveLogRetention: number;
        BackupPlanBegin: string;
        BackupSetRetention: number;
        IsEnabled: number;
        ColdDataBackupInterval: number;
        ColdDataBackupRetention: number;
        LocalLogRetentionNumber: number;
        IsCrossRegionDataBackupEnabled: boolean;
        IsCrossRegionLogBackupEnabled: boolean;
        DestCrossRegion: string;
        CrossRegionDataBackupRetention: number;
        CrossRegionLogBackupRetention: number;
    };
}
