export interface ListObjectVersionsRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 对Object名字进行分组的字符。所有Object名字包含指定的前缀（prefix），第一次出现delimiter字符之间的Object作为一组元素（即CommonPrefixes）。
     * 如果将prefix设为文件夹名称后，再把delimiter设置为正斜线（/），则只返回该文件夹下的文件，该文件夹下的子文件名在CommonPrefixes中返回，子文件夹下递归的文件和文件夹不显示。
     * 默认值：无
     * @example `/`
     */
    "delimiter"?: string;
    /**
     * 设定结果从key-marker之后按字母序开始返回，与version-id-marker组合使用。
     * 参数的长度必须小于1024字节。
     * 默认值：无
     * >如果version-id-marker不为空，则key-marker不能为空
     * @example `example`
     */
    "key-marker"?: string;
    /**
     * 设定结果从key-marker对象的version-id-marker之后按新旧版本排序开始返回。如果version-id-marker未设定，则默认从key-marker按字母序排序的下一个Key的第一个版本开始返回。
     * 默认值：无
     * 有效值：版本ID
     * @example `CAEQMxiBgICbof2D0BYiIGRhZjgwMzJiMjA3MjQ0ODE5MWYxZDYwMzJlZjU1****`
     */
    "version-id-marker"?: string;
    /**
     * 限定此次返回Object的最大个数。
     * 如果因为max-keys的设定无法一次完成列举，返回结果会附加`NextKeyMarker`和`NextVersionIdMarker`作为下一次列举的marker。列举结果中包含`NextKeyMarker`和`NextVersionIdMarker`的值。
     * 取值：大于0小于1000
     * 默认值：100
     * @example `100`
     */
    "max-keys"?: number;
    /**
     * 限定返回的Object Key必须以prefix作为前缀。
     * - prefix的长度必须小于1024字节。
     * - 使用prefix查询时，返回结果的Key仍会包含prefix。
     * 如果将prefix设为某个文件夹名，则列举以此prefix开头的文件，即该文件夹下递归的所有的文件和子文件夹。
     * 默认值：无
     * @example `fun`
     */
    "prefix"?: string;
    /**
     * 对返回的内容进行编码并指定编码类型。
     * 默认值：无
     * 可选值：URL
     * >delimiter、marker、prefix、NextMarker以及Key使用UTF-8字符。如果delimiter、marker、prefix、NextMarker以及Key中包含XML
     *                                     1.0标准不支持的控制字符，您可以通过指定encoding-type对返回结果中的Delimiter、Marker、Prefix、NextMarker以及Key进行编码。
     */
    "encoding-type"?: any;
}
