export interface DescribePhysicalConnectionsRequest {
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值：**10**。  取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否返回未生效的订单数据。取值：
     * * **true**：返回。
     * * **false**（默认值）：不返回。
     * @example `false`
     */
    "IncludeReservationData"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `02fb3da4-130e-11e9-8e44-001`
     */
    "ClientToken"?: string;
    /**
     * 过滤条件列表。
     */
    "Filter"?: {
        /**
         * 过滤条件。取值：
         * - **PhysicalConnectionId**：物理专线ID。
         * - **AccessPointId**：接入点ID。
         * - **Type**：物理专线类型。该过滤条件仅支持过滤值**VPC**。
         * - **LineOperator**：物理专线的运营商。该过滤条件支持以下过滤值：
         *     - **CT**：中国电信。
         *     - **CU**：中国联通。
         *     - **CM**：中国移动。
         *     - **CO**：中国其他。
         *     - **Equinix**：Equinix。
         *     - **Other**：境外其他。
         * - **Spec**：物理专线的规格。该过滤条件支持以下过滤值：
         *     - **1G及以下**。
         *     - **10G**。
         *     - **40G**。
         *     - **100G**。
         * >  **40G**、**100G**的规格默认不开放，向客户经理已提交申请并通过的用户才可使用该过滤值。
         * - **Status**：物理专线的状态。该过滤条件支持以下过滤值：
         *     - **Initial**：申请中。
         *     - **Approved**：审批通过。
         *     - **Allocating**：正在分配资源。
         *     - **Allocated**：接入施工中。
         *     - **Confirmed**：等待用户确认。
         *     - **Enabled**：已开通。
         *     - **Rejected**：申请被拒绝。
         *     - **Canceled**：已取消。
         *     - **Allocation Failed**：资源分配失败。
         *     - **Terminating**：终止中。
         *     - **Terminated**：已终止。
         * - **Name**：物理专线的名称。
         * - **ProductType**：专线类型。取值：
         *     - **VirtualPhysicalConnection**：共享专线。
         *     - **PhysicalConnection**：独享专线。
         *
         * 一次最多支持输入5个过滤条件。各个过滤条件之间为**与**关系，符合所有的过滤条件，才会返回正确的查询结果。
         * @example `Name`
         */
        Key: string;
        /**
         * 过滤值列表。
         * @example `1`
         */
        Value: string[];
    }[];
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 物理专线所在的资源组ID。
     * @example `rg-aek2yvwibxr****`
     */
    "ResourceGroupId"?: string;
}
