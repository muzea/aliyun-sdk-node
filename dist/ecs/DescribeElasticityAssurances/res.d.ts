export interface DescribeElasticityAssurancesResponse {
    /**
     * 弹性保障服务下一个查询起始标志。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 符合查询条件的记录条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 弹性保障服务每页显示行数。
     * @example `10`
     */
    MaxResults: number;
    ElasticityAssuranceSet: {
        /**
         * 弹性保障服务详细信息组成的集合。
         */
        ElasticityAssuranceItem: {
            /**
             * 弹性保障服务的状态。可能值：
             * - Preparing：准备中。
             * - Prepared：待生效。
             * - Active：生效中。
             * - Released：已释放。
             * @example `Active`
             */
            Status: string;
            /**
             * 弹性保障服务的匹配模式。可能值：
             * - Open：开放模式的弹性保障服务。
             * - Target：指定模式的弹性保障服务。
             * @example `Target`
             */
            PrivatePoolOptionsMatchCriteria: string;
            /**
             * 弹性保障服务ID。
             * @example `eap-bp1ir35kqtn8ywci****`
             */
            PrivatePoolOptionsId: string;
            /**
             * > 该参数暂未开放使用。
             * @example `0`
             */
            UsedAssuranceTimes: number;
            /**
             * > 该参数暂未开放使用。
             * @example `null`
             */
            LatestStartTime: string;
            /**
             * 弹性保障服务名称。
             * @example `eapTestName`
             */
            PrivatePoolOptionsName: string;
            /**
             * 弹性保障服务所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 弹性保障服务失效时间。
             * @example `2021-12-03T16:00Z`
             */
            EndTime: string;
            /**
             * 弹性保障服务生效时间。
             * @example `2020-12-03T05:25Z`
             */
            StartTime: string;
            /**
             * 弹性保障服务描述。
             * @example `This is description.`
             */
            Description: string;
            /**
             * 资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 弹性保障服务的总次数。
             * @example `Unlimited`
             */
            TotalAssuranceTimes: string;
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
                     * 可用区ID。
                     * @example `cn-hangzhou-h`
                     */
                    zoneId: string;
                    /**
                     * 实例规格。
                     * @example `ecs.c6.large`
                     */
                    InstanceType: string;
                }[];
            };
            Tags: {
                /**
                 * 弹性保障服务绑定的标签键值对信息。
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
             * 实例的计费方式。可能值：PostPaid，目前仅支持按量付费。
             * @example `PostPaid`
             */
            InstanceChargeType: string;
            /**
             * 弹性保障生效方式。可能值：
             * - Now：立即生效。
             * - Later：指定时间生效。
             * @example `Now`
             */
            StartTimeType: string;
        }[];
    };
}
