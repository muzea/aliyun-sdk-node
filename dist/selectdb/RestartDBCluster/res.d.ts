export interface RestartDBClusterResponse {
    /**
     * 请求ID。
     * @example `BD0D0B17-C145-5B91-BFC2-6791927EE973`
     */
    RequestId: string;
    /**
     * 返回信息。
     */
    Data: {
        /**
         * 实例ID。
         * @example `selectdb-cn-7213cjv****`
         */
        DBInstanceId: string;
        /**
         * 集群ID。
         * @example `selectdb-cn-7213c8y****-be`
         */
        DBClusterId: string;
    };
}
