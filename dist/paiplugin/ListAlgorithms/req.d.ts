export interface ListAlgorithmsRequest {
    /**
     * 算法ID过滤。
     * @example `sms_recall`
     */
    "Id"?: string;
    /**
     * 算法名称过滤。
     * @example `短信召回`
     */
    "Name"?: string;
    /**
     * 分页数，从1开始，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
}
