export interface CreateJobMonitorRuleResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `8C498360-7892-433C-847A-BA71A850****`
     */
    RequestId: string;
    /**
     * 迁移、同步或订阅任务ID。
     * @example `i03e3zty16i****`
     */
    DtsJobId: string;
    /**
     * 调用错误时返回的错误码。
     * @example `403`
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
}
