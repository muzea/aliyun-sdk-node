export interface ModifyBackupSetDownloadRulesRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口查看。
     * @example `dbstooi01xxxx`
     */
    "BackupPlanId": string;
    /**
     * 是否开启自动下载，默认false。
     * @example `false`
     */
    "OpenAutoDownload"?: boolean;
    /**
     * 备份集下载备份网关ID。
     * @example `23312323`
     */
    "BackupGatewayId"?: number;
    /**
     * 备份集下载全量数据格式：
     * - Native
     * - SQL
     * - CSV
     * - JSON
     * > 默认 CSV。
     * @example `CSV`
     */
    "FullDataFormat"?: string;
    /**
     * 备份集下载增量数据格式：
     * - Native
     * - SQL
     * - CSV
     * - JSON
     * > 默认Native。
     * @example `Native`
     */
    "IncrementDataFormat"?: string;
    /**
     * 备份集下载服务器目录。
     * @example `test`
     */
    "BackupSetDownloadDir"?: string;
    /**
     * 备份集下载目标类型 。
     * > 默认agent：已安装备份网关，目前仅此项。
     * @example `agent`
     */
    "BackupSetDownloadTargetType"?: string;
    /**
     * 备份集下载目标目录类型，如果是开启自动下载，则必填，取值：
     * - local
     * - nas
     * - ftp
     * - minio
     * > 默认为local。
     * @example `local`
     */
    "BackupSetDownloadTargetTypeLocation"?: string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
