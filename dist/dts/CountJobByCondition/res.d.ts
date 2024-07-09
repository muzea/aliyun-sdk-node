export interface CountJobByConditionResponse {
    /**
     * Id of the request
     * @example `FC3BAAF2-74E3-4471-8EB5-96202D6A****`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
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
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `present environment is not support,so skip.`
     */
    DynamicMessage: string;
    /**
     * 服务内部错误码，该参数即将下线。
     * @example `403`
     */
    DynamicCode: string;
    /**
     * 阿里云主账号下所有符合条件的数据同步实例数量。
     * @example `100`
     */
    TotalRecordCount: number;
}
