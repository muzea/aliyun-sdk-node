export interface ListPolicesForUserGroupResponse {
    /**
     * 本次请求的ID。
     * @example `5F04DFBD-3F48-5F70-AE72-474026670128`
     */
    RequestId: string;
    /**
     * 用户组列表。
     */
    UserGroups: {
        /**
         * 用户组ID。
         * @example `usergroup-6f1ef2fc56b6****`
         */
        UserGroupId: string;
        /**
         * 策略集合。
         */
        Polices: {
            /**
             * 策略ID。
             * @example `pa-policy-ce2bf7236fab****`
             */
            PolicyId: string;
            /**
             * 策略类型。取值：
             * - **PrivateAccess**：内网访问。
             * - **URLFilter：URL**防护。
             * - **AppAccessControl**：应用管控。
             * - **DLP**：数据防泄漏。
             * - **NAC**：网络准入。
             * @example `PrivateAccess`
             */
            PolicyType: string;
            /**
             * 策略名称。
             * @example `private_access_policy_name`
             */
            Name: string;
        }[];
    }[];
}
