export interface DescribeCustomizedDictUploadInfoResponse {
    /**
     * OSS文件key。
     * @example `HC_CUSTOMIZED_DICT/176618589410****.tmp`
     */
    Key: string;
    /**
     * OSS签名。
     * @example `mWGRgn0CtdbVf8UuJbTXOmo2****`
     */
    Signature: string;
    /**
     * OSS域名。
     * @example `https://aegis-update-static-file.oss-cn-hangzhou.aliyuncs.com`
     */
    Host: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BDEDEEE7-AC25-559E-8C12-5168B139****`
     */
    RequestId: string;
    /**
     * OSS的Bucket Policy。
     * @example `eyJleHBpcmF0aW9uIjoiMjAyNC0wNy0wMlQxMTo1Nzo1MC44MzJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNDA5NjBdLFsiZXEiLCIka2V5IiwiSENfQ1VTVE9NSVpFRF9ESUNUXC8xNzY2MTg1ODk0MTA0Njc1LnRtc****`
     */
    Policy: string;
    /**
     * 访问文件需要的密钥ID。
     * @example `LTAI4G1mgPbjvG********`
     */
    Accessid: string;
    /**
     * 鉴权过期时间，时间戳格式。
     * @example `1719921470`
     */
    Expire: string;
}
