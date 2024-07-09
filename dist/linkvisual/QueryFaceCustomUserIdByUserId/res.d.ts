export interface QueryFaceCustomUserIdByUserIdResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 调用者系统中的用户Id
     * @example `TestCustomUserId`
     */
    Data: string;
    /**
     * 错误描述
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 请求Id
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
