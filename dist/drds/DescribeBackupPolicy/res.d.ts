export interface DescribeBackupPolicyResponse {
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `8FAF3989-79CD-4A67-8FFD-97899B64SD5T`
     */
    RequestId: string;
    /**
     * 备份策略设置详情。
     */
    BackupPolicyDO: {
        /**
         * 此api无返回
         * @example `null`
         */
        BackupDbName: string;
        /**
         * 日志备份保留天数。
         * @example `10`
         */
        LogBackupRetentionPeriod: number;
        /**
         * 数据备份保留时，单位为天。
         * @example `10`
         */
        DataBackupRetentionPeriod: number;
        /**
         * 备份类型，取值范围如下：
         * - manual：手动备份
         * - auto：自动备份
         * @example `auto`
         */
        BackupType: string;
        /**
         * 备份级别，取值范围如下：
         * - db：数据库级别
         * - instance：实例级别
         * @example `db`
         */
        BackupLevel: string;
        /**
         * 此api无返回
         * @example `0`
         */
        LocalLogRetentionHours: number;
        /**
         * 此api无返回
         */
        HighSpaceUsageProtection: number;
        /**
         * 此api无返回
         * @example `0`
         */
        GmtModified: number;
        /**
         * 备份保留天数。
         * @example `8`
         */
        BackupRetentionPeriod: number;
        /**
         * 备份策略模式，取值范围如下：
         * - DataBackupPolicy：数据备份策略
         * - LogBackupPolicy：日志备份策略
         * @example `DataBackupPolicy`
         */
        BackupPolicyMode: string;
        /**
         * 备份周期，允许传入多个时间周期，多个周期间用英文逗号（,）分隔，取值范围如下：
         * - 1: 星期日
         * - 2: 星期一
         * - 3: 星期二
         * - 4: 星期三
         * - 5: 星期四
         * - 6: 星期五
         * - 7: 星期六
         * @example `2`
         */
        PreferredBackupPeriod: string;
        /**
         * 此api无返回
         * @example `0`
         */
        LocalLogRetentionSpace: number;
        /**
         * 此api无返回
         * @example `null`
         */
        BackupAppName: string;
        /**
         * 备份的时间段（UTC时间）。
         * @example `22:00:00-23:00:00`
         */
        PreferredBackupTime: string;
        /**
         * 此api无返回
         * @example `0`
         */
        GmtCreate: number;
        /**
         * 备份方式，取值范围如下：
         * * **logic**：逻辑备份
         * * **phy**：快速备份
         * @example `phy`
         */
        BackupMode: string;
        /**
         * 是否开启备份日志，取值范围如下：
         * * **1**：开启
         * * **0**：关闭
         * @example `1`
         */
        BackupLog: string;
        /**
         * 此api无返回
         * @example `null`
         */
        NextBackupActuallyTime: string;
    };
}
