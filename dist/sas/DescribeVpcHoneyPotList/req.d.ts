export interface DescribeVpcHoneyPotListRequest {
    /**
     * 指定要查询的蜜罐实例所在的VPC ID。
     * > 您可以调用[DescribeVpcList](~~DescribeVpcList~~)接口获取VPC ID。
     * @example `vpc-d7o009q63fqy21r8u****`
     */
    "VpcId"?: string;
    /**
     * 指定要查询的蜜罐实例所在的VPC名称。
     * > 您可以调用[DescribeVpcList](~~DescribeVpcList~~)接口获取VPC名称。
     * @example `abcnet`
     */
    "VpcName"?: string;
    /**
     * 指定要查询的蜜罐实例所在的VPC区域ID。
     * > 您可以调用[DescribeVpcList](~~DescribeVpcList~~)接口获取VPC所在区域的ID。
     * @example `ap-southeast-2`
     */
    "VpcRegionId"?: string;
    /**
     * 指定要查询的VPC列表是否开通了云蜜罐。取值：
     * - **true**：已开通
     * - **false**：未开通
     * @example `true`
     */
    "HoneyPotExistence"?: boolean;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定分页查询时，当前页的页码。
     * @example `2`
     */
    "CurrentPage"?: number;
}
