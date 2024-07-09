export interface SubmitLiveEditingJobRequest {
    /**
     * 剪辑片段列表，输出的成片由列表中的片段按顺序收尾拼接而成，JSON Array。
     * 每一个片段都包含开始时间和结束时间。如果没有直播流参数，则以外层的直播流配置为准。开始和结束时间戳皆为UTC时间。参数详情请见下方 Clip 数据结构。
     * @example `[{\"StartTime\": \" 2021-06-21T08:01:00Z\",  \"EndTime\": \" 2021-06-21T08:03:00Z\" ,  "AppName": "app", "DomainName": "domain.com", "StreamName": "stream"},  {\"StartTime\": \" 2021-06-21T08:05:00Z\",  \"EndTime\": \" 2021-06-21T08:09:00Z\" }]`
     */
    "Clips": string;
    /**
     * 直播剪辑工程ID。若非空，读取project相关存储配置。 若为空，则以入参存储配置为准。
     * @example `****fddd7748b58bf1d47e95****`
     */
    "ProjectId"?: string;
    /**
     * 直播流配置， JSON Object。需包含如下配置项：
     * - AppName：播流所属应用名称
     * - DomainName：域名
     * - StreamName：直播流名
     * @example `{ "AppName": "app", "DomainName": "domain.com", "StreamName": "stream"  }`
     */
    "LiveStreamConfig"?: string;
    /**
     * 输出成品的目标配置，JSON Object。可以设置输出成品的在OSS 上的URL，或者VOD Bucket 中的存储位置。
     * - 输出到OSS时，输出目标的MediaURL必填。
     * - 输出到VOD时，StorageLocation和FileName两个参数必填。
     * @example `{ "MediaURL": "https://ice-auto-test.oss-cn-shanghai.aliyuncs.com/testfile.mp4" }, 或 { "StorageLocation": "bucket.oss-cn-shanghai.aliyuncs.com", "FileName": "output.mp4" }`
     */
    "OutputMediaConfig"?: string;
    /**
     * 生成片段的合成配置，用JSON格式表示。其中，Mode为剪辑模式，取值：
     * - **AccurateFast**（默认值）：快速精剪，相较于Accurate模式合成速度更快。输出文件与源流分辨率一致，不支持指定输出成片宽高。
     * - **Accurate**：精确剪辑，可指定输出成片宽高。
     * - **Rough**：粗略剪辑，最小精度为一个TS分片，成片包含用户指定起止时间内所有分片，可指定输出成片宽高。
     * - **RoughFast**：快速粗剪，相较于Accurate模式合成速度更快，最小精度为一个TS分片，成片包含用户指定起止时间内所有分片。输出文件与源流分辨率一致，不支持指定输出成片宽高。
     * @example `{ "Mode": "AccurateFast"}`
     */
    "MediaProduceConfig"?: string;
    /**
     * 自定义设置，JSON Object，长度限制为512字节。
     * @example `{"key": "value"}`
     */
    "UserData"?: string;
    /**
     * 输出成品的目标类型。取值：
     * - oss-object  阿里云oss bucket下的oss object
     * - vod-media  阿里云vod的媒资
     * @example `oss-object`
     */
    "OutputMediaTarget"?: string;
}
