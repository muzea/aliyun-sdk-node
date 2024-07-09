export interface QueryMsConfigClientsResponse {
    /**
     * 分页参数，第几页
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
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
     * 分页参数，分页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 客户端总数量
     * @example `100`
     */
    TotalCount: number;
    /**
     * 客户端信息
     */
    Clients: {
        /**
         * 推送的值
         * @example `switch`
         */
        PushData: string;
        /**
         * 客户端 IP
         * @example `127.0.0.1`
         */
        Ip: string;
        /**
         * 客户端内存里的值
         * @example `switch`
         */
        Data: string;
        /**
         * 所属的 cell
         * @example `DEFAULT`
         */
        Cell: string;
    }[];
}
