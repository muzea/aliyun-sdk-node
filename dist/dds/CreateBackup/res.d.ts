export interface CreateBackupResponse {
    /**
     * 备份ID。
     * > 该参数即将下线，如需获取备份ID，请调用[DescribeBackups](~~468441~~)接口获取。
     * @example `5664****`
     */
    BackupId: string;
    /**
     * 请求ID。
     * @example `7016B12F-7F64-40A4-BAFF-013F02AC82FC`
     */
    RequestId: string;
}
