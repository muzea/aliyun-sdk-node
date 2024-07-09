export interface RenewInstanceResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 续费实例到期时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ssZZZ</i>（UTC时间）。
     * > **ZZZ**表示完整时区偏移量（“+”或“-”后面跟有小时和分钟），例如：**+00:00**。
     * @example `2021-08-04T16:00:00.000+00:00`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `1112E255-0C38-4970-8159-1D54AD92****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 同步或订阅任务ID。
     * @example `qi0r643lc31****`
     */
    DtsJobId: string;
    /**
     * 请求是否成功，返回值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 付费类型为**PREPAY**，包年包月（预付费）。
     * @example `PREPAY`
     */
    ChargeType: string;
    /**
     * 错误码。
     * > 本参数即将下线。
     * @example `200`
     */
    Code: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的%**s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则表示所传入的请求参数**DtsJobId**不合法。
     * @example `DtsJobId`
     */
    DynamicMessage: string;
    /**
     * 实例ID。
     * @example `dtsqi0r643lc31****`
     */
    InstanceId: string;
}
