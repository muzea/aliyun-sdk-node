export interface ListUserCollectionsRequest {
    /**
     * 业务类型
     * @example `esp.logo`
     */
    "BizType": string;
    /**
     * 页码
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 每页数量
     * @example `21`
     */
    "PageNum": number;
}
