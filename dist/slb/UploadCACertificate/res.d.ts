export interface UploadCACertificateResponse {
    /**
     * CA证书上传的时间戳。
     * @example `1504147745000`
     */
    CreateTimeStamp: number;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF******`
     */
    RequestId: string;
    /**
     * CA证书的过期时间。
     * @example `2024-11-21T06:04:25Z`
     */
    ExpireTime: string;
    /**
     * CA证书的指纹。
     * @example `02:DF:AB:ED`
     */
    Fingerprint: string;
    /**
     * CA证书上传的时间。
     * @example `2017-08-31T02:49:05Z`
     */
    CreateTime: string;
    /**
     * CA证书的域名。
     * @example `example.com`
     */
    CommonName: string;
    /**
     * 企业资源组ID。
     * @example `rg-atstuj3******`
     */
    ResourceGroupId: string;
    /**
     * CA证书的名称。
     * @example `mycacert01`
     */
    CACertificateName: string;
    /**
     * CA证书的过期时间戳。
     * @example `1732169065000`
     */
    ExpireTimeStamp: number;
    /**
     * CA证书ID。
     * @example `139a0******`
     */
    CACertificateId: string;
}
