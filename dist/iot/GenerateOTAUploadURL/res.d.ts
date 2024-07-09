export interface GenerateOTAUploadURLResponse {
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
     * @example `74C2BB8D-1D6F-41F5-AE68-6B2310883F63`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的文件上传信息。详情见以下参数信息。
     */
    Data: {
        /**
         * 调用OSS的接口PostObject上传对象（即文件）的名称，包含OSS对象的完整路径。
         * @example `ota/65dfcda0473be29836dfde585472****​/ck2nfzljo00023g7kysg0****.bin`
         */
        Key: string;
        /**
         * OSS Bucket拥有者的**AccessKey ID**。
         * 该OSS Bucket将存储文件。
         * @example `cS8uRRy54Rsz****`
         */
        OSSAccessKeyId: string;
        /**
         * 根据**AccessKeySecret**和**Policy**计算出的签名信息。调用OSS API时，OSS验证该签名信息，从而确认Post请求的合法性。
         * @example `v6lViO4FBvfquajQjg20K5hK****`
         */
        Signature: string;
        /**
         * OSS的接入域名。
         * @example `https://iotx-ota.oss-cn-shanghai.aliyuncs.com`
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
        /**
         * 文件的URL，即文件在对象存储（OSS）上的存储地址。
         * 文件URL的格式为`https://BucketName.Endpoint/ObjectName`。其中，BucketName是Bucket名称，Endpoint是文件访问域名（各地域的Endpoint信息，请参见[访问域名和数据中心](~~31837~~)），ObjectName是包含文件夹以及文件后缀在内的该文件的完整路径。
         * 升级包文件上传成功后，使用此参数调用[CreateOTAFirmware](~~147311~~)接口创建升级包。
         * @example `https://iotx-ota.oss-cn-shanghai.aliyuncs.com/ota/65dfcda0473be29836dfde585472****​/ck2nfzljo00023g7kysg0****.bin`
         */
        FirmwareUrl: string;
        /**
         * 生成文件上传URL的时间，UTC格式。
         * @example `2019-11-04T06:21:54.607Z`
         */
        UtcCreate: string;
    };
}
