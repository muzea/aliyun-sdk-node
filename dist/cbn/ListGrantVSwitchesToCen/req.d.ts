export interface ListGrantVSwitchesToCenRequest {
    /**
     * VPC实例所属地域ID。
     * 您可以调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云企业网实例ID。
     * @example `cen-44m0p68spvlrqq****`
     */
    "CenId": string;
    /**
     * VPC实例ID。
     * @example `vpc-bp12ge2tq5gzdc915****`
     */
    "VpcId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 可用区ID。
     * - 如果您指定可用区ID，则系统只查询VPC实例位于当前可用区的交换机的信息。
     * - 如果您不指定可用区ID，则系统默认查询该VPC实例位于所有可用区的交换机的信息。
     * 您可以调用[DescribeZones](~~36064~~)接口获取可用区ID。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
}
