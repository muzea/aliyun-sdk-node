export interface DescribeBackupsRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域下AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp18934i73vb5****`
     */
    "DBClusterId": string;
    /**
     * 备份集ID。
     * @example `32732****`
     */
    "BackupId"?: string;
    /**
     * 查询开始时间，格式：yyyy-MM-ddTHH:mmZ。
     * @example `2022-06-01T16:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，需要大于查询开始时间，格式：yyyy-MM-ddTHH:mmZ。
     * @example `2022-06-02T16:00Z`
     */
    "EndTime"?: string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer数据类型最大值的正整数。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 跨阿里云主账号，即备份集所属的阿里云主账号。
     * >该参数仅在跨阿里云账号备份时填写。
     * @example `195****`
     */
    "CrossUid"?: string;
    /**
     * 跨阿里云账号主账号角色名，即备份集所属阿里云账号下的RAM角色。
     * >该参数仅在跨阿里云账号备份时填写。
     * @example `role-for-xxx`
     */
    "CrossRole"?: string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
