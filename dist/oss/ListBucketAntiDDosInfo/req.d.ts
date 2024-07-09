export interface ListBucketAntiDDosInfoRequest {
    /**
     * 设定从marker之后按字母排序开始返回高防实例。
     * > 第一次请求时可以将marker设置为空字符串。如果返回结果中IsTruncated存在且为true，则需要将返回结果中的marker字段作为参数进行下一次请求。
     * @example `nextMarker`
     */
    "marker"?: string;
    /**
     * 指定返回的高防实例最大数量。
     * 取值：[1,100]
     * 默认值：100
     * @example `
    100`
     */
    "max-keys"?: string;
}
