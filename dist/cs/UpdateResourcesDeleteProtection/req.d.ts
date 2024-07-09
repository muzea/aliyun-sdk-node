export interface UpdateResourcesDeleteProtectionRequest {
    /**
     * 目标集群Id。
     * @example `c850429a2287b4d968e27e87a4921****`
     */
    "ClusterId": string;
    /**
     * 指定资源的删除保护状态变更请求体
     */
    "body"?: {
        /**
         * 资源所在的namespace。
         * @example `default`
         */
        namespace: string;
        /**
         * 删除保护的资源类型，支持namespaces和services。
         * @example `services`
         */
        resource_type: string;
        /**
         * 目标资源列表。
         */
        resources: string[];
        /**
         * 是否开启删除保护：开启为true，关闭为false。
         * @example `true`
         */
        enable: boolean;
    };
}
