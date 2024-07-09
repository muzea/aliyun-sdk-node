export interface UpgradeClusterRequest {
    /**
     * 集群ID。
     * @example `c82e6987e2961451182edacd74faf****`
     */
    "ClusterId": string;
    /**
     * 请求体参数。
     * @example `k8s`
     */
    "body"?: {
        /**
         * 已废弃，无需传递。
         * @example `k8s`
         */
        component_name: string;
        /**
         * 集群升级的目标版本。
         * @example `1.24.6-aliyun.1`
         */
        next_version: string;
        /**
         * 已废弃，无需传递，请使用 next_version 参数传入升级目标版本。
         * @example `1.24.6-aliyun.1`
         */
        version: string;
        /**
         * 是否仅升级master。
         * - true：仅升级master。
         * - false：升级master和worker。
         * @example `true`
         */
        master_only: boolean;
    };
}
