export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `484256DA-D816-44D2-9D86-B6EE4D5BA78C`
     */
    RequestId: string;
    TagResources: {
        /**
         * 由资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。
         */
        TagResource: {
            /**
             * 标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 资源类型。可能值：
             * - instance：ECS实例。
             * - disk：磁盘。
             * - snapshot：快照。
             * - image：镜像。
             * - securitygroup：安全组。
             * - volume：存储卷。
             * - eni：弹性网卡。
             * - ddh：专有宿主机。
             * - ddhcluster：专有宿主机集群。
             * - keypair：SSH密钥对。
             * - launchtemplate：启动模板。
             * - reservedinstance：预留实例券。
             * - snapshotpolicy：自动快照策略。
             * - elasticityassurance：弹性保障。
             * - capacityreservation：容量预定。
             * - command：云助手命令。
             * - invocation：云助手命令执行结果。
             * - activation：云助手托管实例激活码。
             * - managedinstance：云助手托管实例。
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 资源ID。
             * @example `i-bp1j6qtvdm8w0z1o****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
}
