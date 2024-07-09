export interface OptionObjectRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 请求来源域，用于标识跨域请求。
     * 在实际请求中只能设置一个该请求头。
     * 默认值：无
     * @example `http://www.example.com`
     */
    "Origin"?: string;
    /**
     * 在实际请求中会用到的方法。
     * 在实际请求中只能设置一个该请求头。
     * 默认值：无
     * @example `PUT`
     */
    "Access-Control-Request-Method"?: string;
    /**
     * 在实际请求中会用到的除了简单头部之外的header。
     * 在实际请求中可以为该请求头设置多个header，多个header之间使用英文逗号(,)隔开。
     * 默认值：无
     * @example `x-oss-test1,x-oss-test2`
     */
    "Access-Control-Request-Headers"?: string;
}
