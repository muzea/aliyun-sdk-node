export interface ListDhcpOptionsSetsRequest {
    /**
     * 要查询DHCP选项集所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 主机名后缀，例如example.com。
     * DHCP选项集关联VPC后，会自动将主机名后缀同步给VPC中ECS实例。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * DHCP选项集的名称。
     * 名称长度为1~128个字符，以英文大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `test`
     */
    "DhcpOptionsSetName"?: string;
    /**
     * DHCP选项集的ID。最多支持输入20个DHCP选项集的ID。
     * @example `dopt-o6w0df4epg9zo8isy****`
     */
    "DhcpOptionsSetId"?: string[];
    /**
     * DHCP选项集所属的资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
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
