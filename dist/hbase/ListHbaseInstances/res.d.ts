export interface ListHBaseInstancesResponse {
    /**
     * 请求ID。
     * @example `89F81C30-320B-4550-91DB-C37C81D2358F`
     */
    RequestId: string;
    Instances: {
        /**
         * 实例集合。
         */
        Instance: {
            /**
             * 固定返回值为false。
             * @example `false`
             */
            IsDefault: boolean;
            /**
             * 相同专有网络的云数据库HBase实例ID。
             * @example `hb-t4naqsay5gn****`
             */
            InstanceId: string;
            /**
             * 实例名称。
             * @example `name_test`
             */
            InstanceName: string;
        }[];
    };
}
