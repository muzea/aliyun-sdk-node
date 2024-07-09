export interface CreateTemplateRequest {
    /**
     * 模板名称。
     * @example `录制模板`
     */
    "Name": string;
    /**
     * 模板描述。
     * @example `录制模板`
     */
    "Description"?: string;
    /**
     * 模板类型。取值：
     * - record（录制）
     * - snapshot（截图）
     * - transcode（转码）
     * - timeshift（时移）
     * @example `record`
     */
    "Type": string;
    /**
     * OSS所属区域，即服务中心。
     * @example `cn-qingdao`
     */
    "Region"?: string;
    /**
     * OSS的Bucket。
     * @example `bucketname`
     */
    "OssBucket"?: string;
    /**
     * OSS的域名。
     * @example `oss-cn-qingdao.aliyuncs.com`
     */
    "OssEndpoint"?: string;
    /**
     * OSS文件前缀
     * @example `oss-prefix`
     */
    "OssFilePrefix"?: string;
    /**
     * 模板触发类型，默认auto。取值：
     * - auto（自动）
     * - ondemand（按需）
     * @example `auto`
     */
    "Trigger"?: string;
    /**
     * 操作周期，单位秒。
     * @example `3600`
     */
    "Interval"?: number;
    /**
     * 时移保存周期，单位：天
     * @example `3`
     */
    "Retention"?: number;
    /**
     * 存储文件格式，多值用逗号分隔。取值：
     * - mp4
     * - flv
     * - hls
     * > 青岛单元暂不支持flv、mp4录制
     * @example `hls`
     */
    "FileFormat"?: string;
    /**
     * JPG的存储路径，用于覆盖截图。
     * - 目前仅支持生成jpg图片。
     * - 支持变量匹配，包含{AppName}、{StreamName}
     * @example `osspath/snapshot/{AppName}/{StreamName}.jpg`
     */
    "JpgOverwrite"?: string;
    /**
     * JPG的存储路径，用于序列截图。
     * - 目前仅支持生成jpg图片。
     * - 支持变量匹配，包含{AppName}、{StreamName}、{UnixTimestamp}、{Sequence}
     * - {UnixTimestamp}、{Sequence}必填一个
     * @example `osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`
     */
    "JpgSequence"?: string;
    /**
     * JPG的存储路径，用于按需截图。
     * - 目前仅支持生成jpg图片。
     * - 支持变量匹配，包含{AppName}、{StreamName}、{UnixTimestamp}、{Sequence}
     * - {UnixTimestamp}、{Sequence}必填一个
     * @example `osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg`
     */
    "JpgOnDemand"?: string;
    /**
     * MP4的存储路径。
     * - 路径中支持变量匹配，可选{AppName}、{StreamName}、{Sequence}、{EscapedStartTime}、{EscapedEndTime}
     * - 必须包含{EscapedStartTime}和{EscapedEndTime}
     * @example `osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}`
     */
    "Mp4"?: string;
    /**
     * FLV的存储路径。格式参考Mp4说明。
     * @example `osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}`
     */
    "Flv"?: string;
    /**
     * HLS的存储路径，m3u8文件。格式参考Mp4说明。
     * @example `osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}`
     */
    "HlsM3u8"?: string;
    /**
     * HLS的存储路径，ts文件。
     * - 路径中支持变量匹配，可选{AppName}、{StreamName}、{UnixTimestamp}、{Sequence}
     * - 必须包含{UnixTimestamp}和{Sequence}变量
     * @example `osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}`
     */
    "HlsTs"?: string;
    /**
     * 模板执行后的回调。
     * > 注： 按需触发的模板不支持回调参数。
     * @example `http://example.com/callback`
     */
    "Callback"?: string;
    /**
     * 转码配置TransConfig类型的数组，JSON格式字符串
     * @example `[{"Fps":25,"Gop":50,"Height":720,"VideoCodec":"h264","Width":1280,"Name":"sd","VideoBitrate":800}]`
     */
    "TransConfigsJSON"?: string;
}
