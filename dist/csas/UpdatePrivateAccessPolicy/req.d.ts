export interface UpdatePrivateAccessPolicyRequest {
    /**
     * 内网访问策略ID。取值来源：
     * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~)：批量查询内网访问策略。
     * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~)：创建内网访问策略。
     * @example `pa-policy-63b2f1844b86****`
     */
    "PolicyId": string;
    /**
     * 内网访问策略描述。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）、短划线（-）和空格。
     * @example `这是一条内网访问策略`
     */
    "Description"?: string;
    /**
     * 内网访问策略动作。取值：
     * - **Block**：阻断。
     * - **Allow**：允许。
     * @example `Allow`
     */
    "PolicyAction"?: string;
    /**
     * 内网访问策略的应用类型。取值：
     * - **Application**：应用。
     * - **Tag**：标签。
     * @example `Application`
     */
    "ApplicationType"?: string;
    /**
     * 内网访问策略的应用ID集合。一条策略最多支持100个内网访问应用ID。
     */
    "ApplicationIds"?: string[];
    /**
     * 内网访问标签ID集合。一条策略最多支持100个内网访问标签ID。
     */
    "TagIds"?: string[];
    /**
     * 内网访问策略的用户组类型。取值：
     * - **Normal**：普通用户组。
     * - **Custom**：自定义用户组。
     * @example `Normal`
     */
    "UserGroupMode"?: string;
    /**
     * 内网访问策略的用户组ID集合，当用户组类型为**Normal**时，必填。和自定义用户组集合互斥。单个策略的用户组最大支持10000个，单次修改的用户组ID数量最多2000个。
     */
    "UserGroupIds"?: string[];
    /**
     * 内网访问策略的自定义用户组集合，当用户组类型为**Custom**时，必填。和用户组ID集合互斥。自定义用户组总数最多10个。
     */
    "CustomUserAttributes"?: {
        /**
         * 自定义用户组的类型。取值：
         * - **username**：用户名。
         * - **department**：部门。
         * - **email**：邮箱。
         * - **telephone**：手机。
         * @example `department
        `
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
         * - 当用户组类型为**username**时，表示用户名的值。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）、星号（*）、at（@）和空格。
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
     * 内网访问策略的状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status"?: string;
    /**
     * 内网访问策略优先级。数字1表示优先级最高。取值：1~1000，最大值为内网访问策略总数减一。
     * @example `1`
     */
    "Priority"?: number;
    /**
     * 内网访问策略的修改类型。取值：
     * - **Cover**（默认）：使用**ApplicationIds**、**UserGroupIds**、**CustomUserAttributes**参数的值覆盖原应用ID集合、用户组ID集合、自定义用户组集合。
     * - **Append**：在原应用ID集合、用户组ID集合、自定义用户组集合中分别增加**ApplicationIds**、**UserGroupIds**、**CustomUserAttributes**参数中输入的值。
     * @example `Cover`
     */
    "ModifyType"?: string;
    /**
     * 安全基线策略的ID。
     * @example `dag-d3f64e8bdd4a****`
     */
    "DeviceAttributeId"?: string;
    "DeviceAttributeAction"?: string;
}
