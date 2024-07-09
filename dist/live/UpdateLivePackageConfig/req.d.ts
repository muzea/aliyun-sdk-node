export interface UpdateLivePackageConfigRequest {
    /**
     * 直播域名（主播放域名）。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * App名，`*`表示匹配所有名称。
     * @example `AppName`
     */
    "AppName": string;
    /**
     * 直播流名，`*`表示匹配AppName下所有流。
     * @example `StreamName`
     */
    "StreamName": string;
    /**
     * 直播协议与封装格式。取值：
     * - **HLS_CMAF**
     * - **LLHLS_TS**
     * （低延迟）
     * - **LLHLS_CMAF**（低延迟）
     * - **DASH_CMAF**
     * - **HLSDASH_CMAF**
     * @example `HLS_CMAF`
     */
    "Protocol": string;
    /**
     * 直播M3U8切片个数。取值范围：3～10。
     * @example `3`
     */
    "SegmentNum": number;
    /**
     * 切片时长，单位：秒。
     * - 如Protocol为HLS_CMAF，取值范围1～10s。
     * - 如Protocol为LLHLS_*，取值范围1～2s。
     * @example `5`
     */
    "SegmentDuration": number;
    /**
     * Part切片时长，单位：毫秒。
     * > 当Protocol为LLHLS_*时，该参数为必填项。
     * - SegmentDuration为1s时，取值范围100～500ms。
     * - SegmentDuration为2s时，取值范围100～1000ms。
     * @example `350`
     */
    "PartDuration"?: number;
    /**
     * 是否忽略转码流，取值：
     * - **true**（默认值）：忽略。
     * - **false**：不忽略。
     * @example `true`
     */
    "IgnoreTranscode"?: boolean;
}
