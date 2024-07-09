export interface DescribeCrossRegionBackupsResponse {
    /**
     * 查询结束时间。
     * @example `2019-06-15T12:10:00Z`
     */
    EndTime: string;
    /**
     * 查询开始时间。
     * @example `2019-05-30T12:10:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `60912B41-7579-4B5D-B289-8856030F0A6A`
     */
    RequestId: string;
    /**
     * 本页备份文件个数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `100`
     */
    TotalRecordCount: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    Items: {
        /**
         * 跨地域备份列表。
         */
        Item: {
            /**
             * 备份文件里数据的时间点。
             * @example `2024-03-05T02:22:54Z`
             */
            ConsistentTime: string;
            /**
             * 存储类型。取值：
             * * **local_ssd**：本地SSD盘（推荐）
             * * **cloud_ssd**：SSD云盘
             * * **cloud_essd**：ESSD云盘
             * @example `ssd`
             */
            DBInstanceStorageType: string;
            /**
             * 跨地域备份文件ID。
             * @example `1249****`
             */
            CrossBackupId: number;
            /**
             * 跨地域备份类型，取值：
             * * **F**：全量；
             * * **I**：增量。
             * @example `F`
             */
            BackupType: string;
            /**
             * 跨地域备份开始时间。
             * @example `2024-03-05T02:22:45Z`
             */
            BackupStartTime: string;
            /**
             * 备份文件存储位置。
             * @example `oss`
             */
            CrossBackupSetLocation: string;
            /**
             * 实例编号。用于区分该备份集产生于主实例或备实例。
             * @example `8161***`
             */
            InstanceId: number;
            /**
             * 跨地域备份文件外网下载链接。
             * @example `http://rdsddrbak-shanghai.oss-cn-shanghai.aliyuncs.com/****`
             */
            CrossBackupDownloadLink: string;
            /**
             * RDS侧的备份生成时间。
             * @example `2024-03-05T02:23:37Z`
             */
            BackupEndTime: string;
            /**
             * 数据库版本。
             * @example `5.6`
             */
            EngineVersion: string;
            /**
             * 转储完成的备份文件状态，取值：
             * * **0**：完成备份
             * * **1**：备份失败
             * @example `0`
             */
            BackupSetStatus: number;
            /**
             * 跨地域备份文件压缩包名称。
             * @example `cn-hangzhou_rm-****_hins81xxx_data_20190612134426_qp.xb`
             */
            CrossBackupSetFile: string;
            /**
             * 备份文件的备份策略，取值：
             * * **0**：实例备份
             * * **1**：单库备份
             * @example `0`
             */
            BackupSetScale: number;
            /**
             * 跨地域备份文件大小，单位：Byte。
             * @example `5312836`
             */
            CrossBackupSetSize: number;
            /**
             * 跨地域备份的目的地域ID。
             * @example `cn-shanghai`
             */
            CrossBackupRegion: string;
            /**
             * 实例系列，取值：
             * * **Basic**：基础系列
             * * **HighAvailability**：高可用系列
             * * **Finance**：三节点企业系列（仅中国站支持）
             * @example `HighAvailability`
             */
            Category: string;
            /**
             * 数据库类型。
             * @example `mysql`
             */
            Engine: string;
            /**
             * 跨地域备份方式，取值：
             * * **L**：逻辑备份
             * * **P**：物理备份
             * @example `P`
             */
            BackupMethod: string;
            RestoreRegions: {
                /**
                 * 备份文件可以进行恢复的地域列表，即备份文件可以恢复到哪些地域。
                 */
                RestoreRegion: string[];
            };
        }[];
    };
}
