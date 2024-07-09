export interface DescribeUserPermissionsResponse {
    /**
     * 请求ID。
     * @example `EA06613B-37A3-549E-BAE0-E4AD8A6E93D7`
     */
    RequestId: string;
    /**
     * RAM用户的权限列表。
     */
    Permissions: {
        /**
         * 预置的角色类型，取值：
         * - admin：管理员。
         * - dev：开发人员。
         * @example `dev`
         */
        RoleType: string;
        /**
         * 自定义角色名称，当授权自定义角色时，该字段为指定的自定义主控实例管理角色名称。
         * @example `view`
         */
        RoleName: string;
        /**
         * 授权类型，取值：
         * - cluster：集群维度。
         * - namespace：命名空间维度。
         * @example `cluster`
         */
        ResourceType: string;
        /**
         * 主控实例访问配置，格式为：
         * - 当是集群维度授权时，格式为：{cluster_id}。
         * - 当是命名空间维度授权时，格式为：{cluster_id}/{namespace}。
         * - 当是所有集群授权时，值固定为：all-clusters。
         * @example `cffef3c9c7ba145b083292942a2c3****`
         */
        ResourceId: string;
    }[];
}
