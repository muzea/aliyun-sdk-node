export interface CreatePolicyResponse {
    /**
     * 权限策略信息。
     */
    Policy: {
        /**
         * 权限策略版本。默认值：v1。
         * @example `v1`
         */
        DefaultVersion: string;
        /**
         * 权限策略描述。
         * @example `查看指定地域ECS实例`
         */
        Description: string;
        /**
         * 权限策略名称。
         * @example `View-ECS-instances-in-a-specific-region`
         */
        PolicyName: string;
        /**
         * 权限策略创建时间。
         * @example `2021-10-13T02:46:57Z`
         */
        CreateDate: string;
        /**
         * 权限策略类型。取值：
         * - Custom：自定义策略。
         * - System：系统策略。
         * @example `Custom`
         */
        PolicyType: string;
    };
    /**
     * 请求ID。
     * @example `BA34C54A-C2B1-5A65-B6B0-B5842C1DB4DA`
     */
    RequestId: string;
}
