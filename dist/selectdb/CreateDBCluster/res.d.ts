export interface CreateDBClusterResponse {
    /**
     * 请求ID。
     * @example `F8900A96-67F7-5274-A41B-7722E1ECF8C9`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `selectdb-cn-7213cjv****`
         */
        DBInstanceId: string;
        /**
         * 订单ID。
         * @example `219543646290345`
         */
        OrderId: number;
        ClusterId: string;
    };
}
