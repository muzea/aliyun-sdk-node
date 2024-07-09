export interface ForbidVsStreamRequest {
    /**
     * 您的加速域名
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 应用名称
     * @example `xxxApp`
     */
    "AppName": string;
    /**
     * 流名称
     * @example `xxxStream`
     */
    "StreamName": string;
    /**
     * 目前仅支持”publisher”
     * @example `publisher`
     */
    "LiveStreamType": string;
    /**
     * 是否只断流不加入黑名单，取值：yes，表示只断流不加黑名单
     * @example `yes`
     */
    "Oneshot"?: string;
    "ControlStreamAction"?: string;
    /**
     * 恢复流的时间 UTC时间格式
     * @example `2015-12-01T17:37:00Z`
     */
    "ResumeTime"?: string;
}
