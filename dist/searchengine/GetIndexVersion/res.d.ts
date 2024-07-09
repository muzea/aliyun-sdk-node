export interface GetIndexVersionResponse {
    /**
     * id of request
     * @example `E7B7D598-B080-5C8E-AA35-D43EC0D5F886`
     */
    requestId: string;
    /**
     * 集群列表
     */
    result: {
        /**
         * 集群名称
         * @example `hz_pre_vpc_domain_1`
         */
        cluster: string;
        /**
         * 索引版本列表
         */
        indexVersions: {
            /**
             * 索引表名称
             * @example `test_api`
             */
            indexName: string;
            /**
             * 索引版本
             */
            versions: number[];
            /**
             * 离线部署id
             * @example `2648`
             */
            buildDeployId: string;
            /**
             * 当前在线版本号
             * @example `1`
             */
            currentVersion: number;
        }[];
    };
}
