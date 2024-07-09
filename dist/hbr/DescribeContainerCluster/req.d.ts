export interface DescribeContainerClusterRequest {
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 集群ID。
     * @example `cc-000**************hg9`
     */
    "ClusterId"?: string;
    /**
     * 容器集群标识符，对于阿里云容器服务Kubernetes集群，该参数指Kubernetes集群ID。
     * @example `cca***************************87a`
     */
    "Identifier"?: string;
}
