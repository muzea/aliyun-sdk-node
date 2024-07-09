export interface DescribeCapacityReservationsResponse {
    /**
     * 容量预定服务下一个查询起始标志。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 符合查询条件的记录条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 容量预定服务每页显示行数。
     * @example `10`
     */
    MaxResults: number;
    CapacityReservationSet: {
        /**
         * 容量预定服务详细信息组成的集合。
         */
        CapacityReservationItem: {
            /**
             * 容量预定服务的状态。可能值：
             * - Pending：初始化。
             * - Preparing：准备中。
             * - Prepared：待生效。
             * - Active：生效中。
             * - Released：已释放，包括手动释放与到期自动释放。
             * @example `Active`
             */
            Status: string;
            /**
             * > 该参数正在邀测中，暂未开放使用。
             * @example `null`
             */
            TimeSlot: string;
            /**
             * 容量预定服务生效后生成的私有资源池的类型。可能值：
             * - Open：开放模式。
             * - Target：专用模式。
             * @example `Open`
             */
            PrivatePoolOptionsMatchCriteria: string;
            /**
             * 容量预定服务ID。
             * @example `crp-bp1gubrkqutenqdd****`
             */
            PrivatePoolOptionsId: string;
            /**
             * 容量预定服务名称。
             * @example `crpTestName`
             */
            PrivatePoolOptionsName: string;
            /**
             * 容量预定服务所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 容量预定服务中实例的付费类型。可能值：
             * - PostPaid：按量付费。
             * - PrePaid：包年包月。
             * @example `PostPaid`
             */
            InstanceChargeType: string;
            /**
             * 容量预定服务的失效时间。
             * @example `2021-02-19T03:02Z`
             */
            EndTime: string;
            /**
             * 容量预定服务生效时间。
             * @example `2021-02-19T02:01Z`
             */
            StartTime: string;
            /**
             * 容量预定服务描述。
             * @example `This is description.`
             */
            Description: string;
            /**
             * 容量预定服务的失效方式。可能值：
             * - Limited：指定时间释放。
             * - Unlimited：手动释放。不限制时间。
             * @example `Unlimited`
             */
            EndTimeType: string;
            /**
             * 容量预定服务所属的资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 匹配的实例的操作系统。可能值：
             * - windows。
             * - linux。
             * @example `linux`
             */
            Platform: string;
            AllocatedResources: {
                /**
                 * 资源分配详情。
                 */
                AllocatedResource: {
                    /**
                     * 已使用的实例的数量。
                     * @example `2`
                     */
                    UsedAmount: number;
                    /**
                     * 在一个实例规格内，需要预留的实例的总数量。
                     * @example `2`
                     */
                    TotalAmount: number;
                    /**
                     * 可用的实例数量。
                     * @example `2`
                     */
                    AvailableAmount: number;
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-h`
                     */
                    zoneId: string;
                    /**
                     * 实例规格。
                     * @example `ecs.c6.large`
                     */
                    InstanceType: string;
                    CapacityReservationUsages: {
                        /**
                         * 已使用的实例的数量详情列表。
                         */
                        CapacityReservationUsage: {
                            /**
                             * 阿里云账号ID。
                             * @example `105909559088****`
                             */
                            AccountId: string;
                            /**
                             * 阿里云服务名称。
                             * @example `maxcompute.aliyuncs.com`
                             */
                            ServiceName: string;
                            /**
                             * 该阿里云账号或服务已使用的实例的数量。
                             * @example `20`
                             */
                            UsedAmount: number;
                        }[];
                    };
                }[];
            };
            Tags: {
                /**
                 * 容量预定服务绑定的标签键值对信息。
                 */
                Tag: {
                    /**
                     * 标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
            /**
             * 容量预定生效方式。可能值：
             * - Now：立即生效。
             * - Later：指定时间生效。
             * @example `Now`
             */
            StartTimeType: string;
            /**
             * 容量预定搭配的节省计划券ID。
             * @example `spn-c29b5e18pJMT****`
             */
            SavingPlanId: string;
            /**
             * 容量预定搭配的预留实例券ID。
             * @example `ri-bpzhex2ulpzf53****`
             */
            ReservedInstanceId: string;
            /**
             * 容量预定资源包所有者ID。
             * @example `100************7
            `
             */
            CapacityReservationOwnerId: string;
        }[];
    };
}
