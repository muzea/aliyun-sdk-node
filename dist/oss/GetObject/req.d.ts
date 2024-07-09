export interface GetObjectRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 指定OSS返回请求的content-type头。
     * @example `image/jpg`
     */
    "response-content-type"?: string;
    /**
     * 指定OSS返回请求的content-language头。
     * @example `中文`
     */
    "response-content-language"?: string;
    /**
     * 指定OSS返回请求的expires头。
     * @example `Fri, 24 Feb 2012 17:00:00 GMT`
     */
    "response-expires"?: string;
    /**
     * 指定OSS返回请求的cache-control头。
     * @example `no-cache`
     */
    "response-cache-control"?: string;
    /**
     * 指定OSS返回请求的content-disposition头。
     * @example `attachment; filename:testing.txt`
     */
    "response-content-disposition"?: string;
    /**
     * 指定OSS返回请求的content-encoding头。
     * @example `utf-8`
     */
    "response-content-encoding"?: string;
    /**
     * 指定文件传输的范围。
     *   - 如果指定的范围符合规范，返回消息中会包含整个Object的大小和此次返回Object的范围。例如：Content-Range: bytes 0~9/44，表示整个Object大小为44，此次返回的范围为0~9。
     *   - 如果指定的范围不符合规范，则传送整个Object，并且结果中不包含Content-Range。
     * 默认值：无
     * @example `Content-Range: bytes 100-900/344606`
     */
    "Range"?: string;
    /**
     * 如果指定的时间早于实际修改时间或指定的时间不符合规范，则直接返回Object，并返回200 OK；如果指定的时间等于或者晚于实际修改时间，则返回304 Not Modified。
     * 时间格式：GMT，例如`Fri, 13 Nov 2015 14:47:53 GMT`
     * 默认值：无
     * @example `Fri, 13 Nov 2015 14:47:53 GMT`
     */
    "If-Modified-Since"?: string;
    /**
     * 如果指定的时间等于或者晚于Object实际修改时间，则正常传输Object，并返回200 OK；如果指定的时间早于实际修改时间，则返回412 Precondition
     *                               Failed。
     * 时间格式：GMT，例如`Fri, 13 Nov 2015 14:47:53 GMT`
     * **If-Modified-Since**和**If-Unmodified-Since**可以同时使用。
     * 默认值：无
     * @example `Fri, 13 Nov 2015 14:47:53 GMT`
     */
    "If-Unmodified-Since"?: string;
    /**
     * 如果传入的ETag和Object的ETag匹配，则正常传输Object，并返回200 OK；如果传入的ETag和Object的ETag不匹配，则返回412 Precondition Failed。
     * Object的ETag值用于验证数据是否发生了更改，您可以基于ETag值验证数据完整性。
     * 默认值：无
     * @example `fba9dede5f27731c9771645a3986****`
     */
    "If-Match"?: string;
    /**
     * 如果传入的ETag值和Object的ETag不匹配，则正常传输Object，并返回200 OK；如果传入的ETag和Object的ETag匹配，则返回304 Not Modified。
     * **If-Match**和**If-None-Match**可以同时使用。
     * 默认值：无
     * @example `5B3C1A2E0563E1B002CC607C****`
     */
    "If-None-Match"?: string;
    /**
     * 指定客户端的编码类型。
     * 如果要对返回内容进行Gzip压缩传输，您需要在请求头中以显示方式加入Accept-Encoding:gzip。OSS会根据Object的Content-Type和Object大小（不小于1
     *                                  KB）判断是否返回经过Gzip压缩的数据。
     * >   - 如果采用了Gzip压缩，则不会附带ETag信息。
     * >   - 目前OSS支持Gzip压缩的Content-Type为text/cache-manifest、 text/xml、text/plain、text/css、application/javascript、application/x-javascript、application/rss+xml、application/json和text/json。
     * 默认值：无
     * @example `gzip`
     */
    "Accept-Encoding"?: string;
    /**
     * 目标文件的版本ID。
     * @example `CAEQNhiBgMDJgZCA0BYiIDc4MGZjZGI2OTBjOTRmNTE5NmU5NmFhZjhjYmY0****`
     */
    "versionId"?: string;
}
