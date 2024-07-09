export interface DescribeVpnGatewaysRequest {
    /**
     * VPN网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  VPN网关所属专有网络VPC（Virtual Private Cloud）的ID。
     * @example `vpc-bp1m3i0kn1nd4wiw9****`
     */
    "VpcId"?: string;
    /**
     * VPN网关的ID。
     * @example `vpn-bp17lofy9fd0dnvzv****`
     */
    "VpnGatewayId"?: string;
    /**
     * VPN网关的状态。取值：
     * - **init** ：初始化。
     * - **provisioning** ：准备中。
     * - **active** ：正常。
     * - **updating** ：更新中。
     * - **deleting** ：删除中。
     * @example `active`
     */
    "Status"?: string;
    /**
     * VPN网关的付费状态。取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * @example `Normal`
     */
    "BusinessStatus"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否包含未生效的订购数据。取值：
     * - **false**（默认值）：不包含未生效的订购数据。
     * - **true**：包含未生效的订购数据。
     * @example `true`
     */
    "IncludeReservationData"?: boolean;
    /**
     * VPN网关绑定的标签列表。
     */
    "Tag"?: {
        /**
         * 标签的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一次最多支持输入20个标签键。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 标签的标签值。
         * 标签值最多支持128个字符，可以为空字符串，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一个标签键对应一个标签值。一次最多支持输入20个标签值。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * VPN网关所属的资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组ID。
     * @example `rg-acfmzs372yg****`
     */
    "ResourceGroupId"?: string;
}
