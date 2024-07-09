export interface BatchResumeVsStreamRequest {
    /**
     * 您的加速域名
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 流名称，格式为AppName/StreamName, 多个用,隔开
     * @example `live/stream1`
     */
    "Channel": string;
    /**
     * 用于指定主播推流还是客户端拉流, 目前支持“publisher”（主播推送）
     * @example `publisher`
     */
    "LiveStreamType": string;
    "ControlStreamAction"?: string;
}
