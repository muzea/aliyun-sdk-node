export interface DescribeVSwitchesRequest {
    /**
     * 交换机所属地域的ID。可调用DescribeRegions接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要查询的交换机所属VPC的ID。
     * >本参数和**DedicatedHostGroupId**必传其一。
     * @example `vpc-bp1opxu1zkhn****`
     */
    "VpcId"?: string;
    /**
     * 交换机所属可用区的ID。您可调用DescribeAvailableZones接口获取。用于过滤调用结果，仅返回目标可用区中的虚拟交换机详情。
     * @example `cn-hangzhou-k`
     */
    "ZoneId"?: string;
    /**
     * 专属集群ID。可调用DescribeDedicatedHostGroups获取。查询该专属集群所属专有网络VPC下所有虚拟交换机的详情。
     * >本参数和**VpcId**必传其一。
     * @example `dhg-7a9****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。取值：**1~50**。默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
}
