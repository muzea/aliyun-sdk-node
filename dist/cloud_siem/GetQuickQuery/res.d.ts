export interface GetQuickQueryResponse {
    /**
     * 对应的查询分析语句。
     * @example `status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5`
     */
    Data: string;
    /**
     * 请求消息ID。
     * @example `27D27DCB-D76B-5064-8B3B-0900DEF7****`
     */
    RequestId: string;
}
