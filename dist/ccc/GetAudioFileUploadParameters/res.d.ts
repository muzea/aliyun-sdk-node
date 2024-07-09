export interface GetAudioFileUploadParametersResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C81FD1A5-4B99-470A-A527-D80150228784`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * OSS文件的Key。
         * @example `ccc-test/test-file.wav`
         */
        FilePath: string;
        /**
         * 文件上传临时凭证的签名信息，用于上传时验证合法性。
         * @example `HIyClras8IcVlbTV7RIJWJbU****`
         */
        Signature: string;
        /**
         * OSS的接入域名。
         * @example `https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com`
         */
        Host: string;
        /**
         * 签名策略。
         * @example `eyJleHBpcmF0aW9uIjoiMjAyMi0wNi0yOVQwMDoyOTowMC42NTRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiYXVkaW8vMTU3NzI0NzExNTQ5MDQwMS9seS1vbmxpbmUvMjAyMjA2MjkwNzI5MDAvIl1d****`
         */
        Policy: string;
        /**
         * 过期时间。
         * @example `1647313420`
         */
        ExpireTime: number;
        /**
         * 签名使用的AccessKeyId。
         * @example `****`
         */
        AccessKeyId: string;
    };
}
