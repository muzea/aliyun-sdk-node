export interface DescribeBackupResponse {
    /**
     * 请求ID。
     * @example `200FB963-9359-4CAD-90B7-96395C88FD9D`
     */
    RequestId: string;
    /**
     * 备份计划概要信息列表。
     */
    Backup: {
        /**
         * 备份结束时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
         * @example `2020-01-01 21:48:54Z`
         */
        EndTime: string;
        /**
         * 备份状态。可取值部分示例：
         * - Succeeded：成功
         * - Failed：失败
         * @example `Succeeded`
         */
        Status: string;
        /**
         * 备份开始时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
         * @example `2020-01-01 21:48:40Z`
         */
        StartTime: string;
        /**
         * 备份大小。
         * @example `149016650`
         */
        Size: number;
        /**
         * 备份类型。取值：
         * - full：全量备份
         * - Incremental：增量备份
         * @example `Incremental`
         */
        BackupType: string;
        /**
         * 备份ID。
         * @example `2020010121****`
         */
        BackupId: string;
        /**
         * 备份细节。
         * @example `{"name": "cds-uf6m0bod****6159-20200226", "start": "2020-02-26 01:57:05", "end": "2020-02-26 02:12:50", "completeNodes": ["cds-uf6m0bod4****159-1-core-002.cassandra.rds.aliyuncs.com", "cds-uf6m0bo****v6159-1-core-001.cassandra.rds.aliyuncs.com", "cds-uf6m0bod****6159-1-core-003.cassandra.rds.aliyuncs.com"], "incompleteNodes": [], "missingNodes": [], "files": 923, "size": 149016650}`
         */
        Details: string;
        /**
         * 备份集群数据中心ID。
         * @example ` cn-hangzhou-g`
         */
        DataCenterId: string;
        /**
         * 备份集群ID。
         * @example `cds-bp11tjzh50****7v`
         */
        ClusterId: string;
    };
}
