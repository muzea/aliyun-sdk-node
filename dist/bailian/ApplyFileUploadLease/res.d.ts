export interface ApplyFileUploadLeaseResponse {
    /**
     * 每次请求的唯一ID
     * @example `778C0B3B-xxxx-5FC1-A947-36EDD13606AB`
     */
    RequestId: string;
    /**
     * 接口调用是否成功：
     * - `true`：成功
     * - `false`：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息，有错误信息时返回该值。
     * @example `User not authorized to operate on the specified resource`
     */
    Message: string;
    /**
     * 错误状态码
     * @example `DataCenter.FileTooLarge`
     */
    Code: string;
    /**
     * 接口返回的状态码
     * @example `200`
     */
    Status: string;
    /**
     * 接口返回的业务字段。
     */
    Data: {
        /**
         * 租约唯一ID，调用后续添加文件（AddFile）接口时，需要使用该参数
         * @example `1e6a159107384782be5e45ac4759b247.1719325231035`
         */
        FileUploadLeaseId: string;
        /**
         * 文件上传方式，可能取值如下（后续可能会扩充）：
         * OSS.PreSignedURL、HTTP
         * @example `HTTP`
         */
        Type: string;
        /**
         * 用于上传文档的HTTP请求参数
         */
        Param: {
            /**
             * HTTP调用方法，字符串，包含PUT、POST等
             * @example `PUT`
             */
            Method: string;
            /**
             * 文件上传URL地址，字符串
             * @example `https://bailian-datahub-data-origin-prod.oss-cn-hangzhou.aliyuncs.com/1005426495169178/10024405/68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847.pdf?Expires=1716699536&OSSAccessKeyId=TestID&Signature=HfwPUZo4pR6DatSDym0zFKVh9Wg%3D`
             */
            Url: string;
            /**
             * 需要放到Header中的KV字段，K和V均为字符串
             * @example `        "X-bailian-extra": "MTAwNTQyNjQ5NTE2OTE3OA==",
                    "Content-Type": "application/pdf"`
             */
            Headers: any;
        };
    };
}
