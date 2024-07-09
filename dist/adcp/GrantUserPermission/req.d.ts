export interface GrantUserPermissionRequest {
    /**
     * 授权类型，取值：
     * - cluster：集群维度。
     * - namespace: 命名空间维度。
     * @example `cluster`
     */
    "RoleType": string;
    /**
     * 预置的角色名称，取值：
     * - admin: 管理员。
     * - dev：开发人员。
     * - gitops-dev: GitOps开发人员（仅限于舰队实例）。
     * RoleName参数取值和RoleType参数取值关系如下：
     * - 当**RoleType**取值为**cluster**时，本参数只能设置为**admin**。
     * - 当**RoleType**取值为**namespace**时，本参数只能设置为**dev**或**gitops-dev**。
     * @example `admin`
     */
    "RoleName": string;
    /**
     * 集群ID。
     * @example `c102fe5f1ee5d4c87a68121a77d8b****`
     */
    "ClusterId": string;
    /**
     * 命名空间名称。
     * - 当**RoleType**取值为**cluster**时，本参数无需设置。
     * - 当**RoleType**取值为**namespace**时，本参数必须填写。
     * - 当**RoleType**取值为**namespace**，且**RoleName**取值为**gitops-dev**时，本参数必须设置且只能设置为**argocd**。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * RAM用户ID或者RAM角色ID。
     * @example `2176****`
     */
    "UserId": string;
    /**
     * 目标权限授予实体，如果是RAM角色，则为`true`，否则为`false`。
     * @example `false`
     */
    "IsRamRole"?: boolean;
}
