export interface VerifyUserAuthenticationResponse {
    /**
     * 请求ID
     * @example `83ED3BC7-B36E-53B5-83D4-152CF2088DB9`
     */
    RequestId: string;
    /**
     * 认证结果，true or false
     * @example `true`
     */
    VerifyResult: boolean;
    /**
     * 认证结果
     */
    AuthenticateResultInfo: {
        /**
         * 认证通过的用户Id
         * @example `3b32`
         */
        UserId: string;
        /**
         * 认证使用的凭据Id
         * @example `scimcred-000vfaknfwlp8kesl520`
         */
        CredentialId: string;
        /**
         * 这次认证绑定的操作hash
         * @example `10e8c224555bba8bfb780badebc4a08cc1Z6LmC6Hp9`
         */
        BindHashBase64: string;
    };
    /**
     * 生成的sdksdk的md5值。
     * @example `zmtdjb`
     */
    EtasSDKString: string;
    /**
     * 身份令牌
     * @example `qacdfhigvbcvb`
     */
    IdToken: string;
}
