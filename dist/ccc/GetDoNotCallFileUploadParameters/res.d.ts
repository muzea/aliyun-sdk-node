export interface GetDoNotCallFileUploadParametersResponse {
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
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据。
     */
    Data: {
        /**
         * OSS文件的Key。
         * @example `ccc-test/blacklist.xlsx`
         */
        FilePath: string;
        /**
         * 文件上传临时凭证的签名信息，用于上传时验证合法性。
         * @example `zi31STIMtIfa/UN2l+6lww****`
         */
        Signature: string;
        /**
         * OSS的接入域名。
         * @example `https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com`
         */
        Host: string;
        /**
         * 签名策略。
         * @example `eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0xNVQwMzowMzo0MC4zMTJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwidGVtcC9ibGFja2xpc3QvaW1wb3J0LzE1NzcyNDcxMTU0OTA0MDEvY2NjVjIta216LzIwMjIE1MTAwMzQwLyJd****`
         */
        Policy: string;
        /**
         * 过期时间，格式为Unix时间戳，单位秒。
         * @example `1647313420`
         */
        ExpireTime: number;
        /**
         * 签名使用的accessKeyId。
         * @example `****`
         */
        AccessKeyId: string;
    };
}
