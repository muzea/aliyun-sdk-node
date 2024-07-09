export interface DescribeBackupSetsResponse {
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `7103AEE3-9025-442F-B82B-BABD0A******`
     */
    RequestId: string;
    BackupSets: {
        /**
         * 备份集列表。
         */
        backupSet: {
            /**
             * 该备份集是否可恢复。
             * @example `false`
             */
            EnableRecovery: boolean;
            /**
             * 备份状态，取值范围如下：
             * * -1：失败
             * * 0：未开始
             * *  1：运行中
             * *  2：成功
             * @example `2`
             */
            Status: number;
            /**
             * 备份恢复持续时间。
             * @example `2020-06-05 11:31:38`
             */
            BackupConsitentTime: string;
            /**
             * 备份类型，取值范围如下：
             * * manual：手动备份
             * * auto：自动备份
             * @example `manual`
             */
            BackupType: string;
            /**
             * 备份开始时间，格式为时间戳（单位为毫秒）。
             * @example `1591327754000`
             */
            BackupStartTime: number;
            /**
             * 备份级别，取值范围如下：
             * * db：数据库级别
             * * instance：实例级别
             * @example `instance`
             */
            BackupLevel: string;
            /**
             * 备份方式，取值范围如下：
             * * logic：逻辑备份
             * * phy：快速备份
             * @example `logic`
             */
            BackupMode: string;
            /**
             * 备份结束时间，格式为时间戳（单位为毫秒）。
             * > 0表示未结束。
             * @example `1591327899000`
             */
            BackupEndTime: number;
            /**
             * 备份集ID。
             * @example `ba30d5c4-a6dc-11ea-bd40-************`
             */
            Id: string;
            /**
             * 备份集大小，单位为M。
             * @example `93.24`
             */
            BackupTotalSize: string;
            BackupDbs: {
                backupDb: string[];
            };
        }[];
    };
}
