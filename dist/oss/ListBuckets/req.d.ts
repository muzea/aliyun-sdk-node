export interface ListBucketsRequest {
    /**
     * 限定返回的Bucket名称必须以prefix作为前缀。如果不设定，则不过滤前缀信息。
     * 默认值：无
     * @example `my`
     */
    "prefix"?: string;
    /**
     * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
     * 默认值：无
     * @example `mybucket10`
     */
    "marker"?: string;
    /**
     * 限定此次返回Bucket的最大个数。
     * 取值范围：1~1000
     * 默认值：100
     * @example `100`
     */
    "max-keys"?: number;
    /**
     * Bucket所属资源组Id
     */
    "x-oss-resource-group-id"?: any;
}
