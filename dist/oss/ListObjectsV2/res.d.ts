export interface ListObjectsV2Response {
    /**
     * 保存返回Object元信息的容器。
     */
    ListBucketResult: {
        /**
         * Bucket名称。
         * @example `example-bucket`
         */
        Name: string;
        /**
         * 本次查询结果的前缀。
         * @example `logs/`
         */
        Prefix: string;
        /**
         * 如果请求中指定了StartAfter参数，则会在返回的响应中包含StartAfter元素。
         * @example `test.txt`
         */
        StartAfter: string;
        /**
         * 响应请求内返回结果的最大数目。
         * @example `20`
         */
        MaxKeys: number;
        /**
         * 对Object名字进行分组的字符。所有名字包含指定的前缀且第一次出现Delimiter字符之间的Object作为一组元素CommonPrefixes。
         * @example `/`
         */
        Delimiter: string;
        /**
         * 请求中返回的结果是否被截断。
         * 返回值：true、false
         * true表示本次没有返回全部结果。
         * false表示本次已经返回了全部结果。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 此次请求返回的Key的个数。如果指定了Delimiter，则KeyCount为Key和CommonPrefixes的元素之和。
         * @example `6`
         */
        KeyCount: number;
        /**
         * 指明返回结果中编码使用的类型。如果请求的参数中指定了Encoding-type，则会对返回结果中的Delimiter、StartAfter、Prefix、NextContinuationToken和Key这些元素进行编码。
         * @example `url`
         */
        EncodingType: string;
        /**
         * 如果请求中指定了ContinuationToken参数，则会在返回的响应中包含ContinuationToken元素。
         * @example `CgJiYw--`
         */
        ContinuationToken: string;
        /**
         * 表明此次ListObjectsV2（GetBucketV2）请求包含后续结果，需要将NextContinuationToken指定为ContinuationToken继续获取结果。
         * @example `CgJiYw--`
         */
        NextContinuationToken: string;
        /**
         * 保存每个返回Object元数据的容器。
         */
        Contents: any[];
        /**
         * 如果请求中指定了Delimiter参数，则会在返回的响应中包含CommonPrefixes元素。该元素表明以Delimiter结尾，并有共同前缀的Object名称的集合。
         */
        CommonPrefixes: any[];
    };
}
