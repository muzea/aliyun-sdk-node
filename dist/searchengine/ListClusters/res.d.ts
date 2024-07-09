export interface ListClustersResponse {
    /**
     * id of request
     * @example `F43E8AB4-419C-5F4C-90D6-615590DFAA3C`
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
         * @example `ha-cn-pl32rf0****_offline_adv_v1`
         */
        currentOnlineConfigVersion: string;
        /**
         * 在线配置最新版本
         * @example `ha-cn-pl32rf0****_offline_adv_v1`
         */
        latestOnlineConfigVersion: string;
        /**
         * 查询配置生效版本
         * @example `ha-cn-pl32rf0****_offline_adv_v1`
         */
        currentOnlineQueryConfigVersion: string;
        /**
         * 查询配置最新版本
         * @example `ha-cn-pl32rf0****_offline_adv_v1`
         */
        latestOnlineQueryConfigVersion: string;
        /**
         * 词典配置生效版本
         * @example `ha-cn-pl32rf0****_offline_adv_v1`
         */
        currentOfflineDictConfigVersion: string;
        /**
         * 词典配置最新版本
         * @example `ha-cn-pl32rf0****_offline_adv_v1`
         */
        latestOfflineDictConfigVersion: string;
        /**
         * 配置更新时间
         * @example `2024-05-21 16:05:26`
         */
        configUpdateTime: string;
        /**
         * 集群状态。取值：-running：运行中-starting：启动中-stopping：停止中-stopped：已停止
         * @example `running`
         */
        status: string;
        /**
         * 集群搜索节点。
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
             * @example `1`
             */
            partition: number;
        };
        /**
         * 集群中的节点信息
         */
        dataNode: {
            /**
             * 节点名称
             * @example `general`
             */
            name: string;
            /**
             * 节点数
             * @example `1`
             */
            number: number;
            /**
             * 节点分区id。
             * @example `1`
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
    }[];
}
