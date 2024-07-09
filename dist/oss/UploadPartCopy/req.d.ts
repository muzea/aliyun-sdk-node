export interface UploadPartCopyRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 拷贝源地址（必须有可读权限）。
     * @example `/oss-example/ src-object`
     */
    "x-oss-copy-source": string;
    /**
     * 每一个上传的Part都有一个标识它的号码（partNumber）。
     * 取值：1~10000
     * 单个Part的大小限制为100 KB~5 GB。
     * > MultipartUpload事件中除最后一个Part以外，其他Part的大小都要大于或等于100 KB。因不确定是否为最后一个Part，UploadPart接口并不会立即校验上传Part的大小，只有当CompleteMultipartUpload时才会校验。
     * @example `10000`
     */
    "partNumber": number;
    /**
     * uploadId用于唯一标识上传的Part属于哪个Object。
     * @example `0004B999EF5A239BB9138C6227D69F95`
     */
    "uploadId": string;
    /**
     * 源Object的拷贝范围。例如设置bytes=0~9，表示拷贝0到9这10个字符。
     * 默认值：无
     *   - 不指定该请求头时，表示拷贝整个源Object。
     *   - 当指定该请求头时，则返回消息中会包含整个文件的长度和此次拷贝的范围，例如：Content-Range: bytes 0~9/44，表示整个文件长度为44，此次拷贝的范围为0~9。
     *   - 当指定的范围不符合规范时，则拷贝整个源Object，并且不在结果中提及Content-Range。
     * @example `bytes=100-6291756`
     */
    "x-oss-copy-source-range"?: string;
    /**
     * 如果源Object的ETAG值和用户提供的ETAG相等，则执行拷贝操作；否则返回412 HTTP错误码（预处理失败）。
     * 默认值：无
     * @example `5B3C1A2E053D763E1B002CC607C5****`
     */
    "x-oss-copy-source-if-match"?: string;
    /**
     * 如果传入的ETag值和Object的ETag不匹配，则正常传输文件，并返回200 OK；否则返回304 Not Modified。
     * 默认值：无
     * @example `5B3C1A2E053D763E1B002CC607C5****`
     */
    "x-oss-copy-source-if-none-match"?: string;
    /**
     * 如果传入参数中的时间等于或者晚于文件实际修改时间，则正常传输文件，并返回200 OK；否则返回412 precondition failed错误。
     * 默认值：无
     * @example `Fri, 13 Oct 2015 14:47:53 GMT`
     */
    "x-oss-copy-source-if-unmodified-since"?: string;
    /**
     * 如果指定的时间早于实际修改时间，则正常传送文件，并返回200 OK；否则返回304 not modified。
     * 默认值：无
     * 时间格式：GMT时间，例如Fri, 13 Nov 2015 14:47:53 GMT
     * @example `Fri, 13 Nov 2015 14:47:53 GMT`
     */
    "x-oss-copy-source-if-modified-since"?: string;
}
