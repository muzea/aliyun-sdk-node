export interface ModifyClusterAddonRequest {
    /**
     * 集群ID。
     * @example `c71d616e629ff40d5b42d7bb87770****`
     */
    "cluster_id": string;
    /**
     * 组件ID。
     * @example `coredns`
     */
    "component_id": string;
    /**
     * 组件配置。
     */
    "body"?: {
        /**
         * 自定义参数设置。
         * @example `{"CpuRequest":"800m"}`
         */
        config: string;
    };
}
