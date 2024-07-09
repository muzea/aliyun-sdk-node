export interface ForbidLiveStreamRequest {
    /**
     * 推流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 推流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 推流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * 用于指定主播推流还是客户端播流。目前仅支持：**publisher**（主播推流）。
     * @example `publisher`
     */
    "LiveStreamType": string;
    /**
     * 是否只断流不加入黑名单。取值：
     * - **yes**：只断流不加黑名单（支持上行推送或上行播流）。
     * - **no**：断流加入黑名单。
     * > 不填默认为**no**。
     * @example `yes`
     */
    "Oneshot"?: string;
    /**
     * 恢复流的时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * ><notice>
     * 当**Oneshot**参数为**no**时，ResumeTime不传值指定时间禁止直播流则为永久生效。
     * 如果传值指定时间解除黑名单则可在指定的时间点解除限制恢复直播流。
     * ></notice>
     * @example `2015-12-01T10:37:00Z`
     */
    "ResumeTime"?: string;
}
