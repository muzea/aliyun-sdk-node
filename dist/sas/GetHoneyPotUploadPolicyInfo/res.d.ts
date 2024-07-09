export interface GetHoneyPotUploadPolicyInfoResponse {
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 上传需要的密钥ID。
         * @example `LTAI4G1mgPbjvGQuiV1X****`
         */
        Accessid: string;
        /**
         * 文件上传的限制策略，如文件大小。
         * @example `eyJleHBpcmF0aW9uIjoiMjAyMy0wOS0wMVQwMzoyNTozNS44MzZaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsIkhPTkVZUE9UX0ZJTEUvMTc2NjE4NTg5NDEwNDY3NV8xNjkzNTM4NDM1N*****************`
         */
        Policy: string;
        /**
         * 根据**AccessKeySecret**和**Policy**计算出的签名信息。调用OSS API时，OSS验证该签名信息，从而确认Post请求的合法性。
         * @example `wKPqlFneNTZPn52k2Rz9GTY*****`
         */
        Signature: string;
        /**
         * 调用OSS的接口PostObject上传对象（即文件）的名称，包含OSS对象的完整路径。
         * @example `HONEYPOT_FILE/1766185894104675_169********`
         */
        Key: string;
        /**
         * 上传时的请求地址。
         * @example `https://aegis-update-static-file.oss-cn-hangzhou.aliyuncs.com`
         */
        Host: string;
        /**
         * 授权失效时间，时间戳格式，可以判断授权是否在有效期内，失效后授权不可用。
         * @example `1661443200000`
         */
        Expire: string;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口请求的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8C177095-A734-59B2-9409-7D4F26FF****`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
