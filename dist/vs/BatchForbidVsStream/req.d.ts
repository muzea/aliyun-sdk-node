export interface BatchForbidVsStreamRequest {
    /**
     * 您的加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 流名称。
     * > - 格式为：AppName/StreamName。
     * > - 支持多个，用英文逗号（,）分隔。
     * @example `live/stream1,live/stream2`
     */
    "Channel": string;
    /**
     * 用于指定主播推流还是客户端拉流。取值范围：
     * - publisher（主播推送）
     * > 目前仅支持：publisher。
     * @example `publisher`
     */
    "LiveStreamType": string;
    /**
     * 是否只断流不加入黑名单。取值范围：
     * - yes（是）
     * - no（否）
     * @example `yes`
     */
    "Oneshot"?: string;
    "ControlStreamAction"?: string;
    /**
     * 恢复流的时间。
     * > UTC时间格式，例如：2015-12-01T17:37:00Z
     * @example `2015-12-01T17:37:00Z`
     */
    "ResumeTime"?: string;
}
