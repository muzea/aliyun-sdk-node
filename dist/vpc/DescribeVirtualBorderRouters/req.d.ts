export interface DescribeVirtualBorderRoutersRequest {
    /**
     * VBR所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 过滤信息。
     */
    "Filter"?: {
        /**
         * 过滤条件，最多可提供5个过滤条件。支持如下过滤条件：
         * * **PhysicalConnectionId**：物理专线实例ID。
         * * **VbrId**：边界路由器实例ID。
         * * **Status**：边界路由器状态。
         * * **Name**：边界路由器名称。
         * * **AccessPointId**：接入点ID。
         * * **eccId**：高速上云服务实例ID。
         * * **type**：物理专线类型。
         * @example `Status`
         */
        Key: string;
        /**
         * 根据Key指定过滤值。一个Key支持指定多个过滤值，每个过滤值之间是或的关系，即只要符合其中一个过滤值，则视为匹配该过滤条件。
         * @example `Active`
         */
        Value: string[];
    }[];
    /**
     * 是否包含跨账号的边界路由器。
     * - **true**：包含。
     * - **false**（默认值）：不包含。
     * @example `false`
     */
    "IncludeCrossAccountVbr"?: boolean;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tags"?: {
        /**
         * 资源的标签键。至少输入1个标签键，最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
