export interface UpdateRoleRequest {
    /**
     * 请求结构。
     */
    "body"?: {
        /**
         * RoleName
         * @example `原始名称`
         */
        RoleName: string;
        /**
         * 更新后的元素的输入信息
         */
        RoleInput: any;
    };
}
