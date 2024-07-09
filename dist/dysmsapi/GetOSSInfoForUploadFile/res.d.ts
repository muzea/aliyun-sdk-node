export interface GetOSSInfoForUploadFileResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A90E4451-FED7-49D2-87C8-00700EDCFD0D`
     */
    RequestId: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Model: {
        /**
         * 签名策略。
         * @example `eyJleHBpcmF0aW9uIjoiMjAyN***Ni0yNVQwNjozNzoyNS45NzBaI**iY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0***sIiRrZXkiLCIiXV19`
         */
        Policy: string;
        /**
         * 策略路径。
         * @example `123456`
         */
        StartPath: string;
        /**
         * 签名使用的AccessKey ID。
         * @example `LTAIxetqt1Dg****
        `
         */
        AccessKeyId: string;
        /**
         * 根据**AccessKey Secret**和**Policy**计算出的签名信息。调用OSS API时，OSS验证该签名信息，从而确认Post请求的合法性。
         * @example `BXnwCWPrhVb*****aoZHZfli5KE=`
         */
        Signature: string;
        /**
         * Host地址。
         * @example `https://alicom-fc-media.oss-cn-zhangjiakou.aliyuncs.com`
         */
        Host: string;
        /**
         * 到期时间。
         * @example `1719297445`
         */
        ExpireTime: string;
    };
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/101346.htm)。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否成功。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    Success: boolean;
}
