export interface ListIpamScopesRequest {
    /**
     * IPAM托管地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPAM的实例ID。
     * @example `ipam-ccxbnsbhew0d6t****`
     */
    "IpamId"?: string;
    /**
     * IPAM作用范围的作用域类型。取值：
     * - **public**：表示为公网类型。
     * - **private**：表示为私网类型。
     * @example `private`
     */
    "IpamScopeType"?: string;
    /**
     * IPAM作用范围的实例ID列表信息。
     */
    "IpamScopeIds"?: string[];
    /**
     * IPAM作用范围的名称。
     * 长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "IpamScopeName"?: string;
    /**
     * IPAM作用范围所属的资源组ID。
     * @example `rg-aek2sermdd6****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 一个标签键最多支持64个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
