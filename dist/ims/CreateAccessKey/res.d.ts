export interface CreateAccessKeyResponse {
    /**
     * 请求ID。
     * @example `19DDD9F7-AFCC-4D72-8CBA-CCE5A142E7AB`
     */
    RequestId: string;
    /**
     * 访问密钥。
     */
    AccessKey: {
        /**
         * 访问密钥的状态。取值：
         * - Active：已激活。
         * - Inactive：已禁用。
         * @example `Active`
         */
        Status: string;
        /**
         * 访问密钥。
         * @example `Y3MSLE6OgizS4qrz5LVFDoyZEL****`
         */
        AccessKeySecret: string;
        /**
         * 访问密钥ID。
         * @example `LTAI4G3HaMmeHpay2gcq****`
         */
        AccessKeyId: string;
        /**
         * 访问密钥的创建时间。
         * @example `2020-10-15T08:08:54Z`
         */
        CreateDate: string;
    };
}
