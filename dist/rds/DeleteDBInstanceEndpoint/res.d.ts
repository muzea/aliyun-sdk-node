export interface DeleteDBInstanceEndpointResponse {
    /**
     * 返回数据列表。
     */
    Data: {
        /**
         * 实例ID。
         * @example `rm-****`
         */
        DBInstanceName: string;
        /**
         * 实例的Endpoint ID。
         * @example `ep-****`
         */
        DBInstanceEndpointId: string;
    };
    /**
     * 请求ID。
     * @example `224DB9F7-3100-4899-AB9C-C938BCCB43E7`
     */
    RequestId: string;
}
