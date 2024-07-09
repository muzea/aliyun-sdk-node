export interface DescribeUpgradeVersionResponse {
    /**
     * 请求ID
     * @example `11fd0027-c27e-41bb-a565-75583054****`
     */
    RequestId: string;
    /**
     * 版本
     */
    Version: {
        /**
         * Kubernetes版本
         * @example `v1.24.6-aliyun.1`
         */
        KubernetesVersion: string;
        /**
         * ASM实例版本
         * @example `v1.17.2.42-gf7619883-aliyun`
         */
        IstioOperatorVersion: string;
        /**
         * Istio版本
         * @example `1.17.2`
         */
        IstioVersion: string;
    };
}
