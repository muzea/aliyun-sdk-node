export interface ListInstanceExtensionsRequest {
    /**
     * 实例所在Region ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-xxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 插件名称
     * @example `citext`
     */
    "Extension"?: string;
    /**
     * 插件安装状态，取值说明：
     * - installed：已安装
     * - installing：安装中
     * - uninstalled：未安装
     * @example `installed`
     */
    "InstallStatus"?: string;
}
