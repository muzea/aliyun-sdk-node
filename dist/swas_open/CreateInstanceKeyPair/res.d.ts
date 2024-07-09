export interface CreateInstanceKeyPairResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F	`
     */
    RequestId: string;
    /**
     * 密钥对名称。
     * @example `ceshi`
     */
    KeyPairName: string;
    /**
     * 密钥对指纹。
     * @example `If2K1ItazA4GlKkWCEhdRj8Wd6czAvK9*****`
     */
    Fingerprint: string;
    /**
     * 私钥
     * @example `***`
     */
    PrivateKey: string;
}
