export interface UnbindOutputBucketRequest {
    /**
     * 需要解绑的输出媒体Bucket名称，可以通过**MPS控制台** > **工作流管理** > **媒体Bucket**获取，或通过**OSS控制台** > **我的访问路径**获取。
     * @example `example-bucket-****`
     */
    "Bucket": string;
}
