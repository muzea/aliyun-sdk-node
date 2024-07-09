export interface UpdatePolicyDescriptionResponse {
    /**
     * 请求ID。
     * @example `7572DEBD-0ECE-518E-8682-D8CB82F8FE8E`
     */
    RequestId: string;
    /**
     * 权限策略信息。
     */
    Policy: {
        /**
         * 权限策略名称。
         * @example `TestPolicy`
         */
        PolicyName: string;
        /**
         * 权限策略类型。取值：
         * - Custom：自定义策略。
         * - System：系统策略。
         * @example `Custom`
         */
        PolicyType: string;
        /**
         * 权限策略创建时间。
         * @example `2022-02-28T07:04:15Z`
         */
        CreateDate: string;
        /**
         * 权限策略更新时间。
         * @example `2022-02-28T07:05:37Z`
         */
        UpdateDate: string;
        /**
         * 权限策略描述。
         * @example `This is a test policy.`
         */
        Description: string;
        /**
         * 权限策略版本。默认值：v1。
         * @example `v1`
         */
        DefaultVersion: string;
    };
}
