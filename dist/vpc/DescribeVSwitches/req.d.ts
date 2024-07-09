export interface DescribeVSwitchesRequest {
    /**
     * 要查询的交换机所属VPC的ID。
     * > **RegionId**和**VpcId**参数至少输入一个。
     * @example `vpc-25cdvfeq58pl****`
     */
    "VpcId"?: string;
    /**
     * 要查询的交换机的ID。
     * @example `vsw-23dscddcffvf3****`
     */
    "VSwitchId"?: string;
    /**
     * 交换机所属可用区的ID。您可以通过调用[DescribeZones](~~36064~~)接口获取可用区ID。
     * @example `cn-hangzhou-d`
     */
    "ZoneId"?: string;
    /**
     * 交换机所属地域的ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * > **RegionId**和**VpcId**参数至少输入一个。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 交换机的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `vSwitch`
     */
    "VSwitchName"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建资源（接口功能）。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 是否查询指定地域下的默认交换机，取值：
     * - **true**：查询指定地域下的默认交换机。
     * - **false**：不查询指定地域下的默认交换机。
     * 如果不传入该参数，系统默认查询指定地域下的所有交换机。
     * @example `true`
     */
    "IsDefault"?: boolean;
    /**
     * 路由表的ID。
     * @example `vtb-bp145q7glnuzdvzu2****`
     */
    "RouteTableId"?: string;
    /**
     * 交换机所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     *  列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     *  分页查询时每页的行数，最大值为**50**。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源归属的阿里云账号ID。
     * @example `2546073170691****`
     */
    "VSwitchOwnerId"?: number;
    /**
     * 是否查询指定地域下开启IPv6网段的交换机，取值：
     * - **true**：查询指定地域下开启IPv6网段的交换机。
     * - **false**：不查询指定地域下开启IPv6网段的交换机。
     * 如果不传入该参数，系统默认查询指定地域下的所有交换机。
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
