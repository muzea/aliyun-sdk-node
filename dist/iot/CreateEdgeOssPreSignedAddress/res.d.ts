export interface CreateEdgeOssPreSignedAddressResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `91E2BFA2-ECD7-4E11-B36B-66BCC4773922`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * OSS地址。
         * @example `http://xxxx.oss-cn-shanghai.aliyuncs.com/driver/a534d3b81*******8fe7da0/DRIVER_VERSION_CONTENT/df9b9f441*********4c90d0c21d14/2.0.0/1581586102750/driver_code.zip`
         */
        OssAddress: string;
        /**
         * OSS预签名地址。更多信息，请参见[OSS文档](~~32016~~)。
         * @example `http://xxxx.oss-cn-shanghai.aliyuncs.com/driver/a534d3b81*******8fe7da0/DRIVER_VERSION_CONTENT/df9b9f441*********4c90d0c21d14/2.0.0/1581586102750/driver_code.zip?Expires\u003d1581586402\u0026OSSAccessKeyId\u003daS4MT0IYrP******\u0026Signature\u003dIUUjZ881H3rUoCOwjMXPmGbw******`
         */
        OssPreSignedAddress: string;
    };
}
