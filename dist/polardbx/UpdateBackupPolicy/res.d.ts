export interface UpdateBackupPolicyResponse {
    /**
     * 返回信息，成功返回success，错误返回对应错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的策略详情。
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
