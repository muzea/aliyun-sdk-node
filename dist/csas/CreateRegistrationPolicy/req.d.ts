export interface CreateRegistrationPolicyRequest {
    /**
     * 设备注册策略名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `registration_policy_name`
     */
    "Name": string;
    /**
     * 设备注册策略描述。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）、短划线（-）和空格。
     * @example `这是一条设备注册策略`
     */
    "Description"?: string;
    /**
     * 设备注册策略状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status": string;
    /**
     * 设备注册策略白名单用户列表。最多可输入1000个用户名。
     */
    "Whitelist"?: string[];
    /**
     * 设备注册策略优先级。数字0表示优先级最高，数字99表示优先级最低。
     * @example `99`
     */
    "Priority"?: number;
    /**
     * 公司设备注册限制类型。取值：
     * - **Unlimited**：不限制。
     * - **LimitAll**：按照总数限制。
     * - **LimitDiff**：按照终端分类限制。
     * @example `LimitAll`
     */
    "CompanyLimitType": string;
    /**
     * 公司设备注册限制数量。
     */
    "CompanyLimitCount"?: {
        /**
         * 公司设备注册限制总数。取值范围为0～100，默认为0。当公司设备注册限制类型为**LimitAll**时，该字段的值有效。
         * @example `1`
         */
        All: number;
        /**
         * 公司设备注册限制PC端登录数量。取值范围为0～100，默认为0。当公司设备注册限制类型为**LimitDiff**时，该字段的值有效。
         * @example `0`
         */
        PC: number;
        /**
         * 公司设备注册限制移动端登录数量。取值范围为0～100，默认为0。当公司设备注册限制类型为**LimitDiff**时，该字段的值有效。
         * @example `0`
         */
        Mobile: number;
    };
    /**
     * 个人设备注册限制类型。取值：
     * - **Unlimited**：不限制。
     * - **LimitAll**：按照总数限制。
     * - **LimitDiff**：按照终端分类限制。
     * @example `LimitDiff`
     */
    "PersonalLimitType": string;
    /**
     * 个人设备注册限制数量。
     */
    "PersonalLimitCount"?: {
        /**
         * 个人设备注册限制总数。取值范围为0～100，默认为0。当个人设备注册限制类型为**LimitAll**时，该字段的值有效。
         * @example `0`
         */
        All: number;
        /**
         * 个人设备注册限制PC端登录数量。取值范围为0～100，默认为0。当个人设备注册限制类型为**LimitDiff**时，该字段的值有效。
         * @example `2`
         */
        PC: number;
        /**
         * 个人设备注册限制移动端登录数量。取值范围为0～100，默认为0。当个人设备注册限制类型为**LimitDiff**时，该字段的值有效。
         * @example `3`
         */
        Mobile: number;
    };
    /**
     * 策略匹配目标类型。取值：
     * - **UserGroupAll**：关联全体用户。
     * - **UserGroupNormal**：关联部分用户组。
     * @example `UserGroupAll`
     */
    "MatchMode": string;
    /**
     * 设备注册策略的用户组ID集合，当策略匹配目标类型为**UserGroupNormal**时必填。单个策略的用户组最大支持100个。
     */
    "UserGroupIds"?: string[];
}
