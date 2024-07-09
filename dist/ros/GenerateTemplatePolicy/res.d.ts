export interface GenerateTemplatePolicyResponse {
    /**
     * 权限策略信息。
     */
    Policy: {
        /**
         * 版本号。
         * @example `1`
         */
        Version: string;
        /**
         * 具体权限策略信息。
         */
        Statement: {
            /**
             * 授权效力。取值：
             * - Allow：允许。
             * - Deny：拒绝。
             * @example `Allow`
             */
            Effect: string;
            /**
             * 被授权的具体对象。星号（*）表示所有资源。
             * @example `*`
             */
            Resource: string;
            /**
             * 对具体资源的操作。
             */
            Action: string[];
            /**
             * 授权生效的条件。
             * @example `{
                "StringEquals": {
                    "acs:Service": "fc.aliyuncs.com"
                }
            }`
             */
            Condition: any;
        }[];
    };
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6`
     */
    RequestId: string;
}
