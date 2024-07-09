export interface QueryPartnerProduceListRequest {
    /**
     * 业务id
     * @example `P20211216204717000001`
     */
    "BizId"?: string;
    /**
     * 业务类型
     * @example `esp.cdn`
     */
    "BizType"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示条数
     * @example `20`
     */
    "PageSize"?: number;
}
