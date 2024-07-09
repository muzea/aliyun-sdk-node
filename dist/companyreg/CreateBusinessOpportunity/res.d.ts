export interface CreateBusinessOpportunityResponse {
    /**
     * 请求id
     * @example `6A603AA0-73BA-52B3-AC7D-0F846ECF7A9D`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMessage: string;
    /**
     * 错误码
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
