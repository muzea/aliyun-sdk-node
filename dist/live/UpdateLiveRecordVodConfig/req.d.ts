export interface UpdateLiveRecordVodConfigRequest {
    /**
     * 主播流域名。
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
     * 是否开启自动合并。取值：
     * - **ON**：开启。如果取值为ON，必须同时设置请求参数ComposeVodTranscodeGroupId。
     * - **OFF**：关闭。
     * @example `OFF`
     */
    "AutoCompose"?: string;
    /**
     * 对自动合成出来的新视频在点播服务中进行一次转码，所使用的点播转码模板组ID。
     * > 通过 [查询转码配置列表](~~454928~~) 获取
     * @example `*****`
     */
    "ComposeVodTranscodeGroupId"?: string;
    /**
     * 按需录制，取值：
     * - **0**（默认值）：关闭。
     * - **1**：通过HTTP回调方式。
     * @example `0`
     */
    "OnDemand"?: number;
}
