export interface DescribeVSwitchesRequest {
    /**
     * 交换机所属地域ID。
     * @example `cn-hangzhou
    `
     */
    "RegionId"?: string;
    /**
     * 交换机所属专有网络ID。
     * > **VpcId**和**DedicatedHostGroupId**参数至少输入一个。
     * @example `vpc-25cdvfeq58pl****`
     */
    "VpcId"?: string;
    /**
     * 交换机所属可用区ID。
     * @example `cn-hangzhou-d
    `
     */
    "ZoneId"?: string;
    /**
     * 专属集群ID。
     * > **VpcId**和**DedicatedHostGroupId**参数至少输入一个。
     * @example `dhg-4n****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 列表的页码，默认值为1。
     * @example `1
    `
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为50。默认值为50。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 交换机所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
}
