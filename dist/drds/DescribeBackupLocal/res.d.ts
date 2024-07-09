export interface DescribeBackupLocalResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `FDC9CFD5-306D-4A23-9D8C-057274C6****`
     */
    RequestId: string;
    /**
     * 备份策略设置详情。
     */
    BackupPolicyDO: {
        /**
         * 本Api无此返回
         * @example `null`
         */
        BackupDbName: string;
        /**
         * 本Api无此返回
         * @example `0`
         */
        LogBackupRetentionPeriod: number;
        /**
         * 本Api无此返回
         * @example `0`
         */
        DataBackupRetentionPeriod: number;
        /**
         * 本Api无此返回
         * @example `null`
         */
        BackupType: string;
        /**
         * 本Api无此返回
         * @example `null`
         */
        BackupLevel: string;
        /**
         * 日志备份本地保留小时数，取值范围为0~168，**0**表示不保留，默认值为**18**。
         * @example `18`
         */
        LocalLogRetentionHours: number;
        /**
         * 当实例使用空间超过90%或剩余空间小于5GB时，是否开启无条件清理Binlog，取值范围如下：
         * * 1：开启
         * * 0：不开启
         * @example `1`
         */
        HighSpaceUsageProtection: number;
        /**
         * 本Api无此返回
         * @example `0`
         */
        GmtModified: number;
        /**
         * 本Api无此返回
         * @example `0`
         */
        BackupRetentionPeriod: number;
        /**
         * 本Api无此返回
         * @example `null`
         */
        BackupPolicyMode: string;
        /**
         * 本Api无此返回
         * @example `null`
         */
        PreferredBackupPeriod: string;
        /**
         * 本地日志最大空间使用率。 取值范围为0~50，此为循环空间，默认为**30**。
         * @example `30`
         */
        LocalLogRetentionSpace: number;
        /**
         * 本Api无此返回
         * @example `null`
         */
        BackupAppName: string;
        /**
         * 本Api无此返回
         * @example `null`
         */
        PreferredBackupTime: string;
        /**
         * 本Api无此返回
         * @example `0`
         */
        GmtCreate: number;
        /**
         * 本Api无此返回
         * @example `null`
         */
        BackupMode: string;
        /**
         * 本Api无此返回
         * @example `null`
         */
        BackupLog: string;
        /**
         * 本Api无此返回
         * @example `null`
         */
        NextBackupActuallyTime: string;
    };
}
