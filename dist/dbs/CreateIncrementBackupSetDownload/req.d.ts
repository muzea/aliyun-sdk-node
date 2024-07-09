export interface CreateIncrementBackupSetDownloadRequest {
    /**
     * 增量备份集任务ID，可调用[DescribeIncrementBackupList](~~437223~~)接口获取**BackupSetJobId**。
     * @example `t4yh0g0g****`
     */
    "BackupSetId": string;
    /**
     * 增量备份ID，可调用[DescribeIncrementBackupList](~~437223~~)接口获取**BackupSetId**。
     * @example `mysql-bin.000054`
     */
    "BackupSetName": string;
    /**
     * 增量备份集下载格式。取值：
     * - **Native**
     * - **SQL**
     * - **CSV**
     * - **JSON**
     * > 默认 Native。
     * @example `Native`
     */
    "BackupSetDataFormat"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCz********`
     */
    "ClientToken"?: string;
}
