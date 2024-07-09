export interface CreatePolicyResponse {
    /**
     * 权限策略信息。
     */
    Policy: {
        /**
         * 权限策略版本号。默认值：v1。
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
         * 权限策略创建时间。
         * @example `2015-01-23T12:33:18Z`
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
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
}
