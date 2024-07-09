export interface DescribeAutoProvisioningGroupInstancesResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B48A12CD-1295-4A38-A8F0-0E92C937****`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的弹性供应组内实例的个数。
     * @example `2`
     */
    TotalCount: number;
    Instances: {
        /**
         * 弹性供应组下所有实例的信息。
         */
        Instance: {
            /**
             * 实例状态。
             * @example `Running`
             */
            Status: string;
            /**
             * 实例创建时间。
             * @example `2017-12-10T04:04Z`
             */
            CreationTime: string;
            /**
             * 是否为抢占式实例。
             * @example `true`
             */
            IsSpot: boolean;
            /**
             * 实例的vCPU核数。
             * @example `2`
             */
            CPU: number;
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
            /**
             * 实例的网络类型，取值范围：
             * - vpc：专有网络
             * - classic：经典网络
             * @example `vpc`
             */
            NetworkType: string;
            /**
             * 实例规格。
             * @example `ecs.g5.large`
             */
            InstanceType: string;
            /**
             * 实例所属地域的ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 是否为I/O优化型实例。
             * @example `true`
             */
            IoOptimized: boolean;
            /**
             * 实例的操作系统类型，取值范围：
             * - windows：操作系统类型为Windows。
             * - linux：操作系统类型为Linux。
             * @example `linux`
             */
            OsType: string;
            /**
             * 实例所属可用区。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 内存大小，单位MiB。
             * @example `1024`
             */
            Memory: number;
        }[];
    };
}
