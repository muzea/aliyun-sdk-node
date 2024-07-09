export interface ListMessageAppRequest {
    /**
     * 排列方式，取值：
     * - 0：时间递增顺序。
     * - 1：时间递减顺序。
     * @example `1`
     */
    "SortType"?: number;
    /**
     * 页码，默认值：1。取值范围：1~100000。
     * @example `10`
     */
    "PageNum": number;
    /**
     * 单页显示应用的数量，默认值：20。取值范围：1~50。
     * @example `20`
     */
    "PageSize": number;
}
