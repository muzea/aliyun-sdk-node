export interface DescribeHostEcsLevelInfoRequest {
    /**
     * 数据库引擎类型，取值：
     * - **mysql**
     * - **mssql**
     * - **pgsql**
     * - **redis**
     * @example `mysql`
     */
    "DbType": string;
    /**
     * 地域ID。可查看[地域信息](~~198326~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 地域下的可用区ID。
     * @example `ap-southeast-1a`
     */
    "ZoneId": string;
    /**
     * 实例存储类型，取值：
     * - **local_ssd**：SSD云盘
     * - **cloud_essd**：ESSD PL1云盘
     * - **cloud_essd2**：ESSD PL2云盘
     * - **cloud_essd3**：ESSD PL3云盘
     * @example `local_ssd`
     */
    "StorageType": string;
    /**
     * 主机镜像。取值：
     * - **WindowsWithMssqlEntAlwaysonLicense**：SQL Server集群版
     * - **WindowsWithMssqlStdLicense**：SQL Server标准版
     * - **WindowsWithMssqlEntLicense**：SQL Server企业版
     * - **WindowsWithMssqlWebLicense**：SQL Server Web版
     * - **AliLinux**：其他主机镜像。
     * @example `AliLinux`
     */
    "ImageCategory"?: string;
}
