export interface DeleteBucketDataRedundancyTransitionRequest {
    /**
     * 要删除存储冗余类型转换任务的Bucket。
     * @example `example-bucket
    `
     */
    "bucket": string;
    /**
     * 存储冗余转换任务的ID。
     * @example `4be5beb0f74f490186311b268bf6****`
     */
    "x-oss-redundancy-transition-taskid": string;
}
