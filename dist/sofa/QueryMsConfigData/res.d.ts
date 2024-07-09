export interface QueryMsConfigDataResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 查询推送值结果，数组中每一项表示具体的单元，DEFAULT_ZONE 表示所有单元。
     */
    QueryResult: {
        /**
         * 推送值
         * @example `some push data`
         */
        Data: string;
        /**
         * 推送目标 cell
         * @example `cell1`
         */
        Cell: string;
    }[];
}
