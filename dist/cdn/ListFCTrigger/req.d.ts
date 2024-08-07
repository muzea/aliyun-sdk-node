export interface ListFCTriggerRequest {
    /**
     * 事件名称。仅支持传单个名称。
     * <props="china">事件名称请参见[CDN事件触发器](~~73333~~)。</props>
     * @example `LogFileCreated`
     */
    "EventMetaName": string;
    /**
     * 事件版本号。仅支持传单个版本号。
     * <props="china">事件版本请参见[CDN事件触发器](~~73333~~)。</props>
     * @example `1.0.0`
     */
    "EventMetaVersion": string;
}
