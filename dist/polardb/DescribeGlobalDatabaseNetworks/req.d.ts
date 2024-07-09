export interface DescribeGlobalDatabaseNetworksRequest {
    /**
     * 查询可以在指定Region创建从集群的GDN列表。
     * @example `cn-beijing`
     */
    "FilterRegion"?: string;
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-**************`
     */
    "DBClusterId"?: string;
    /**
     * 每页记录数。默认值为30，取值如下：
     *   - 30
     *   - 50
     *   - 100
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码。默认值为1，取值为大于0且不超过Integer数据类型的最大值。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * GDN描述。要求如下：
     * - 不能以http://或https://开头。
     * - 必须以大小写字母或中文开头。
     * - 可以包含大小写字母、中文、数字、下划线（_）或连字符（-）。
     * - 长度为2~126个字符。
     * @example `test`
     */
    "GDNDescription"?: string;
    /**
     * GDN ID。
     * @example `gdn-****************`
     */
    "GDNId"?: string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
