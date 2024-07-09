export interface GetAccountingReportResponse {
    /**
     * 查询的集群总核数。
     * @example `261300`
     */
    TotalCoreTime: number;
    /**
     * JSON序列化的列表，包含Data中每条记录的列名称。
     * @example `[\"user\",\"coreTime\",\"usedMem\"]`
     */
    Metrics: string;
    /**
     * 请求ID。
     * @example `B1DCB399-9333-4B38-A35A-0BDFABC71881`
     */
    RequestId: string;
    /**
     * 显示本页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 显示当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 显示列表条目总数。
     * @example `10`
     */
    TotalCount: number;
    Data: {
        /**
         * JSON序列化的列表，列表包含多条记录。
         */
        Data: string[];
    };
}
