export interface GrantUserPermissionsRequest {
    /**
     * RAM用户或RAM角色ID。
     * @example `27852573609480****`
     */
    "SubAccountUserId"?: string;
    /**
     * 权限列表，内容格式为JSON数组字符串。该列表要求传递全量权限信息，新增权限则在列表中新增项，删除则移除项。示例值字段释义：
     * - `IsCustom`：系统规定参数。固定取值为`true`。
     * - `Cluster`：网格实例ID。
     * - `RoleName`：权限名称，取值为`istio-admin`、`istio-ops`、`istio-readonly`，分别对应管理员、网格资源管理员、只读权限。
     * - `IsRamRole`：目标权限授予实体，如果是RAM角色，则为`true`，否则为`false`。
     * @example `[{"IsCustom":true,"RoleName":"istio-ops","Cluster":"c57b848115458460583a4260cb713****","RoleType":"custom","IsRamRole":false},{"IsCustom":true,"RoleName":"istio-ops","Cluster":"c4ec191f4e12145c09286ea3e2b8f****","RoleType":"custom","IsRamRole":false}]`
     */
    "Permissions"?: string;
    /**
     * RAM用户或RAM角色ID列表，支持一次为多个用户授权
     */
    "SubAccountUserIds"?: string[];
}
