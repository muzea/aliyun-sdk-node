export interface DescribeDtsServiceLogResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `F87DF250-952C-47FE-8A02-69414FAA****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 每页记录的日志信息的数量。
     * @example `20`
     */
    PageRecordCount: number;
    /**
     * 符合条件的日志信息的总数。
     * @example `35`
     */
    TotalRecordCount: number;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * @example `DtsJobId`
     */
    DynamicMessage: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 动态错误码，本参数即将下线。
     * @example `403`
     */
    DynamicCode: string;
    /**
     * 任务日志信息详情。
     */
    ServiceLogContexts: {
        /**
         * 具体的日志信息。
         * @example `Statistics: generator = 369173; collector = 470109; replicator = 2470; ping = 2/2/2; execute = 29/29/29; rt = 29/29/29; state = IDLE; queries = -1; exceptions = {connects = 0, replicates = 0}; infos = {}`
         */
        Context: string;
        /**
         * 日志采集时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-05-13T09:13:39.443+00:00`
         */
        Time: string;
        /**
         * 日志信息的状态。
         * @example `NORMAL`
         */
        State: string;
    }[];
}
