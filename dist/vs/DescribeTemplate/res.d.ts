export interface DescribeTemplateResponse {
    /**
     * 模板类型。取值：
     * - record（录制）
     * - snapshot（截图）
     * - transcode（转码）
     * - timeshift（时移）
     * @example `record`
     */
    Type: string;
    /**
     * 模板触发类型。取值：
     * - auto（自动）
     * - ondemand（按需）
     * > 仅限录制模板。
     * @example `auto`
     */
    Trigger: string;
    /**
     * HLS的存储路径，ts文件。
     * > 仅限录制模板。
     * @example `osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}`
     */
    HlsTs: string;
    /**
     * MP4的存储路径。
     * > 仅限录制模板。
     * @example `osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}`
     */
    Mp4: string;
    /**
     * JPG的存储路径，用于覆盖截图。
     * > 仅限截图模板。
     * @example `osspath/snapshot/{AppName}/{StreamName}.jpg`
     */
    JpgOverwrite: string;
    /**
     * 模板执行后的回调。
     * @example `http://example.com/callback`
     */
    Callback: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 模板描述。
     * @example `录制模板`
     */
    Description: string;
    /**
     * OSS所属区域，即服务中心。
     * @example `cn-qingdao`
     */
    Region: string;
    /**
     * 时移保存周期，单位：天
     * > 仅限时移模板。
     * @example `3`
     */
    Retention: number;
    /**
     * HLS的存储路径，m3u8文件。
     * > 仅限录制模板。
     * @example `osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}`
     */
    HlsM3u8: string;
    /**
     * 模板名称。
     * @example `录制模板`
     */
    Name: string;
    /**
     * FLV的存储路径。
     * > 仅限录制模板。
     * @example `osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}`
     */
    Flv: string;
    /**
     * 模板创建时间。
     * @example `2020-12-10T10:00:00Z`
     */
    CreatedTime: string;
    /**
     * OSS的域名。
     * @example `oss-cn-qingdao.aliyuncs.com`
     */
    OssEndpoint: string;
    /**
     * OSS文件前缀
     * @example `oss-prefix`
     */
    OssFilePrefix: string;
    /**
     * JPG的存储路径，用于按需截图。
     * > 仅限截图模板。
     * @example `osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg`
     */
    JpgOnDemand: string;
    /**
     * OSS的Bucket。
     * @example `my_oss_bucket`
     */
    OssBucket: string;
    /**
     * 存储文件格式，多值用逗号分隔。取值：mp4,flv,hls,jpg
     * @example `hls`
     */
    FileFormat: string;
    /**
     * JPG的存储路径，用于序列截图。
     * > 仅限截图模板。
     * @example `osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`
     */
    JpgSequence: string;
    /**
     * 操作周期，单位：秒。
     * @example `3600`
     */
    Interval: number;
    /**
     * 模板ID。
     * @example `323*****998-cn-qingdao`
     */
    Id: string;
    /**
     * 转码配置列表。
     * > 仅限转码模板。
     */
    TransConfigs: {
        /**
         * 视频Gop，单位：帧
         * @example `50`
         */
        Gop: number;
        /**
         * 视频宽度
         * @example `1280`
         */
        Width: number;
        /**
         * 视频比特率，单位：kbps
         * @example `800`
         */
        VideoBitrate: number;
        /**
         * 视频高度
         * @example `720`
         */
        Height: number;
        /**
         * 视频编码
         * @example `h264`
         */
        VideoCodec: string;
        /**
         * 视频帧率，单位：fps
         * @example `25`
         */
        Fps: number;
        /**
         * 转码规则名称，转码规则名称将作为转码流后缀，建议按使用习惯设置为sd，200k等易辨识后缀，只支持数字和字母
         * @example `sd`
         */
        Name: string;
        /**
         * 转码配置ID。
         * @example `399*****430-cn-qingdao`
         */
        Id: string;
    }[];
}
