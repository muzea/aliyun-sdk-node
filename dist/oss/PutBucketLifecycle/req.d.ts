export interface PutBucketLifecycleRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 指定生命周期规则是否允许前缀重叠。取值如下：
     * true：允许前缀重叠。
     * false：不允许前缀重叠。
     * @example `true`
     */
    "x-oss-allow-same-action-overlap"?: string;
    /**
     * 保存Lifecycle配置的请求体。
     */
    "body"?: {
        /**
         * Lifecycle配置的容器，最多可容纳1000条规则。
         */
        LifecycleConfiguration: any;
    };
}
