export interface CreateResourceRequest {
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 实例机型，对应ECS机型。
         * >当ResourceType选择Dedicated时，该参数为必填。
         * @example `ecs.c6.8xlarge`
         */
        EcsInstanceType: string;
        /**
         * 系统盘大小，单位为GiB。取值范围为200-2000GiB，不配置默认为200GiB。
         * @example `200`
         */
        SystemDiskSize: number;
        /**
         * 实例数量。
         * > 当ResourceType选择Dedicated时，该参数为必填。
         * @example `5`
         */
        EcsInstanceCount: number;
        /**
         * 付费类型，取值如下：
         * - PrePaid：预付费。
         * - PostPaid：后付费。
         * > 当ResourceType选择Dedicated时，该参数为必填。
         * >
         * @example `PostPaid`
         */
        ChargeType: string;
        /**
         * 是否自动续费，取值如下：
         * - false（默认值）：表示不自动续费。
         * - true：表示自动续费。
         * @example `false`
         */
        AutoRenewal: boolean;
        /**
         * 实例所属可用区。
         * @example `cn-shanghai-f`
         */
        Zone: string;
        /**
         * 资源组类型，取值如下：
         * - Dedicated：专属资源组。
         * - SelfManaged：自运维资源组。
         * > 使用自运维资源组时，需要申请添加白名单。
         * @example `Dedicated`
         */
        ResourceType: string;
        /**
         * 自运维资源组配置选项。
         */
        SelfManagedResourceOptions: {
            /**
             * 自运维集群Id。
             * @example `cf0386f250f2545689ca7fdd1cd******`
             */
            ExternalClusterId: string;
            /**
             * 授予云服务PAI-EAS相关权限的RAM角色名称。
             * @example `clusterrole`
             */
            RoleName: string;
            /**
             * 节点的标签键值对集合。
             */
            NodeMatchLabels: any;
            /**
             * 节点污点的容忍度列表。
             */
            NodeTolerations: {
                /**
                 * 键名。
                 * @example `key1`
                 */
                key: string;
                /**
                 * 键值。
                 * @example `value1`
                 */
                value: string;
                /**
                 * 键名和键值的关系。
                 * @example `Equal`
                 */
                operator: string;
                /**
                 * 效果。
                 * @example `NoSchedule`
                 */
                effect: string;
            }[];
        };
    };
}
