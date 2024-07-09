export interface CreateDBInstanceResponse {
    /**
     * 请求ID。
     * @example `4773E4EC-025D-509F-AEA9-D53123FDFB0F`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 实例ID。
         * @example `selectdb-cn-7213cjv****`
         */
        DBInstanceId: string;
        /**
         * 订单ID。
         * @example `21137950671****`
         */
        OrderId: number;
    };
}
