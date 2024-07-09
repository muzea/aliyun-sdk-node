export interface InsertClusterResponse {
    /**
     * 接口状态。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    /**
     * 创建的集群实体。
     */
    Cluster: {
        /**
         * VPC网络ID。
         * @example `vpc-2zef6ob8mrlzv8x3q****`
         */
        VpcId: string;
        /**
         * （**参数已不适用**）
         * Docker集群CPU超卖。
         * - 2：1:2比例
         * - 4：1:4比例
         * - 8：1:8比例
         * @example `1`
         */
        OversoldFactor: number;
        /**
         * 网络类型。
         * - 1：经典网络
         * - 2：专有网络VPC
         * @example `2`
         */
        NetworkMode: number;
        /**
         * 供应商。
         * @example `ALIYUN`
         */
        IaasProvider: string;
        /**
         * 集群类型。
         * - 2：ECS集群。
         * - 3：EDAS自带K8s集群。
         * - 5：Kubernetes集群。
         * @example `2`
         */
        ClusterType: number;
        /**
         * 集群名称。
         * @example `****_product_test2`
         */
        ClusterName: string;
        /**
         * 集群ID。
         * @example `8705ad13-5d86-47fc-b68f-257b59ed****`
         */
        ClusterId: string;
        /**
         * 集群所属地域。
         * @example `cn-beijing`
         */
        RegionId: string;
    };
}
