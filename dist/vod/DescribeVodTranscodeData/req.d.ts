export interface DescribeVodTranscodeDataRequest {
    /**
     * 获取数据起始时间点。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-02-01T15:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间点，需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-02-01T15:59:00Z`
     */
    "EndTime": string;
    /**
     * 存储地域。默认返回所有区域。支持批量查询，多个地域使用半角逗号（,）分隔。取值：
     * - **cn-shanghai**：上海。
     * - **cn-beijing**：北京。
     * - **eu-central-1**：德国。
     * - **ap-southeast-1**：新加坡。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 时间粒度。取值：
     * - **day**：天。
     * - **hour**：小时。
     * @example `day`
     */
    "Interval"?: string;
    /**
     * 存储名称（阿里云OSS存储Bucket名称）。默认返回所有存储。支持批量查询，多个用半角逗号（,）分隔。
     * @example `bucket01`
     */
    "Storage"?: string;
    /**
     * 转码规格，默认返回所有转码规格。支持批量查询，多个用半角逗号（,）分隔。取值：
     * - **Audio**：音频。
     * - **Segmentation**：转封装。
     * - **H264.LD**、**H264.SD**、**H264.HD**、**H264.2K**、**H264.4K**等。
     * @example `Audio`
     */
    "Specification"?: string;
    /**
     * 应用ID。传入此参数，可以查询指定应用下的转码用量。默认返回所有应用的转码用量数据。本参数值可以从[CreateAppInfo](~~CreateAppInfo~~)接口的返回参数`AppId`获取。
     * @example `app-1000001`
     */
    "AppId"?: string;
}
