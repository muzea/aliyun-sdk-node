export interface TransferIntentionOwnerResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `717711FB-F887-597B-8121-B77437E89B97`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 请求结果
     * @example `True`
     */
    Success: boolean;
    /**
     * 是否成功
     * @example `True`
     */
    Data: boolean;
}
