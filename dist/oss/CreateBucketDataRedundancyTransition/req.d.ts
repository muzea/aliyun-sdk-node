export interface CreateBucketDataRedundancyTransitionRequest {
    /**
     * 要创建存储冗余类型转换任务的Bucket。
     * @example `example-bucket
    `
     */
    "bucket": string;
    /**
     * 目标存储冗余类型。OSS仅支持将LRS（本地冗余存储）转换为ZRS（同城冗余存储）。
     * @example `ZRS`
     */
    "x-oss-target-redundancy-type": string;
}
