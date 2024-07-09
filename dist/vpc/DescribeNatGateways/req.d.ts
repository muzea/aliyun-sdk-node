export interface DescribeNatGatewaysRequest {
    /**
     * 要查询的NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的NAT网关的ID。
     * @example `ngw-bp1uewa15k4iy5770****`
     */
    "NatGatewayId"?: string;
    /**
     * 要查询的NAT网关所属VPC的ID。
     * @example `vpc-bp15zckdt37pq72z****`
     */
    "VpcId"?: string;
    /**
     * 要查询的NAT网关的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * 如果没有指定该参数，系统会为NAT网关创建默认的名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * <props="china">要查询的NAT网关实例的付费模式，取值：</props>
     * <props="china">
     * - **PostPaid**：按量付费。</props>
     * - **PrePaid**：存量包年包月付费模式。目前包年包月付费模式已停止新购。
     * </props>
     * <props="intl">要查询的NAT网关实例的付费模式，取值：**PostPaid**（按量付费）。</props>
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * <props="china">公网NAT网关的规格，仅当**InstanceChargeType**为**PrePaid**（存量包年包月公网NAT网关）支持按固定规格创建NAT网关，取值：</props>
     * <props="china">
     * - **Small**（默认值）：小型。
     * - **Middle**：中型。
     * - **Large**：大型。
     * </props>
     * <props="intl">NAT网关的规格，该参数不填。</props>
     * @example `中国站示例值：Small，国际站示例值：无需填写`
     */
    "Spec"?: string;
    /**
     * NAT网关的类型，取值：**Enhanced**，增强型。
     * @example `Enhanced`
     */
    "NatType"?: string;
    /**
     * 要查询的NAT网关所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并直接查询资源状况。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要查询的NAT网关的状态，取值：
     * - **Creating**：创建NAT网关是异步操作，在创建完成之前是**Creating**状态。
     * - **Available**：NAT网关创建完成后的状态，是稳定状态。
     * - **Modifying**：变配NAT网关是异步操作，在变配的过程中是**Modifying**状态。
     * - **Deleting**：删除NAT网关是异步操作，在删除的过程中是**Deleting**状态。
     * - **Converting**：普通型NAT网关转换到增强型NAT网关是异步操作，在转换过程中是**Converting**状态。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 要查询的NAT网关的类型，取值：
     * - **internet**：公网NAT网关。
     * - **intranet**：VPC NAT网关。
     * @example `internet`
     */
    "NetworkType"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * NAT网关实例的标签键。最多支持输入20个标签键。
         * 标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `KeyTest`
         */
        Key: string;
        /**
         * NAT网关实例的标签值。最多支持输入20个标签值。
         * 标签值最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`和`https://`。
         * @example `valueTest`
         */
        Value: string;
    }[];
    /**
     * NAT网关所在的可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
}
