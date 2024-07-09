export interface AddLiveRecordVodConfigRequest {
    /**
     * 主播流域名。
     * > 请先确认与此播放域名直播中心相同区域的点播已开通服务。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `testName`
     */
    "AppName": string;
    /**
     * 播流名称。
     * @example `stream`
     */
    "StreamName"?: string;
    /**
     * 点播转码模板组ID。
     * @example `e2d796d3bb5fd8049d32bff62f94****`
     */
    "VodTranscodeGroupId": string;
    /**
     * 周期录制时长。单位：秒。默认值为**3600**，取值范围：**300~21600**。
     * @example `300`
     */
    "CycleDuration"?: number;
    /**
     * 设置为**ON**表示开启自动合并，且必须同时设置请求参数ComposeVodTranscodeGroupId。不传入参数值表示关闭自动合并。
     * >开启自动合并，会使用视频点播服务剪辑合成功能。该功能计费详情，请参见[剪辑合成计费](~~188310~~)。
     * @example `ON`
     */
    "AutoCompose"?: string;
    /**
     * 存储地址。
     * @example `****-tjptr2vatm.oss-cn-shanghai.aliyuncs.com`
     */
    "StorageLocation"?: string;
    /**
     * 对自动合成出来的新视频在点播服务中进行一次转码，所使用的点播转码模板组ID。
     * >- 当AutoCompose（是否开启自动合并）设为ON时，本参数才必填。
     * - 自动合成和转码常见问题，请参见[直播转点播常见问题FAQ](~~99726~~)。
     * - 点播转码计费详情，请参见[媒资转码计费](~~188308~~)。
     *
     * @example `*****`
     */
    "ComposeVodTranscodeGroupId"?: string;
    /**
     * 按需录制，取值：
     *
     * - **0**（默认值）：关闭。
     * - **1**：通过HTTP回调方式。
     * @example `0`
     */
    "OnDemand"?: number;
}
