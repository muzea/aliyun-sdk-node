export interface DescribeClusterAddonUpgradeStatusRequest {
    /**
     * 集群ID。
     * @example `c106f377e16f34eb1808d6b9362c9****`
     */
    "ClusterId": string;
    /**
     * 组件ID，例如：nginx-ingress-controller、flexvolume、metrics-server。
     * 集群支持的组件，可通过API `DescribeAddons` 进行查询。
     * @example `cloud-controller-manager`
     */
    "ComponentId": string;
}
