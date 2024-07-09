export interface ListVirtualPhysicalConnectionsRequest {
    /**
     * 共享专线关联的物理专线ID。
     * 本文以下内容将共享专线关联的物理专线，简称为物理专线，和共享专线互做区分。
     * @example `pc-bp1ciz7ekd2grn1as****`
     */
    "PhysicalConnectionId"?: string;
    /**
     * 共享专线的商业状态。取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * - **SecurityLocked**：因安全原因被锁定。
     * @example `Normal`
     */
    "VirtualPhysicalConnectionBusinessStatus"?: string;
    /**
     * 共享专线信息。
     * @example `pc-xxx`
     */
    "VirtualPhysicalConnectionIds"?: string[];
    /**
     * 共享专线是否已被租户确认接收。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "IsConfirmed"?: boolean;
    /**
     * 共享专线的业务状态信息。
     * @example `pc-xxx`
     */
    "VirtualPhysicalConnectionStatuses"?: string[];
    /**
     * 共享专线拥有者的阿里云账号信息。
     * @example `189xxx`
     */
    "VirtualPhysicalConnectionAliUids"?: string[];
    /**
     * 共享专线的VLAN ID。
     * @example `pc-xxx`
     */
    "VlanIds"?: string[];
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `dd20****`
     */
    "NextToken"?: string;
    /**
     * 共享专线所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
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
     * 共享专线所属的资源组ID。
     * @example `rg-acfmxazb4p****	`
     */
    "ResourceGroupId"?: string;
}
