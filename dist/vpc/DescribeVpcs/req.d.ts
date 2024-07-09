export interface DescribeVpcsRequest {
    /**
     * VPC的ID。
     * 最多支持指定20个VPC ID，多个VPC的ID之间用半角逗号（,）隔开。
     * @example `vpc-bp1b1xjllp3ve5yze****`
     */
    "VpcId"?: string;
    /**
     *  VPC所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * VPC的名称。
     * @example `Vpc-1`
     */
    "VpcName"?: string;
    /**
     * 是否查询指定地域下的默认VPC，取值：
     * - **true**（默认值）：查询指定地域下的默认VPC。
     * - **false**：不查询默认VPC。
     * @example `false`
     */
    "IsDefault"?: boolean;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接查询资源状况。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要查询的VPC所属的资源组ID。
     * @example `rg-acfmxvfvazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     *  列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * VPC所属的阿里云账号ID。
     * @example `253460731706911258`
     */
    "VpcOwnerId"?: number;
    /**
     * DHCP选项集的ID。
     * @example `dopt-o6w0df4epg9zo8isy****`
     */
    "DhcpOptionsSetId"?: string;
    /**
     * 是否查询指定地域下开启IPv6网段的VPC，默认为空值（空值则不根据是否开启IPv6网段做过滤），取值：
     * - **false**：不开启。
     * - **true**：开启。
     * @example `false`
     */
    "EnableIpv6"?: boolean;
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
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
