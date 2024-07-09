export interface HeadObjectRequest {
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
     * 请求Object的版本号。
     * @example `CAEQMxiBgMCZov2D0BYiIDY4MDllOTc2YmY5MjQxMzdiOGI3OTlhNTU0ODIx****`
     */
    "versionId"?: string;
    /**
     * 如果传入参数中的时间早于实际修改时间，则返回200 OK和Object Meta；否则返回304 not modified。
     * 默认值：无
     * @example `Fri, 9 Apr 2021 14:47:53 GMT`
     */
    "If-Modified-Since"?: string;
    /**
     * 如果传入参数中的时间等于或者晚于文件实际修改时间，则返回200 OK和Object Meta；否则返回412 precondition failed。
     * 默认值：无
     * @example `Fri, 13 Oct 2021 14:47:53 GMT`
     */
    "If-Unmodified-Since"?: string;
    /**
     * 如果传入期望的ETag和Object的 ETag匹配，则返回200 OK和Object Meta；否则返回412 precondition failed。
     * 默认值：无
     * @example `fba9dede5f27731c9771645a3986****`
     */
    "If-Match"?: string;
    /**
     * 如果传入期望的ETag值和Object的ETag不匹配，则返回200 OK和Object Meta；否则返回304 Not Modified。
     * 默认值：无
     * @example `5B3C1A2E0563E1B002CC607C****`
     */
    "If-None-Match"?: string;
}
