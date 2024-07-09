export interface OperateProduceForPartnerResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `D170A4BA-4528-5E07-B8D5-6449C42EC23F`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 成功状态标识
     * @example `True`
     */
    Success: boolean;
}
