export interface GetOssStorageAndAccByBucketsResponse {
    /**
     * 请求ID。
     * @example `112F4860-F1B2-58DD-8FC0-75F19DA1C4BF`
     */
    RequestId: string;
    /**
     * bucket信息。
     */
    BucketList: {
        /**
         * 访问次数。
         * @example `1000`
         */
        Acc: number;
        /**
         * 存储空间名称。
         * @example `my-bucket`
         */
        Bucket: string;
        /**
         * 存储用量，单位byte。
         * @example `1024`
         */
        StorageUsageByte: number;
    }[];
}
