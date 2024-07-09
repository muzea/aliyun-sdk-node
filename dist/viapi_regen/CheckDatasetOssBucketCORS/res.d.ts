export interface CheckDatasetOssBucketCORSResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `ADCD28CC-16DD-0EFC-9A1E-43B518E351C4`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 标注集对应的数据集所使用的用户OSS bucket跨域规则是否满足要求。
         * - true：跨域规则满足要求。
         * - false：没有设置跨域规则，或者设置的跨域规则不满足要求。
         * @example `false`
         */
        SetOssBucketCORSFlag: boolean;
        /**
         * 设置跨域规则的URL。
         * 用户可以单击此URL前去设置OSS Bucket的跨域规则。
         * @example `https://oss.console.aliyun.com/bucket/oss-cn-hangzhou/yize-test-bucket/data-security/cors`
         */
        OssBucketCORSConfigUrl: string;
        /**
         * 标注集对应的数据集所用的OSS Bucket名称。
         * @example `yize-test-bucket`
         */
        Bucket: string;
    };
}
