export interface UpdateUserPermissionRequest {
    /**
     * 授权类型，取值：
     * - cluster：主控实例维度。
     * - namespace: 命名空间维度。
     * @example `cluster`
     */
    "RoleType": string;
    /**
     * 预置的角色名称，取值：
     * - admin: 管理员。
     * - dev：开发人员。
     * @example `admin`
     */
    "RoleName": string;
    /**
     * 主控实例ID。
     * @example `c8e28143817db4b039b8548d7c899****`
     */
    "ClusterId": string;
    /**
     * 命名空间名称，主控实例维度授权时默认为空。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * RAM用户ID。
     * @example `2176****`
     */
    "UserId": string;
}
