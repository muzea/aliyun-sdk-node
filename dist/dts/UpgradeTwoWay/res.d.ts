export interface UpgradeTwoWayResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `2D3B4615-923F-49AA-AF21-6D8E3967****`
     */
    RequestId: string;
    /**
     * 调用错误时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功，返回值：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**InstanceId**，则代表所传入的请求参数**InstanceId**不合法。
     * @example `InstanceId`
     */
    DynamicMessage: string;
    /**
     * 动态错误码，本参数即将下线。
     * @example `403`
     */
    DynamicCode: string;
}
