export interface UpdateRegistrationPolicyResponse {
    /**
     * 本次请求的ID。
     * @example `27064ECA-0936-59F3-8A98-EC821E5BD08F`
     */
    RequestId: string;
    /**
     * 设备注册策略。
     */
    Policy: {
        /**
         * 设备注册策略名称。
         * @example `registration_policy_name`
         */
        Name: string;
        /**
         * 设备注册策略ID。
         * @example `设备注册策略ID`
         */
        PolicyId: string;
        /**
         * 设备注册策略优先级。数字0表示优先级最高，数字99表示优先级最低。
         * @example `1`
         */
        Priority: string;
        /**
         * 设备注册策略描述。
         * @example `这是一条设备注册策略`
         */
        Description: string;
        /**
         * 设备注册策略白名单用户列表。
         */
        Whitelist: string[];
        /**
         * 设备注册策略状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 策略匹配目标类型。取值：
         * - **UserGroupAll**：关联全体用户。
         * - **UserGroupNormal**：关联部分用户组。
         * @example `UserGroupNormal`
         */
        MatchMode: string;
        /**
         * 设备注册策略，用户组ID集合。当策略匹配目标类型为**UserGroupNormal**时，该字段有值。
         */
        UserGroupIds: string[];
        /**
         * 设备注册策略创建时间。
         * @example `2023-05-16 17:18:46`
         */
        CreateTime: string;
        /**
         * 设备注册策略限制详情列表。
         */
        LimitDetail: {
            /**
             * 设备归属。取值：
             * - **Company**：公司设备。
             * - **Personal**：个人设备。
             * @example `Company`
             */
            DeviceBelong: string;
            /**
             * 设备注册限制类型。取值：
             * - **Unlimited**：不限制。
             * - **LimitAll**：按照总数限制。
             * - **LimitDiff**：按照终端分类限制。
             * @example `LimitAll`
             */
            LimitType: string;
            /**
             * 设备注册限制数量。
             */
            LimitCount: {
                /**
                 * 设备注册限制总数。当设备注册限制类型为**LimitAll**时，该字段的值有效。
                 * @example `1`
                 */
                All: number;
                /**
                 * 设备注册限制PC端登录数量。当设备注册限制类型为**LimitDiff**时，该字段的值有效。
                 * @example `0`
                 */
                PC: number;
                /**
                 * 设备注册限制移动端登录数量。当设备注册限制类型为**LimitDiff**时，该字段的值有效。
                 * @example `0`
                 */
                Mobile: number;
            };
        }[];
    };
}
