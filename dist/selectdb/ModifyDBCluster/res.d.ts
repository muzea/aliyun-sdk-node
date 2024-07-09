export interface ModifyDBClusterResponse {
    /**
     * 请求ID。
     * @example `0BF61F90-ACED-55DF-A6FE-56714B2BFCF6`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    DBInstanceId: string;
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
         * 集群ID。
         * @example `selectdb-cn-7213cjv****`
         */
        DBClusterId: string;
        /**
         * 订单ID。
         * @example `219396937240838`
         */
        OrderId: number;
    };
}
