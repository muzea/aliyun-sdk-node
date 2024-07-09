export interface CreateResourceInstancesRequest {
    /**
     * 资源组所在的集群ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组ID，如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-asdasdasd`
     */
    "ResourceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 实例机型，对应ECS机型。
         * @example `ecs.s6-c1m2.xlarge`
         */
        EcsInstanceType: string;
        /**
         * 系统盘的磁盘大小，单位为GiB。取值范围为200-2000 GiB，不配置默认为200GiB。
         * @example `200`
         */
        SystemDiskSize: number;
        /**
         * 新创建的实例个数，取值范围1~100。
         * @example `5`
         */
        EcsInstanceCount: number;
        /**
         * 付费类型，取值如下：
         * - PrePaid：预付费。
         * - PostPaid：后付费。
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 自定义用户信息，目前暂未使用。
         * @example `x112223333`
         */
        UserData: string;
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
    };
}
