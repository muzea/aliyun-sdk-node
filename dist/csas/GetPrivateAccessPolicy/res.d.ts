export interface GetPrivateAccessPolicyResponse {
    /**
     * 本次请求的ID。
     * @example `7E9D7ACD-53D5-56EF-A913-79D148D06299`
     */
    RequestId: string;
    /**
     * 内网访问策略。
     */
    Policy: {
        /**
         * 内网访问策略ID。
         * @example `pa-policy-63b2f1844b86****`
         */
        PolicyId: string;
        /**
         * 内网访问策略名称。
         * @example `private_access_policy_name`
         */
        Name: string;
        /**
         * 内网访问策略描述。
         * @example `这是一条内网访问策略`
         */
        Description: string;
        /**
         * 内网访问策略动作。取值：
         * - **Block**：阻断。
         * - **Allow**：允许。
         * @example `Allow`
         */
        PolicyAction: string;
        /**
         * 内网访问策略优先级。数字1表示优先级最高。
         * @example `1`
         */
        Priority: number;
        /**
         * 内网访问策略状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 内网访问策略创建时间。
         * @example `2021-07-29 11:26:02`
         */
        CreateTime: string;
        /**
         * 内网访问策略的用户组类型。取值：
         * - **Normal**：普通用户组。
         * - **Custom**：自定义用户组。
         * @example `Normal`
         */
        UserGroupMode: string;
        /**
         * 内网访问策略，用户组ID集合。当用户组类型为Normal时，该字段有值。
         */
        UserGroupIds: string[];
        /**
         * 自定义用户组属性集合。多个自定义用户组属性之间是或的关系，按照合集生效。
         */
        CustomUserAttributes: {
            /**
             * 自定义用户组的类型。取值：
             * - **username**：用户名。
             * - **department**：部门。
             * - **email**：邮箱。
             * - **telephone**：手机。
             * @example `department`
             */
            UserGroupType: string;
            /**
             * 自定义用户组的关系。取值：
             * - **Equal**：等于。
             * - **Unequal**：不等于。
             * @example `Equal`
             */
            Relation: string;
            /**
             * 自定义用户组属性的值。
             * - 当用户组类型为**username**时，表示用户名的值。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
             * - 当用户组类型为**department**时，表示部门的值。如：OU=部门1,OU=SASE钉钉。
             * - 当用户组类型为**email**时，表示邮箱的值。如：username@example.com。
             * - 当用户组类型为**telephone**时，表示手机的值。如：13900001234。
             * @example `OU=部门1,OU=SASE钉钉`
             */
            Value: string;
            /**
             * 自定义用户组的身份源ID。当自定义用户组类型为**department**时，必填。
             * @example `12`
             */
            IdpId: number;
        }[];
        /**
         * 内网访问策略的应用类型。取值：
         * - **Application**：应用。
         * - **Tag**：标签。
         * @example `Application`
         */
        ApplicationType: string;
        /**
         * 内网访问策略的应用ID集合。当应用类型为Application时，该字段有值。
         */
        ApplicationIds: string[];
        /**
         * 内网访问策略的标签ID集合。当应用类型为Tag时，该字段有值。
         */
        TagIds: string[];
        /**
         * 安全基线策略的ID。
         * @example `dag-d3f64e8bdd4a****`
         */
        DeviceAttributeId: string;
        DeviceAttributeAction: string;
    };
}
