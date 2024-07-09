export interface TransferProduceOwnerResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `DD5639FF-1240-51DE-9BA8-2075670A1EAC`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `NoPermission`
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
    Data: boolean;
}
