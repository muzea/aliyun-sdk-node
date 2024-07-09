export interface ListStackGroupsRequest {
    /**
     * 资源栈组所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源栈组状态。如果未指定，则查询该地域下所有状态的资源栈组。
     * 取值：
     * - ACTIVE：已激活。
     * - DELETED：已删除。
     * @example `ACTIVE`
     */
    "Status"?: string;
    /**
     * 分页查询时设置的每页行数。
     * - 取值范围：1~50。
     *
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时设置的页码。
     * - 起始值：1。
     *
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。如果未指定，则查询所有资源组中的资源栈组。
     * >资源组ID可以从**资源管理**控制台的**资源组**页面下获取。具体操作，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmzawhxxcj****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源栈组的标签。
     */
    "Tags"?: {
        /**
         * 资源栈组的标签键。
         * > Tags为可选参数。如果需要指定Tags，则Tags.N.Key必须指定。
         * @example `usage`
         */
        Key: string;
        /**
         * 资源栈组的标签值。
         * @example `test`
         */
        Value: string;
    }[];
}
