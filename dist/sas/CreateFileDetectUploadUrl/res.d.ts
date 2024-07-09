export interface CreateFileDetectUploadUrlResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F`
     */
    RequestId: string;
    /**
     * 文件上传需要的参数集合。
     */
    UploadUrlList: {
        /**
         * 文件上传地址的公网EndPoint。
         * @example `http://example.com`
         */
        PublicUrl: string;
        /**
         * 文件上传地址的内网EndPoint。
         * @example `http://example.com`
         */
        InternalUrl: string;
        /**
         * 上传参数过期的时间戳，单位为毫秒。
         * @example `1658562101370`
         */
        Expire: string;
        /**
         * 上传签名信息。
         */
        Context: {
            /**
             * 文件存储位置的AccessKey。
             * @example `LTAI4G1mgPbjvGQuiV1X****`
             */
            AccessId: string;
            /**
             * 文件上传的限制Policy，如文件大小。
             * @example `eyJleHBpcmF0aW9uIjoiMjAyMi0wNy0yM1QxMDo1ODoxMC****`
             */
            Policy: string;
            /**
             * 文件上传的签名。
             * @example `wDhPgVdnY/bkKFYcYFl+4crl****`
             */
            Signature: string;
            /**
             * 文件在OSS Bucket中的存储key。
             * @example `1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****`
             */
            OssKey: string;
        };
        /**
         * 文件是否存在。取值：
         * - **true**：文件已存在，不需要上传。
         * - **false**：文件不存在，需要上传。
         * @example `false`
         */
        FileExist: boolean;
        /**
         * 文件标识。
         * @example `0a212417e65c26ff133cfff28f6c****`
         */
        HashKey: string;
        /**
         * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
         * @example `200`
         */
        Code: string;
        /**
         * 错误码的详细信息。
         * @example `successful`
         */
        Message: string;
    }[];
}
