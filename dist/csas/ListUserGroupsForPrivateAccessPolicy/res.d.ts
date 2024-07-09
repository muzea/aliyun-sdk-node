export interface ListUserGroupsForPrivateAccessPolicyResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * 内网访问策略列表。
     */
    Polices: {
        /**
         * 内网访问策略ID。
         * @example `pa-policy-1b0d0e8b4bcf****`
         */
        PolicyId: string;
        /**
         * 内网访问策略的用户组集合。
         */
        UserGroups: {
            /**
             * 用户组ID。
             * @example `usergroup-6f1ef2fc56b6****`
             */
            UserGroupId: string;
            /**
             * 用户组名称。
             * @example `user_group_name`
             */
            Name: string;
            /**
             * 用户组描述。
             * @example `这是一条被内网访问策略引用的用户组`
             */
            Description: string;
            /**
             * 用户组属性集合。
             */
            Attributes: {
                /**
                 * 用户组的类型。取值：
                 * - **username**：用户名。
                 * - **department**：部门。
                 * - **email**：邮箱。
                 * - **telephone**：手机。
                 * @example `department`
                 */
                UserGroupType: string;
                /**
                 * 用户组的关系。取值：
                 * - **Equal**：等于。
                 * - **Unequal**：不等于。
                 * @example `Equal`
                 */
                Relation: string;
                /**
                 * 用户组属性的值。
                 * - 当用户组类型为**username**时，表示用户名的值。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
                 * - 当用户组类型为**department**时，表示部门的值。如：OU=部门1,OU=SASE钉钉。
                 * - 当用户组类型为**email**时，表示邮箱的值。如：username@example.com。
                 * - 当用户组类型为**telephone**时，表示手机的值。如：13900001234。
                 * @example `OU=部门1,OU=SASE钉钉`
                 */
                Value: string;
                /**
                 * 用户组的身份源ID。当自定义用户组类型为**department**时，存在该值。
                 * @example `12`
                 */
                IdpId: number;
            }[];
            /**
             * 用户组创建时间。
             * @example `2022-09-27 18:10:25
            `
             */
            CreateTime: string;
        }[];
    }[];
}
