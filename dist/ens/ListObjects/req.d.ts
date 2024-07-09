export interface ListObjectsRequest {
    /**
     * Bucket名称。
     * @example `test`
     */
    "BucketName": string;
    /**
     * 请求响应体中文件名称采用的编码方式，目前仅支持url。
     * @example `url`
     */
    "EncodingType"?: string;
    /**
     * 此次列举文件的起点。设定从Marker之后按字母排序开始返回Object。Marker用来实现分页显示效果，参数的长度必须小于1024字节。
     * 做条件查询时，即使Marker在列表中不存在，也会从符合Marker字母排序的下一个开始打印。
     * @example `a`
     */
    "Marker"?: string;
    /**
     * 限定此次列举文件的最大个数。
     * 取值范围：0~1000（包含1000），默认值为100。
     * @example `100`
     */
    "MaxKeys"?: number;
    /**
     * 限定返回的文件必须以prefix作为前缀。使用Prefix查询时，返回的Key中仍会包含Prefix。
     * 参数的长度必须小于1000字节。
     * @example `b`
     */
    "Prefix"?: string;
    /**
     * 此次列举文件使用的continuationToken。如果MaxKeys的设定无法一次完成列举，返回结果会附加NextContinuationToken作为下一次列举的ContinuationToken。
     * @example `test1.txt`
     */
    "ContinuationToken"?: string;
    /**
     * 此次列举文件的起点。设定从StartAfter之后按字母排序开始返回Object。StartAfter用来实现分页显示效果，参数的长度必须小于1000字节。
     * 做条件查询时，即使StartAfter在列表中不存在，也会从符合StartAfter字母排序的下一个开始打印。
     * @example `b`
     */
    "StartAfter"?: string;
}
