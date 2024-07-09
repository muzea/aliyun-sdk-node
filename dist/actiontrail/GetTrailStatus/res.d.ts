export interface GetTrailStatusResponse {
    /**
     * 请求ID。
     * @example `8067369B-B923-4D26-85BC-61BF33922505`
     */
    RequestId: string;
    /**
     * 最近一次开启跟踪的时间。
     * @example `2021-02-24T09:19:44Z`
     */
    StartLoggingTime: string;
    /**
     * 最近一次行为跟踪异常的日志信息。
     * @example `write sls failed, exception: the parent of sub user must be project owner, itemscount: 1`
     */
    LatestDeliveryError: string;
    /**
     * 最近一次停止跟踪的时间。
     * @example `2021-02-25T09:19:44Z`
     */
    StopLoggingTime: string;
    /**
     * 是否开启日志记录，取值：
     * - true：开启。
     * - false：关闭。
     * @example `true`
     */
    IsLogging: boolean;
    /**
     * 最近一次成功记录行为的时间。
     * @example `2021-02-26T09:19:44Z`
     */
    LatestDeliveryTime: string;
    /**
     * 最近一次投递日志服务的错误信息。
     * @example `write sls failed, exception: the parent of sub user must be project owner, itemscount: 1`
     */
    LatestDeliveryLogServiceError: string;
    /**
     * 最近一次成功投递日志服务的时间。
     * @example `2021-02-26T09:19:44Z`
     */
    LatestDeliveryLogServiceTime: string;
    /**
     * OSS存储空间是否可用，取值：
     * - true：可用。
     * - false：不可用。
     * @example `true`
     */
    OssBucketStatus: boolean;
    /**
     * SLS Logstore是否可用，取值：
     * - true：可用。
     * - false：不可用。
     * @example `true`
     */
    SlsLogStoreStatus: boolean;
}
