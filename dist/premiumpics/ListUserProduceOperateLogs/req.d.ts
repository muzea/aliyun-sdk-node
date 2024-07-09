export interface ListUserProduceOperateLogsRequest {
    /**
     * BizType
     * @example `esp.logo`
     */
    "BizType": string;
    /**
     * 业务ID
     * @example `P20220428100535000001`
     */
    "BizId": string;
    /**
     * 域名列表的页码。
     * @example `3`
     */
    "PageNum": number;
    /**
     * 分页大小
     * @example `10`
     */
    "PageSize": number;
}
