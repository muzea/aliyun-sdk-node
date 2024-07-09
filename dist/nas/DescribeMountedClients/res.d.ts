export interface DescribeMountedClientsResponse {
    /**
     * 查询到的客户端IP的总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `A70BEE5D-76D3-49FB-B58F-1F398211****`
     */
    RequestId: string;
    /**
     * 每个分页包含的客户端IP个数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 客户端列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
    Clients: {
        /**
         * 客户端信息集合。
         */
        Client: {
            /**
             * 客户端IP地址。
             * @example `10.10.10.1`
             */
            ClientIP: string;
        }[];
    };
}
