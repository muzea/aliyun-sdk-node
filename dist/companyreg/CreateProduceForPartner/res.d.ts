export interface CreateProduceForPartnerResponse {
    /**
     * 交付单ID
     * @example `P20210208152920000001`
     */
    BizId: string;
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `2174AA97-56FB-50FA-B243-0460B9E4CE0C`
     */
    RequestId: string;
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
