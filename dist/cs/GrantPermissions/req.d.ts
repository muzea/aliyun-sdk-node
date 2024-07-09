export interface GrantPermissionsRequest {
    /**
     * RAM用户或RAM角色的ID。
     * @example `2367****`
     */
    "uid": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 授权目标集群ID。
         * - 当`role_type`参数的值是`all-clusters`时，此参数的值传空字符串。
         * @example `c796c60***`
         */
        cluster: string;
        /**
         * 该授权是否是自定义授权（`role_name`使用自定义的ClusterRole名称）。
         * @example `false`
         */
        is_custom: boolean;
        /**
         * 预置的角色名称，取值：
         * - `admin`: 管理员。
         * - `ops`：运维人员。
         * - `dev`：开发人员。
         * - `restricted`: 受限用户。
         * - 自定义的ClusterRole名称。
         * @example `ops`
         */
        role_name: string;
        /**
         * 授权类型，取值：
         * - `cluster`：集群维度。
         * - `namespace`: 命名空间维度。
         * - `all-clusters`: 所有集群维度。
         * @example `cluster`
         */
        role_type: string;
        /**
         * 命名空间名称，集群维度授权时默认为空。
         * @example `test`
         */
        namespace: string;
        /**
         * 是否是RAM角色授权。
         * @example `false`
         */
        is_ram_role: boolean;
    }[];
}
