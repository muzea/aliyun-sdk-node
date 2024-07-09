export interface RecordPostBackResponse {
    /**
     * 请求id
     * @example `B8E5CC4C-7563-19BD-B02F-DFFFD4E51D4A`
     */
    RequestId: string;
    /**
     * 访问后返回状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 后端动态错误码
     * @example `PARAMETER.ILLEGAL`
     */
    DynamicCode: string;
    /**
     * 后端动态错误码名称
     * @example `参数错误`
     */
    DynamicMessage: string;
    /**
     * 错误信息
     * @example `参数错误`
     */
    ErrorMsg: string;
    /**
     * 错误code
     * @example `PARAMETER.ILLEGAL`
     */
    ErrorCode: string;
    /**
     * 请求成功与否标识。
     * @example `True`
     */
    Success: boolean;
    /**
     * 是否成功
     * @example `True`
     */
    Module: boolean;
    /**
     * 是否允许重试
     * @example `false`
     */
    AllowRetry: boolean;
    /**
     * 参数错误
     */
    ErrorArgs: any[];
    /**
     * 应用名称
     * @example `esp-core-aliyun-com`
     */
    AppName: string;
}
