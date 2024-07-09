export interface SaveAntOpenPlatformConfigRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
     */
    "SpaceId": string;
    /**
     * 小程序ID。
     * @example `201909116717****`
     */
    "AppId": string;
    /**
     * 公钥。
     * @example `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCA`
     */
    "PublicKey"?: string;
    /**
     * 私钥。
     * @example `MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSk`
     */
    "PrivateKey": string;
    /**
     * 加签方式，可选值如下：
     * - PUBLIC_KEY：公钥。
     * - CERT：公钥证书。
     * @example `CERT`
     */
    "SignMode": string;
    /**
     * 应用公钥证书。
     * @example `-----BEGIN CERTIFICATE----- MIIEwTCCA6mgAwIBAgIQICAJGbUNoqdPr25qpPU7+ -----END CERTIFICATE-----`
     */
    "AppCert"?: string;
    /**
     * 支付宝公钥证书。
     * @example `-----BEGIN CERTIFICATE----- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQ -----END CERTIFICATE-----`
     */
    "PublicCert"?: string;
    /**
     * 支付宝根证书。
     * @example `-----BEGIN CERTIFICATE----- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQ -----END CERTIFICATE-----`
     */
    "RootCert"?: string;
}
