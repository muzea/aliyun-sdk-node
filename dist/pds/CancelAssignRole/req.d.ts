export interface CancelAssignRoleRequest {
    /**
     * A short description of struct
     */
    "domain_id"?: string;
    "body"?: {
        /**
         * 唯一身份标识，当前仅支持取消用户的角色
         */
        identity: any;
        /**
         * 取消用户已分配的角色ID，当前仅支持填：SystemGroupAdmin（团队管理员）
         * @example `SystemGroupAdmin`
         */
        role_id: string;
        /**
         * 被取消角色管理的资源类型，当前仅支持：RT_Group（团队）
         * @example `RT_Group`
         */
        manage_resource_type: string;
        /**
         * 被取消角色管理的资源ID，当前仅支持填Group ID
         * @example `105***b82`
         */
        manage_resource_id: string;
    };
}
