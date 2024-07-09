export interface AddLiveAppRecordConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * OSS存储的Endpoint名称。
     * 直播录制文件存储至OSS，需提前创建OSS Bucket，创建方法请参见[配置OSS](~~84932~~) 。
     * @example `learn.developer.aliyundoc.com`
     */
    "OssEndpoint": string;
    /**
     * OSS存储的Bucket名称。
     * 直播录制文件存储至OSS，需提前创建OSS Bucket，创建方法请参见[配置OSS](~~84932~~) 。
     * @example `liveBucket****`
     */
    "OssBucket": string;
    /**
     * 播流名称。
     * @example `teststream`
     */
    "StreamName"?: string;
    /**
     * 录制开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 设置的时间必须是实际推流时间开始7天之内，只在流级别录制（StreamName不为空）有效。
     * @example `2018-04-10T09:57:21Z`
     */
    "StartTime"?: string;
    /**
     * 录制结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > EndTime与StartTime相差不应超过7天，超过7天将按照7天计算。只在流级别录制（StreamName不为空）有效。
     * @example `2018-04-16T09:57:21Z`
     */
    "EndTime"?: string;
    /**
     * 按需录制。取值：
     * - **0**：关闭。
     * - **1**：通过HTTP回调方式。
     * - **2**：解析推流参数按需录制。
     * - **7**：默认不录制，可以通过[RealTimeRecordCommand](~~85907~~)接口手动控制录制开启或停止。
     * >当OnDemand取值为**1**时，需要先通过[AddLiveRecordNotifyConfig](~~51831~~)接口配置OnDemandUrl，否则默认不录制。
     * @example `1`
     */
    "OnDemand"?: number;
    /**
     * 断流拼接时长。
     * 直播断流时长超过设定的拼接时长后，将会生成新文件，断流拼接时长支持15~21600秒。
     * @example `180`
     */
    "DelayTime"?: number;
    /**
     * 记录详情。
     */
    "RecordFormat"?: {
        /**
         * 单个切片时长。单位：秒。
         * ><notice>当RecordFormat.N.Format（格式）设为m3u8或cmaf时，本参数才有效。
         * ></notice>
         * 不填则默认为30秒。取值范围：5s~30s。
         * @example `30`
         */
        SliceDuration: number;
        /**
         * 切片名称。
         * ><notice>当RecordFormat.N.Format（格式）设为m3u8或cmaf时，本参数才需要配置。
         * ></notice>
         * - 默认30秒一片，小于256字节，支持变量匹配，包含{AppName}、{StreamName}、{UnixTimestamp}、{Sequence}。
         * - 参数值必须包含{UnixTimestamp}和{Sequence}变量。
         * @example `record/{AppName}/{StreamName}/{UnixTimestamp}_{Sequence}`
         */
        SliceOssObjectPrefix: string;
        /**
         * 周期录制时长。单位：秒。不填则默认为6小时。
         * > - 如果在一个录制周期内，直播流发生了断流，但是在3分钟内，该直播流又正常推流，那么仍会在同一个录制文件中继续录制。
         * - 一条直播流必须断流超过3分钟，才会生成最后一个录制文件。如果您需要修改默认的3分钟断流时间，可以提交工单进行修改。关于如何提交工单，请参见[联系我们](~~464625~~)。
         * @example `1`
         */
        CycleDuration: number;
        /**
         * OSS存储的录制文件名。
         * - 文件名小于256字节，支持变量匹配，包含 {AppName}、{StreamName}、{Sequence}、{StartTime}、{EndTime}、{EscapedStartTime}、{EscapedEndTime}。
         * - 参数值必须要有{StartTime}或{EscapedStartTime}和{EndTime}或{EscapedEndTime}。
         * @example `record/{AppName}/{StreamName}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}`
         */
        OssObjectPrefix: string;
        /**
         * 格式。目前支持M3U8、FLV、MP4。取值：
         * ><notice>RecordFormat和TranscodeRecordFormat两者至少需要设置一个。如果选择m3u8或cmaf格式，必须同时设置请求参数RecordFormat.N.SliceOssObjectPrefix和RecordFormat.N.SliceDuration。
         * ></notice>
         * - m3u8。
         * - flv。
         * - mp4。
         * - cmaf。
         * @example `m3u8`
         */
        Format: string;
    }[];
    /**
     * 转码记录详情。
     */
    "TranscodeRecordFormat"?: {
        /**
         * 转码流录制单个切片时长，单位：秒。
         * ><notice>当TranscodeRecordFormat.N.Format（转码流录制格式）设为m3u8或cmaf时，本参数才生效。
         * ></notice>
         * 不填则默认为30秒。取值范围：5s~30s。
         * @example `30`
         */
        SliceDuration: number;
        /**
         * 转码流录制切片名称。
         * ><notice>当TranscodeRecordFormat.N.Format（转码流录制格式）设为m3u8或cmaf时，本参数才需要配置。
         * ></notice>
         * - 默认30秒一片，小于256字节，支持变量匹配，包含{AppName}、{StreamName}、{UnixTimestamp}、{Sequence}。
         * - 参数值必须包含{UnixTimestamp}和{Sequence}变量。
         * @example `record/{AppName}/{StreamName}/{UnixTimestamp}_{Sequence}`
         */
        SliceOssObjectPrefix: string;
        /**
         * 转码流录制周期录制时长。单位：秒。不填则默认为6小时。
         * @example `21600`
         */
        CycleDuration: number;
        /**
         * 转码流录制OSS存储的录制文件名。
         * - 文件名小于256字节，支持变量匹配，包含 {AppName}、{StreamName}、{Sequence}、{StartTime}、{EndTime}、{EscapedStartTime}、{EscapedEndTime}。
         * - 参数值必须要有{StartTime}或{EscapedStartTime}和{EndTime}或{EscapedEndTime}。
         * @example `record/{AppName}/{StreamName}/{Sequence}_{EscapedStartTime}_{EscapedEndTime}`
         */
        OssObjectPrefix: string;
        /**
         * 转码流录制格式。目前支持M3U8、FLV、MP4。取值：
         * ><notice>如果选择m3u8或cmaf格式，必须同时设置请求参数TranscodeRecordFormat.N.SliceOssObjectPrefix和TranscodeRecordFormat.N.SliceDuration。
         * ></notice>
         * - m3u8。
         * - flv。
         * - mp4。
         * - cmaf。
         * @example `m3u8`
         */
        Format: string;
    }[];
    /**
     * 转码流录制的转码模板组。
     * @example `sd`
     */
    "TranscodeTemplates"?: string[];
}
