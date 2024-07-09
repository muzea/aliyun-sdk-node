export interface ModifyResourceGroupRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `dds-bp1366caac83****`
     */
    "DBInstanceId": string;
    /**
     * 资源组ID。资源组详情请参见查看[资源组基本信息](~~151181~~)。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId": string;
}
