export interface GetOperationOssUploadPolicyResponse {
    /**
     * 文件地址。
     * @example `1219541161213157/OFFLINE_TRANSFER/159368851****`
     */
    FileDir: string;
    /**
     * 加密策略。
     * @example `eyJleHBpcmF0aW9uIjoiMjAaMC0wNy0wMlQxKToyMDoxMS44ODRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiMTIxOTU0MTE2MTIxMzA1Ny9PRkZMSU5FX1RSQU5TRkVSLzE1OTM2ODg1MTE4ODMi****`
     */
    EncodedPolicy: string;
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-40EC-8035-4B12FEFD7D011`
     */
    RequestId: string;
    /**
     * 访问ID。
     * @example `hObpgEXoca42****`
     */
    Accessid: string;
    /**
     * 签名数据。
     * @example `pNVECGkyL0tl4bKXekV5ErZ****`
     */
    Signature: string;
    /**
     * OSS终端/接入地址。
     * @example `//***-basic-cert.oss-cn-***.aliyuncs.com/`
     */
    Host: string;
    /**
     * 过期时间。
     * @example `1593688811881`
     */
    ExpireTime: string;
}
