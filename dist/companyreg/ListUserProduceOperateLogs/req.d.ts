export interface ListUserProduceOperateLogsRequest {
    /**
     * 业务类型
     * @example `esp.wangwen`
     */
    "BizType": string;
    /**
     * 业务ID
     * @example `P20210928095324000002`
     */
    "BizId": string;
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
