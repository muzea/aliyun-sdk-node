export interface DescribeLiveInteractionMetricDataRequest {
    /**
     * 指标类型。取值：
     * - JoinChannelSucRate：5秒加入频道成功率。
     * - VideoStuckRate：视频卡顿率。
     * - AudioStuckRate：音频卡顿率。
     * - FirstFrameCost：首帧耗时。
     * @example `FirstFrameCost`
     */
    "MetricType": string;
    /**
     * 开始时间，用UNIX时间戳表示，单位：毫秒。
     * @example `1698195600000`
     */
    "BeginTs": number;
    /**
     * 结束时间，用UNIX时间戳表示，单位：毫秒。
     * @example `1698201013000`
     */
    "EndTs": number;
    /**
     * 操作系统。取值：iOS、Android。
     * @example `Android`
     */
    "Os"?: string;
    /**
     * 终端类型。取值：web、mobile。
     * @example `mobile`
     */
    "TerminalType"?: string;
    /**
     * 应用ID。
     * @example `e4d7f08a-01fe-41b5-a091-fe41060a****`
     */
    "AppId": string;
}
