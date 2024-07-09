export interface GetCaCertResponse {
    /**
     * 请求ID
     * @example `E0496204-7586-5B4C-B364-2361CC0ED****`
     */
    RequestId: string;
    /**
     * Base64编码的CA证书内容
     * @example `-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIDM/1OMA0GCSqGSIb3DQEBCwUAME427zhT4HDLcCEW****-----END CERTIFICATE-----\n`
     */
    CaCert: string;
}
