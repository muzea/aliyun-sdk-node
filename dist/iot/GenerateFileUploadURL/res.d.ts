export interface GenerateFileUploadURLResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的文件上传信息。详情参见以下参数信息。
     */
    Data: {
        /**
         * 调用OSS的PostObject接口上传对象（即文件）的名称，包含OSS对象的完整路径。
         * @example `subpath/65dfcda0473be29836dfde585472****​/ck2nfzljo00023g7kysg0****.suffix`
         */
        Key: string;
        /**
         * OSS Bucket拥有者的AccessKey ID。
         * 该OSS Bucket将存储文件。
         * @example `cS8uRRy54Rsz****`
         */
        OssAccessKeyId: string;
        /**
         * 根据**AccessKey Secret**和**Policy**计算出的签名信息。调用OSS API时，OSS验证该签名信息，从而确认Post请求的合法性。
         * @example `v6lViO4FBvfquajQjg20K5hK****`
         */
        Signature: string;
        /**
         * OSS的接入域名。
         * @example `https://iotx-bucket-name.oss-***.aliyuncs.com`
         */
        Host: string;
        /**
         * OSS通过该参数验证请求表单域的合法性。
         * @example `eyJleHBpcmF****`
         */
        Policy: string;
        /**
         * 对象存储类型。默认为OSS。
         * @example `OSS`
         */
        ObjectStorage: string;
    };
}
