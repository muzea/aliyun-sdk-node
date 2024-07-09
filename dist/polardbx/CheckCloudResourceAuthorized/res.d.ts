export interface CheckCloudResourceAuthorizedResponse {
    /**
     * 请求ID。
     * @example `A501A191-BD70-5E50-98A9-C2A486A82****`
     */
    RequestId: string;
    /**
     * 返回体。
     */
    Data: {
        /**
         * 授权状态，包括如下返回值：
         * - **0**：未授权；
         * - **1**：已授权；
         * - **2**：未开通密钥管理服务。
         * @example `0`
         */
        AuthorizationState: string;
        /**
         * 指定已授权角色的全局资源描述符ARN（Alibaba Cloud Resource Name）信息，完成该角色的授权后即可使用相关密钥管理服务，格式：acs:ram::$accountID:role/$roleName 。
         * @example `acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole`
         */
        RoleArn: string;
    };
}
