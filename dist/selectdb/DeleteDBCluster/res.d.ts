export interface DeleteDBClusterResponse {
    /**
     * 请求ID。
     * @example `F203FA74-3041-589F-BE66-E570793A0C91`
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
         * @example `220088764060782`
         */
        OrderId: string;
    };
}
