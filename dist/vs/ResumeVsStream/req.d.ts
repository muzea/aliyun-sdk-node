export interface ResumeVsStreamRequest {
    /**
     * 您的加速域名。
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 应用名称。
     * @example `xxxxApp`
     */
    "AppName": string;
    /**
     * 流名称。
     * @example `xxxxStream`
     */
    "StreamName": string;
    /**
     * 流类型。
     * > 目前仅支持：publisher
     * @example `publisher`
     */
    "LiveStreamType": string;
    "ControlStreamAction"?: string;
}
