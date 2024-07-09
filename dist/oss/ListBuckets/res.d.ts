export interface ListBucketsResponse {
    /**
     * 保存ListBuckets（GetService）请求结果的容器。
     */
    ListAllMyBucketsResult: {
        /**
         * 保存Bucket拥有者信息的容器。
         */
        Owner: any;
        /**
         * 本次查询结果的前缀。
         * @example `logs/`
         */
        Prefix: string;
        /**
         * 本次ListBuckets（GetSerivce）的起点。
         * @example `abc`
         */
        Marker: string;
        /**
         * 响应请求内返回结果的最大数。
         * @example `20`
         */
        MaxKeys: number;
        /**
         * 是否所有的结果都已经返回。取值范围如下：
         * - true：表示本次没有返回全部结果。
         * - false：表示本次已经返回了全部结果。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 用于继续查询时给marker赋值。表示下一次ListBuckets（GetService）可以以此为marker，将未返回的结果返回。
         * @example `def`
         */
        NextMarker: string;
        /**
         * 保存Bucket信息列表的容器。
         */
        Buckets: {
            /**
             * 保存多个Bucket信息的列表。
             */
            Bucket: any[];
        };
    };
}
