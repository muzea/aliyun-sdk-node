export interface UninstallManagedPrometheusRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 阿里云容器服务Kubernetes版的Kubernetes集群的ID。ClusterType为ask或one时，必填。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId"?: string;
    /**
     * prometheus实例的资源组id。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群类型。包括 ask、ecs和one。
     * @example `ask`
     */
    "ClusterType": string;
    /**
     * 集群所对应的VPC。
     * @example `vpc-rpn**********`
     */
    "VpcId"?: string;
}
