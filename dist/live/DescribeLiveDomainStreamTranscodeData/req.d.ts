export interface DescribeLiveDomainStreamTranscodeDataRequest {
    /**
     * 可输入需要查询的主播流域名。
     * - 若参数为空，默认返回所有域名数据。
     * - 支持批量域名查询，多个域名用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 查询起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * - 最小数据时间粒度为1小时。
     * - 不填默认读取过去24小时数据。
     * @example `2017-12-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-10T22:00:00Z`
     */
    "EndTime": string;
    /**
     * 查询的时间精度。取值：
     * - **min**（默认）：以分钟为单位。
     * - **sec**：以秒为单位。
     * @example `min`
     */
    "Precision"?: string;
    /**
     * 查询的时间粒度。单位：秒。取值：
     * - **3600**：按小时粒度。
     * - **86400**：按天粒度。
     * > 不填默认按小时。
     * @example `3600`
     */
    "Interval"?: string;
    /**
     * 分组键。取值：
     * - **domain**：域名。如果此参数Split（分组键）取值为domain时，返回参数Domain才生效。
     * - **region**：直播中心地域。如果此参数Split（分组键）取值为region时，返回参数Region才生效。
     * - **transcode_type**：转码类型。如果此参数Split（分组键）取值为transcode_type时，返回参数TanscodeType才生效。
     * - **resolution**：分辨率。如果此参数Split（分组键）取值为resolution时，返回参数Resolution才生效。
     * - **fps**：帧率。如果此参数Split（分组键）取值为fps时，返回参数Fps才生效。
     * 可选一个，也可多选，用英文逗号（,）分隔。
     * 默认为`domain,region,transcode_type,resolution,fps`，即全部进行分组。
     * @example `domain`
     */
    "Split"?: string;
}
