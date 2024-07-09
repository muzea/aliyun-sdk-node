export interface ListPoliciesForUserResponse {
    Policies: {
        /**
         * 权限策略信息。
         */
        Policy: {
            /**
             * 当前版本。
             * @example `v1`
             */
            DefaultVersion: string;
            /**
             * 权限策略描述。
             * @example `OSS管理员权限`
             */
            Description: string;
            /**
             * 权限策略名称。
             * @example `OSS-Administrator`
             */
            PolicyName: string;
            /**
             * 授权时间（UTC时间）。
             * @example `2015-01-23T12:33:18Z`
             */
            AttachDate: string;
            /**
             * 权限策略类型。取值：
             * - System：系统策略。
             * - Custom：自定义策略。
             * @example `Custom`
             */
            PolicyType: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
}
