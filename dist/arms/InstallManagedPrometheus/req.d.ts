export interface InstallManagedPrometheusRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 阿里云容器服务Kubernetes版的Kubernetes集群的ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId"?: string;
    /**
     * Prometheus实例的资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群名称。ClusterType为ecs时，必填。
     * @example `prd-ecs`
     */
    "ClusterName"?: string;
    /**
     * 集群类型。
     * @example `ask`
     */
    "ClusterType": string;
    /**
     * 集群所对应的VPC。
     * @example `vpc-xxxxxx`
     */
    "VpcId": string;
    /**
     * 集群所对应的交换机。
     * @example `vsw-bp1*********`
     */
    "VSwitchId": string;
    /**
     * 集群所对应的安全组。
     * @example `sg-bp1********`
     */
    "SecurityGroupId": string;
    /**
     * 集群绑定的托管版Grafana工作区Id。为空或"free"时，绑定到共享版Grafana。
     * @example `grafana-bp1*****`
     */
    "GrafanaInstanceId"?: string;
    /**
     * 当前参数不支持使用。
     * @example `-`
     */
    "KubeConfig"?: string;
}
