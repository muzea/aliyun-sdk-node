export interface GetManagedPrometheusStatusRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。ClusterType为ask或one时，必填。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * prometheus实例的资源组id。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群类型。目前支持ask、acs、ecs和one实例。
     * @example `ask`
     */
    "ClusterType": string;
    /**
     * ClusterType为“ecs”时，必填。
     * @example `vpc-***`
     */
    "VpcId"?: string;
}
