export interface ListIpamPoolsRequest {
    /**
     * IPAM托管地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPAM作用范围的实例ID。
     * @example `ipam-scope-glfmcyldpm8lsy****`
     */
    "IpamScopeId"?: string;
    /**
     * IPAM地址池的实例ID列表。N的取值范围为1~100，即一次最多查询100个IPAM地址池。
     */
    "IpamPoolIds"?: string[];
    /**
     * IPAM地址池的名称。最多支持输入20个名称。
     * 长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "IpamPoolName"?: string;
    /**
     * 源IPAM地址池的实例ID。
     * @example `ipam-pool-lfnwi4jok1ss0g****`
     */
    "SourceIpamPoolId"?: string;
    /**
     * IPAM地址池生效地域。
     * @example `cn-hangzhou`
     */
    "PoolRegionId"?: string;
    /**
     * IPAM地址池所属的资源组ID。
     * @example `rg-aek2sermdd6****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表信息。
     */
    "Tags"?: {
        /**
         * 标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 一个标签键最多支持64个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 一个标签值最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
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
     * 分批次查询时每次显示的条目数。取值范围：1~100，默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
}
