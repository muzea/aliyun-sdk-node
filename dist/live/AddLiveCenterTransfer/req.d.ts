export interface AddLiveCenterTransferRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流应用名称。输入的AppName必须与需要转推的直播流AppName保持一致，方可生效。
     * @example `testapp`
     */
    "AppName": string;
    /**
     * 直播流名称。
     * @example `teststream`
     */
    "StreamName": string;
    /**
     * 转推的第三方直播地址，最多支持添加1个地址。
     * >目标地址协议必须和转推的直播流协议一致，目前仅支持RTMP和SRT协议的转推地址。
     * @example `rtmp://push.example2.aliyunlive.com/testapp1/teststream2`
     */
    "DstUrl": string;
    /**
     * 转推有效时间。取值：
     * - **always**：永久生效。
     * - **time**：指定时间内有效。
     * >取值为**time**时，**StartTime**和**EndTime**必填。
     * @example `always`
     */
    "TransferArgs": string;
    /**
     * 转推开始时间。
     * 日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-21T10:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 转推结束时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * >结束时间需大于起始时间。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime"?: string;
}
