export interface ListOpenPlatformConfigResponse {
    /**
     * 请求ID。
     * @example `2540E86F-2CD4-44AC-A7AB-59CAF40C225D`
     */
    RequestId: string;
    /**
     * 密钥列表。
     */
    SecretList: {
        /**
         * 服务空间ID。
         * @example `0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
         */
        SpaceId: string;
        /**
         * 应用密钥。
         * @example `1r0ElNPFqLI6qgY08*******************************9TIK3RN_5fk9SEMO`
         */
        AppSecret: string;
        /**
         * 支付宝公钥证书。
         * @example `-----BEGIN CERTIFICATE----- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQ -----END CERTIFICATE-----`
         */
        PublicCert: string;
        /**
         * 应用公钥证书。
         * @example `-----BEGIN CERTIFICATE----- MIIEwTCCA6mgAwIBAgIQICAJGbUNoqdPr25qpPU7+ -----END CERTIFICATE-----`
         */
        AppCert: string;
        /**
         * 私钥。
         * @example `MIIEvgIBADANBgkqhkiG9w0BAQEFAAS`
         */
        PrivateKey: string;
        /**
         * 小程序ID。
         * @example `201909116717****`
         */
        AppId: string;
        /**
         * 支付宝根证书。
         * @example `-----BEGIN CERTIFICATE----- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQ -----END CERTIFICATE-----`
         */
        RootCert: string;
        /**
         * 公钥。
         * @example `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ`
         */
        PublicKey: string;
        /**
         * 平台。
         * @example `Alipay`
         */
        Platform: string;
        /**
         * 加签方式，可选值如下：
         * - PUBLIC_KEY：公钥。
         * - CERT：公钥证书。
         * @example `CERT`
         */
        SignMode: string;
    }[];
}
