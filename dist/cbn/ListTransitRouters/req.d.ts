export interface ListTransitRoutersRequest {
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 云企业网实例ID。
     * @example `cen-j3jzhw1zpau2km****`
     */
    "CenId"?: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-uf654ttymmljlvh2x****`
     */
    "TransitRouterId"?: string;
    /**
     * 转发路由器实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `TagKey`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `TagValue`
         */
        Value: string;
    }[];
    /**
     * 转发路由器实例的状态。
     * - **Creating**：创建中。
     * - **Active**：可用。
     * - **Modifying**：修改中。
     * -  **Deleting**：删除中。
     * -  **Upgrading**：升级中。
     * @example `Active`
     */
    "Status"?: string;
    /**
     * 转发路由器实例的类型。
     * - **Enterprise**：企业版。
     * - **Basic**：基础版。
     * @example `Enterprise`
     */
    "Type"?: string;
    /**
     * 转发路由器实例的名称。
     * 名称长度为1~128个字符不能以`http://`或`https://`开头。
     * @example `testname`
     */
    "TransitRouterName"?: string;
    /**
     * 转发路由器功能筛选字段。
     */
    "FeatureFilter"?: {
        /**
         * 转发路由器功能筛选字段键值。
         * 目前支持字段：
         * - **Multicast**：组播功能。
         * @example `Multicast`
         */
        Key: string;
        /**
         * 转发路由器功能筛选字段值列表。
         * 当键值为**Multicast**时，只支持填入1个字段，支持字段内容为：
         * - **Enabled**：支持组播。
         * - **Disabled**：不支持组播。
         */
        Value: string[];
    }[];
}
