export interface ListAuthenticatorsResponse {
    /**
     * 请求ID
     * @example `531FA210-6F3D-5368-9AE2-AD7B9D1D5CAA`
     */
    RequestId: string;
    /**
     * 读取到的位置
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询结果数据总数
     * @example `13`
     */
    TotalCount: number;
    /**
     * 每页记录数量
     * @example `5`
     */
    PageSize: number;
    /**
     * 认证器
     */
    Authenticator: {
        /**
         * 应用ID
         * @example `webauth_demo`
         */
        ApplicationExternalId: string;
        /**
         * 认证器uuid
         * @example `0fcd5fce3fdc42052633a65eb242f10aZ8nzoQMpV3m`
         */
        AuthenticatorUuid: string;
        /**
         * 身份认证ID
         * @example `scimcred-00skzv5noh34r5aoci76`
         */
        CredentialId: string;
        /**
         * 认证器类型
         * @example `TOTP`
         */
        Type: string;
        /**
         * 身份认证对应的认证器名称
         * @example `TOTP-DefaultName`
         */
        AuthenticatorName: string;
        /**
         * 创建时间
         * @example `1342800000000`
         */
        RegisterTime: number;
        /**
         * 最后验证时间，如果新注册则为注册时间
         * @example `123123`
         */
        LastVerifyTime: number;
    }[];
}
