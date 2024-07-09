export interface GenRealPersonVerificationTokenRequest {
    /**
     * 被校验的身份证人名。
     * @example `张三`
     */
    "CertificateName": string;
    /**
     * 身份证号码。
     * @example `33010219001123123X`
     */
    "CertificateNumber": string;
    /**
     * metainfo环境参数，需要通过客户端SDK获取。Android SDK通过getMetaInfos获取，iOS SDK通过getMetaInfo获取。
     * @example `{"dwe":"ew4e"...}`
     */
    "MetaInfo": string;
}
