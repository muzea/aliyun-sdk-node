export interface GrantUserPermissionsRequest {
    /**
     * RAM用户的ID。
     * @example `2367****
    `
     */
    "UserId": string;
    /**
     * RAM用户的授权列表。
     */
    "Permissions"?: {
        /**
         * 预置的角色名称，取值：
         * - admin: 管理员。
         * - dev：开发人员。
         * @example `dev`
         */
        RoleName: string;
        /**
         * 授权目标主控实例ID。
         * - 当role_type参数的值是all-clusters时，此参数的值传空字符串。
         * @example `cf67bdb0ffcb349ecabc1ca70da78****`
         */
        ClusterId: string;
        /**
         * 命名空间名称，主控实例维度授权时默认为空。
         * @example `test`
         */
        Namespace: string;
        /**
         * 授权类型，取值：
         * - cluster：主控实例维度。
         * - namespace: 命名空间维度。
         * - all-clusters: 所有主控实例维度。
         * @example `cluster`
         */
        RoleType: string;
        /**
         * 目标权限授予实体，如果是RAM角色，则为`true`，否则为`false`。
         * @example `true`
         */
        IsRamRole: boolean;
    }[];
}
