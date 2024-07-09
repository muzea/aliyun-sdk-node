export interface TransferPayTypeResponse {
    /**
     * 预付费实例到期时间，格式为Unix时间戳。
     * > - 如修改后的实例为后付费实例，则该值为空值。
     * - Unix时间戳转换工具可用搜索引擎获取。
     * @example `1614916318`
     */
    EndTime: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `601B6F25-21E7-4484-99D5-3EF2625C****`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `o4nh3g7jg56****`
     */
    DtsJobId: string;
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
     * 修改后的付费方式，返回值：
     * - **PrePaid**：预付费。
     * - **PostPaid**：后付费。
     * @example `PostPaid`
     */
    ChargeType: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 错误码，本参数即将下线。
     * @example `200`
     */
    Code: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `DtsJobId`
     */
    DynamicMessage: string;
    /**
     * 实例ID。
     * @example `dtso4nh3g7jg56****`
     */
    InstanceId: string;
}
