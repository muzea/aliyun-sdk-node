export interface CreateFullBackupSetDownloadRequest {
    /**
     * 全量备份集ID。
     * @example `dbs1hvXXXXX`
     */
    "BackupSetId": string;
    /**
     * 全量备份集下载格式。取值：
     * - **Native**
     * - **SQL**
     * - **CSV**
     * - **JSON**
     * > 默认CSV。
     * @example `SQL`
     */
    "BackupSetDataFormat"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
