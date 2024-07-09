export type DescribeUserPermissionResponse = {
    /**
     * 集群访问配置，格式为：
     * - 当是集群维度授权时，格式为：`{cluster_id}`。
     * - 当是命名空间维度授权时，格式为：`{cluster_id}/{namespace}`。
     * - 当是所有集群授权时，值固定为：`all-clusters`。
     * @example `c1b542****`
     */
    resource_id: string;
    /**
     * 授权类型，取值：
     * - `cluster`：集群维度。
     * - `namespace`：命名空间维度。
     * - `console`：所有集群维度的授权（之前只用于控制台展示）。
     * @example `cluster`
     */
    resource_type: string;
    /**
     * 自定义角色名称，当授权自定义角色时，该字段为指定的自定义集群管理角色名称。
     * @example `view`
     */
    role_name: string;
    /**
     * 预置的角色类型，取值：
     * - `admin`：管理员。
     * - `ops`：运维人员。
     * - `dev`：开发人员。
     * - `restricted`：受限用户。
     * - `custom`：使用自定义的集群管理角色。
     * @example `admin`
     */
    role_type: string;
    /**
     * 是否为集群创建者的授权，取值：
     * - `0`：代表不是集群创建者的授权记录。
     * - `1`：代表该授权记录为集群创建者的管理员权限。
     * @example `1`
     */
    is_owner: number;
    /**
     * 是否为RAM角色授权，取值：
     * - `0`：代表当前记录不是RAM角色授权。
     * - `1`：代表当前记录是RAM角色授权。
     * @example `1`
     */
    is_ram_role: number;
}[];
