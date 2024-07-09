export interface ListPartsRequest {
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
     * MultipartUpload事件的ID。
     * @example `0004B999EF5A239BB9138C6227D69F95`
     */
    "uploadId": string;
    /**
     * 规定在OSS响应中的最大Part数目。
     * 默认值：**1,000**
     * 最大值：**1,000**
     * @example `1000`
     */
    "max-parts"?: number;
    /**
     * 指定List的起始位置，只有Part Number数目大于该参数的Part会被列出。
     * 默认值：无
     * @example `100`
     */
    "part-number-marker"?: number;
    /**
     * 指定对返回的内容进行编码，指定编码的类型。Key使用UTF-8字符，但xml 1.0标准不支持解析一些控制字符，比如ascii值从0到10的字符。对于Key中包含xml 1.0标准不支持的控制字符，可以通过指定Encoding-type对返回的Key进行编码。
     * 默认值：无
     * 可选值：**url**
     */
    "encoding-type"?: any;
}
