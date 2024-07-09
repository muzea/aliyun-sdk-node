export interface UpdateAdminPasswordRequest {
    /**
     * 实例ID。
     * @example `es-cn-nif1q9o8r0008****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 请求体参数。
     * @example `{   "esAdminPassword": "es_password*" }`
     */
    "body"?: {
        /**
         * 指定更新后的密码。
         * > 密码长度为8~32个字符，必须同时包含三项：大写字母、小写字母、特殊字符：!@#$%^&*()_+-=。
         * @example `es_password`
         */
        esAdminPassword: string;
    };
}
