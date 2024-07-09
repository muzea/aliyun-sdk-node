export interface InsertClusterRequest {
    /**
     * 自定义命名空间的RegionId。
     * 格式为：`物理Region:自定义命名空间标识符`，例如`cn-hangzhou:test`。
     * @example `cn-beijing:td****`
     */
    "LogicalRegionId"?: string;
    /**
     * 集群名。
     * @example `****_product_test2`
     */
    "ClusterName": string;
    /**
     * 集群类型。
     * - 2：ECS集群
     * - 3：EDAS自带K8s集群
     * - 5：Kubernetes集群
     * @example `2`
     */
    "ClusterType": number;
    /**
     * 网络类型。
     * - 1：经典网络
     * - 2：VPC
     * @example `2`
     */
    "NetworkMode": number;
    /**
     * VPC网络ID。若选择VPC网络，此参数为必选。
     * @example `vpc-2zef6ob8mrlzv8x3q****`
     */
    "VpcId"?: string;
    /**
     * （**参数已不适用**）
     * Docker集群CPU超卖：
     * - 2：1:2比例
     * - 4：1:4比例
     * - 8：1:8比例
     * @example `2`
     */
    "OversoldFactor"?: number;
    /**
     * IaaS资源供应商。
     * <note>选择阿里云时，需要使用全大写的拼音，例如`ALIYUN`。</note>
     * @example `ALIYUN`
     */
    "IaasProvider"?: string;
}
