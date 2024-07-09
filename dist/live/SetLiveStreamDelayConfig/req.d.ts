export interface SetLiveStreamDelayConfigRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * HLS播放延迟时间。单位：秒。
     * >该参数为空时，按照HlsLevel延迟级别对应的时间设置。
     * @example `4`
     */
    "HlsDelay"?: number;
    /**
     * HLS延迟级别。配置了HlsDelay情况下忽略该参数。
     * 取值如下：
     * - **short**（默认）：表示延迟时间为3秒。
     * - **medium**：表示延迟时间为6秒。
     * - **long**：表示延迟时间为15秒。
     * >如果HlsDelay和HlsLevel参数都为空，则按照默认值**short**进行配置。
     * @example `short`
     */
    "HlsLevel"?: string;
    /**
     * FLV播放延迟时间。单位：秒。
     * >该参数为空时，按照FlvLevel延迟级别对应的时间设置。
     * @example `8`
     */
    "FlvDelay"?: number;
    /**
     * FLV延迟级别。配置了FlvDelay情况下忽略该参数。
     * 取值如下：
     * - **short**（默认）：表示延迟时间为4秒。
     * - **medium**：表示延迟时间为8秒。
     * - **long**：表示延迟时间为16秒。
     * >如果FlvDelay和FlvLevel参数都为空，则按照默认值**short**进行配置。
     * @example `medium`
     */
    "FlvLevel"?: string;
    /**
     * RTMP播放延迟时间。单位：秒。
     * >该参数为空时，按照RtmpLevel延迟级别对应的时间设置。
     * @example `4`
     */
    "RtmpDelay"?: number;
    /**
     * RTMP延迟级别。配置了RtmpDelay情况下忽略该参数。
     * 取值如下：
     * - **short**（默认）：表示延迟时间为4秒。
     * - **medium**：表示延迟时间为8秒。
     * - **long**：表示延迟时间为16秒。
     * >如果RtmpDelay和RtmpLevel参数都为空，则按照默认值**short**进行配置。
     * @example `short`
     */
    "RtmpLevel"?: string;
}
