export interface GetQualificationUploadPolicyResponse {
    /**
     * 加密策略。
     * @example `eyJleHBpcmF0aW9uIjoiMjAaMC0wNy0wMlQxKToyMDoxMS44ODRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiMTIxOTU0MTE2MTIxMzA1Ny9PRkZMSU5FX1RSQU5TRkVSLzE1OTM2ODg1MTE4ODMi****`
     */
    Policy: string;
    /**
     * 过期时间。
     * @example `1593688811881`
     */
    Expire: string;
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-****-8035-4B12FEFD7D48`
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
     * OSS的Endpoint。
     * @example `https://********-review.oss-cn-********.aliyuncs.com`
     */
    Host: string;
    /**
     * 文件前缀。
     * @example `20211220/131953297274****_4de3db85-4f98-488d-845b-d75bf035b13d_${filename}`
     */
    Prefix: string;
    /**
     * 文件地址。
     * @example `20211220/131953297274****_4de3db85-4f98-488d-845b-d75bf035b13d`
     */
    Dir: string;
}
