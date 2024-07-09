export interface ListProduceAuthorizationRequest {
    /**
     * 业务id
     * @example `P20210709190452000001`
     */
    "BizId"?: string;
    /**
     * 业务类型
     * @example `esp.bookkeeping_ai`
     */
    "BizType"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize": number;
}
