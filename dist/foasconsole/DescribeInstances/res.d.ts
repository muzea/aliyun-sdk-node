export interface DescribeInstancesResponse {
    /**
     * 总实例数目
     * @example `15`
     */
    TotalCount: number;
    /**
     * 总页数
     * @example `2`
     */
    TotalPage: number;
    /**
     * 当前页码
     * @example `1`
     */
    PageIndex: number;
    /**
     * 分页属性，每页多少实例
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `C8DF2A5B-6FBA-5651-A3D4-960F36640E6B`
     */
    RequestId: string;
    /**
     * 是否成功，取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 实例组详情
     */
    Instances: {
        /**
         * 实例创建时间。
         * @example `1629879567394`
         */
        ResourceCreateTime: number;
        /**
         * 超期时间
         * @example `1637337600000`
         */
        ResourceExpiredTime: number;
        /**
         * 实例所属地区
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 实例所属的可用区ID。
         * @example `cn-beijing-g`
         */
        ZoneId: string;
        /**
         * 专有网络id
         * @example `vpc-2ze9*******nxfmfcdi`
         */
        VpcId: string;
        /**
         * 虚拟交换机ID组。
         */
        VSwitchIds: string[];
        /**
         * 实例ID。
         * @example `f-cn-zvp2q0zik06`
         */
        InstanceId: string;
        /**
         * 付费类型，取值如下：
         * - POST：按量付费
         * - PRE：包年包月
         * @example `PRE`
         */
        ChargeType: string;
        /**
         * 工作空间名称。
         * @example `vvp1`
         */
        InstanceName: string;
        /**
         * 实例所属用户ID。
         * @example `1838996687368452`
         */
        Uid: string;
        /**
         * 订单状态，取值如下：
         * - NOT_INIT：下单还未部署组件。
         * - NORMAL：正常状态。
         * - CEASE：过期状态。
         * - RELEASE：超期状态。
         * @example `NORMAL`
         */
        OrderState: string;
        /**
         * 资源ID。
         * @example `b3690a1655da47`
         */
        ResourceId: string;
        /**
         * 存储信息。
         */
        Storage: {
            /**
             * OSS存储信息。
             */
            Oss: {
                /**
                 * OSS的Bucket名称。
                 * @example `oss_flink`
                 */
                Bucket: string;
            };
        };
        /**
         * 资源规格信息
         */
        ResourceSpec: {
            /**
             * CPU数量。
             * @example `10`
             */
            Cpu: number;
            /**
             * 设置的内存数量。
             * @example `40`
             */
            MemoryGB: number;
        };
        /**
         * 集群状态，取值如下：
         * -  CREATING：创建中。
         * -  RUNNING：运行中。
         * -  DISABLE：无效。
         * -  DELETING：删除中。
         * -  DELETED：已删除。
         * @example `RUNNING`
         */
        ClusterStatus: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键
             * @example `flink`
             */
            Key: string;
            /**
             * 标签值
             * @example `test`
             */
            Value: string;
        }[];
        AskClusterId: string;
        ResourceGroupId: string;
        HostAliases: {
            Ip: string;
            HostNames: string[];
        }[];
        ArchitectureType: string;
        Ha: boolean;
        HaZoneId: string;
        HaVSwitchIds: string[];
        HaResourceSpec: {
            Cpu: number;
            MemoryGB: number;
        };
        MonitorType: string;
    }[];
}
