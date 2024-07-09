export interface GetBucketDataRedundancyTransitionRequest {
    /**
     * 存储空间名称。
     * @example `example-bucket
    `
     */
    "bucket": string;
    /**
     * 存储转换任务的ID。
     * @example `751f5243f8ac4ae89f34726534d1****`
     */
    "x-oss-redundancy-transition-taskid": string;
}
