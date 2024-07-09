export interface TransferInstanceClassResponse {
    /**
     * 实例到期时间。
     * > ChargeType为**PREPAY**，才会返回此参数。
     * @example `2021-08-04T16:00:00.000+00:00`
     */
    EndTime: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `716DB03E-2D0B-4DC3-BC4C-F7A9EE21****`
     */
    RequestId: string;
    /**
     * 迁移或同步任务ID。
     * @example `r4yr723m199****`
     */
    DtsJobId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。返回值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 付费类型，返回值：
     * - **POSTPAY**：按量付费（后付费）。
     * - **PREPAY**：包年包月（预付费）。
     * @example `POSTPAY`
     */
    ChargeType: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 错误码。
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
     * @example `dtsr4yr723m199****`
     */
    InstanceId: string;
}
