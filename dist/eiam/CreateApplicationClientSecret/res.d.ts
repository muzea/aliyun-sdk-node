export interface CreateApplicationClientSecretResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 密钥信息。
     */
    ApplicationClientSecret: {
        /**
         * 应用的客户端ID。
         * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
         */
        ClientId: string;
        /**
         * 应用的客户端密钥ID。
         * @example ` sci_k52x2ru63rlkflina5utgkxxxx`
         */
        SecretId: string;
        /**
         * 应用的客户端密钥secret。
         * @example `CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx`
         */
        ClientSecret: string;
    };
}
