export interface DescribeHostGroupElasticStrategyParametersRequest {
    /**
     * 地域id。可以通过接口[describeregions](~~26243~~)查看地域id。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 专属集群名称。
     * @example `dhg-d0dwi82293b2w9t5`
     */
    "DedicatedHostGroupName": string;
    /**
     * 资源组id。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
