export interface GetClusterResponse {
    /**
     * 请求ID
     * @example `E7B7D598-B080-5C8E-AA35-D43EC0D5F886`
     */
    requestId: string;
    /**
     * 集群列表
     */
    result: {
        /**
         * 集群名称
         * @example `bj_vpc_domain_2`
         */
        name: string;
        /**
         * 集群描述
         * @example `自定义描述`
         */
        description: string;
        /**
         * 高级配置生效版本
         * @example `ha-cn-pl32rf0****_offline_adv_v1`
         */
        currentAdvanceConfigVersion: string;
        /**
         * 高级配置最新版本
         * @example `ha-cn-pl32rf0****_offline_adv_v1`
         */
        latestAdvanceConfigVersion: string;
        /**
         * 在线配置生效版本
         * @example `ha-cn-pl32rf0****_online_adv_v1`
         */
        currentOnlineConfigVersion: string;
        /**
         * 在线配置最新版本
         * @example `ha-cn-pl32rf0****_online_adv_v1`
         */
        latestOnlineConfigVersion: string;
        /**
         * 集群更新时间
         * @example `2021-08-09 00:01:02`
         */
        configUpdateTime: string;
        /**
         * 集群的创建状态，有两个取值 NEW(创建中) or PUBLISH(创建完成)
         * @example `NEW`
         */
        status: string;
        /**
         * 查询节点规格
         */
        queryNode: {
            /**
             * 节点名称
             * @example `ha-cn-pl32rf0****_qrs`
             */
            name: string;
            /**
             * 节点数量。
             * @example `1`
             */
            number: number;
            /**
             * 副本数量
             * @example `2`
             */
            partition: number;
        };
        /**
         * 数据节点规格
         */
        dataNode: {
            /**
             * 节点名称
             * @example `general`
             */
            name: string;
            /**
             * 副本数
             * @example `1`
             */
            number: number;
            /**
             * 分片数
             * @example `2`
             */
            partition: number;
        };
        /**
         * 创建时间
         * @example `2024-05-21 16:05:26`
         */
        createTime: string;
        /**
         * 配置信息
         */
        config: any;
    };
}
