export interface GetIdpConfigResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * 身份源配置。
     */
    Data: {
        /**
         * 身份源配置ID。
         * @example `1465`
         */
        Id: string;
        /**
         * 身份源配置名称。
         * @example `示例身份源`
         */
        Name: string;
        /**
         * 身份源配置类型。
         * @example `CSAS`
         */
        Type: string;
        /**
         * 身份提供商IdP的元数据。
         * @example `<?xml version="1.0" encoding="utf-8"?>***`
         */
        IdpMetadata: string;
        /**
         * AccessKey ID
         * @example `LTAI5tJVztnh6N****`
         */
        AccessKey: string;
        /**
         * AccessKey Secret
         * @example `E75ktr5jENiR3ssj****`
         */
        AccessKeySecret: string;
        /**
         * 身份源配置启用状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 二次认证配置类型。
         * @example `totp`
         */
        MfaConfigType: string;
        /**
         * 更新时间。
         * @example `2024-02-26T02:02:42Z`
         */
        UpdateTime: string;
        /**
         * 自建身份源查询组织架构链接地址。
         * @example `https://172.10.XX.XX:4321/getGroup?name=%s&pass=%s`
         */
        GetGroupUrl: string;
        /**
         * 身份源配置描述。
         * @example `示例身份源`
         */
        Description: string;
        /**
         * 多身份源配置ID列表。
         * @example `1482,1355`
         */
        MultiIdpInfo: string;
        /**
         * PC端登录类型。
         * @example `password`
         */
        PcLoginType: string;
        /**
         * 移动端登录类型。
         * @example `password`
         */
        MobileLoginType: string;
        /**
         * 移动端二次认证配置类型。
         * @example `totp`
         */
        MobileMfaConfigType: string;
        /**
         * 自建二次认证服务请求签名校验Token
         * @example `7JAr3fYtn****`
         */
        VerifyToken: string;
        /**
         * 自建二次认证服务请求加密密钥。
         * @example `QVhaU0RDR0JIWV****`
         */
        VerifyAesKey: string;
        /**
         * 自建二次认证服务验证链接地址。
         * @example `http://172.10.XX.XX:1234/otp_verify`
         */
        VerifyUrl: string;
    };
}
