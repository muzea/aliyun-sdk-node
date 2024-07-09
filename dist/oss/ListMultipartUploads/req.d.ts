export interface ListMultipartUploadsRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 用于对Object名称进行分组的字符。所有名称包含指定的前缀且首次出现delimiter字符之间的Object作为一组元素CommonPrefixes。
     * @example `/`
     */
    "delimiter"?: string;
    /**
     * 限定此次返回Multipart Upload事件的最大个数，默认值为1000。最大值为1000。
     * @example `1000`
     */
    "max-uploads"?: number;
    /**
     * 与upload-id-marker参数配合使用，用于指定返回结果的起始位置。
     *   - 如果未设置upload-id-marker参数，查询结果中包含所有Object名称的字典序大于key-marker参数值的Multipart Upload事件。
     *   - 如果设置了upload-id-marker参数，查询结果中包含：
     *     - 所有Object名称的字典序大于key-marker参数值的Multipart Upload事件。
     *     - Object名称等于key-marker参数值，但是UploadId比upload-id-marker参数值大的Multipart Upload事件。
     * @example `test1.avi`
     */
    "key-marker"?: string;
    /**
     * 限定返回的Object Key必须以prefix作为前缀。注意使用prefix查询时，返回的Key中仍会包含prefix。
     * > 您可以灵活地使用prefix参数对Bucket内的Object进行分组管理（类似文件夹功能）。
     * @example `fun/`
     */
    "prefix"?: string;
    /**
     * 与key-marker参数配合使用，用于指定返回结果的起始位置。
     *   - 如果未设置key-marker参数，则OSS会忽略upload-id-marker参数。
     *   - 如果设置了key-marker参数，查询结果中包含：
     *     - 所有Object名称的字典序大于key-marker参数值的Multipart Upload事件。
     *     - Object名称等于key-marker参数值，但是UploadId比upload-id-marker参数值大的Multipart Upload事件。
     * @example `0004B99B8E707874FC2D692FA5D7****`
     */
    "upload-id-marker"?: string;
    /**
     * 指定对返回的内容进行编码，指定编码的类型。Delimiter、KeyMarker、Prefix、NextKeyMarker和Key使用UTF-8字符，但xml 1.0标准不支持解析一些控制字符，例如ASCII值从0到10的字符。对于包含xml
     *                               1.0标准不支持的控制字符，可以通过指定encoding-type对返回的Delimiter、KeyMarker、Prefix、NextKeyMarker和Key进行编码。
     * 默认值：无
     */
    "encoding-type"?: any;
}
