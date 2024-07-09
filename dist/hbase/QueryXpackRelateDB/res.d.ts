export interface QueryXpackRelateDBResponse {
    /**
     * 请求ID。
     * @example `288E9010-36DD-499C-B4DA-61E4362DA4CC`
     */
    RequestId: string;
    ClusterList: {
        /**
         * 可关联的数据库列表。
         */
        Cluster: {
            /**
             * 实例状态。
             * @example `ACTIVATION`
             */
            Status: string;
            /**
             * 实例版本。
             * @example `2.0`
             */
            DBVersion: string;
            /**
             * 实例是否已关联。
             * @example `false`
             */
            IsRelated: boolean;
            /**
             * 实例名称。
             * @example `hbase_test`
             */
            ClusterName: string;
            /**
             * 实例数据库类型。
             * @example `hbase`
             */
            DBType: string;
            /**
             * 锁定模式。
             * @example `..`
             */
            LockMode: string;
            /**
             * 实例ID。
             * @example `hb-bp16o0pd52e3y582s`
             */
            ClusterId: string;
        }[];
    };
}
