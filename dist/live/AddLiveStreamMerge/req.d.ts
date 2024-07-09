export interface AddLiveStreamMergeRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 合流输出App名称。
     * @example `app`
     */
    "AppName": string;
    /**
     * 合流输出Stream名称。
     * @example `StreamName`
     */
    "StreamName": string;
    /**
     * 合流输入主流应用名称，输入的AppName必须与主流推流地址中的AppName保持一致，方可生效。
     * @example `app1`
     */
    "InAppName1": string;
    /**
     * 合流输入主流直播流名称，输入的AppName必须与主流推流地址中的AppName保持一致，方可生效。
     * @example `InStream1`
     */
    "InStreamName1": string;
    /**
     * 合流输入备流应用名称，输入的AppName必须与备流推流地址中的AppName保持一致，方可生效。
     * @example `app2`
     */
    "InAppName2": string;
    /**
     * 合流输入备流直播流名称，输入的AppName必须与备流推流地址中的AppName保持一致，方可生效。
     * @example `stream2`
     */
    "InStreamName2": string;
    /**
     * 合流开始时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-05-29T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 合流结束时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * >开始时间与结束时间最大相差7天。
     * @example `2020-05-29T01:00:00Z`
     */
    "EndTime": string;
    /**
     * 直播流协议，取值：
     * - **rtmp**（默认值）
     * - **rtc**
     * @example `rtmp`
     */
    "Protocol"?: string;
}
