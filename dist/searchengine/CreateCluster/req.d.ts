export interface CreateClusterRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 请求体参数
     * @example `{}`
     */
    "body"?: {
        /**
         * 集群名称
         * @example `hz_pre_vpc_domain_1`
         */
        name: string;
        /**
         * 集群描述。
         * @example `自定义描述`
         */
        description: string;
        /**
         * 查询节点详情信息
         */
        queryNode: {
            /**
             * 	查询节点数量
             * @example `2`
             */
            number: number;
        };
        /**
         * 数据节点详情信息
         */
        dataNode: {
            /**
             * 数据节点的数量
             * @example `2`
             */
            number: number;
            /**
             * 分片数
             * @example `2`
             */
            partition: string;
        };
        /**
         * 是否自动挂载
         * @example `true`
         */
        autoLoad: boolean;
    };
}
