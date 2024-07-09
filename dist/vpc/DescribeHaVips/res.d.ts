export interface DescribeHaVipsResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `33E480C5-B46F-4CA5-B6FD-D77C746E86AB`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    HaVips: {
        /**
         * HaVip的详细信息。
         */
        HaVip: {
            /**
             * HaVip实例所属的VPC ID。
             * @example `vpc-bp1kcm36tevkpms97****`
             */
            VpcId: string;
            /**
             * HaVip实例的状态。取值：
             * - **Creating**：创建中。
             * - **Available**：可用。
             * - **Deleting**：删除中。
             * @example `Available`
             */
            Status: string;
            /**
             * HaVip实例ID。
             * @example `havip-bp149uyvut73dpld****`
             */
            HaVipId: string;
            /**
             * 与HaVip绑定的实例类型。取值：
             * - **EcsInstance**：云服务器ECS实例。
             * - **NetworkInterface**：弹性网卡实例。
             * @example `EcsInstance`
             */
            AssociatedInstanceType: string;
            /**
             * HaVip的创建时间。
             * @example `2021-07-03T14:25:26Z`
             */
            CreateTime: string;
            /**
             * 该参数为无效参数，返回值为空。
             * @example `none`
             */
            ChargeType: string;
            /**
             * HaVip实例所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * HaVip实例所属的交换机ID。
             * @example `vsw-bp1pkt1fba8e824ez****`
             */
            VSwitchId: string;
            /**
             * HaVip的私网IP地址。
             * @example `192.168.24.5`
             */
            IpAddress: string;
            /**
             * HaVip实例的描述。
             * @example `My HaVip`
             */
            Description: string;
            /**
             * 与HaVip绑定的主实例ID。
             * @example `i-bp145q7glnuzdvz****`
             */
            MasterInstanceId: string;
            /**
             * HaVip实例的名称。
             * @example `test`
             */
            Name: string;
            AssociatedEipAddresses: {
                /**
                 * 与HaVip绑定的EIP列表。
                 */
                associatedEipAddresse: string[];
            };
            AssociatedInstances: {
                /**
                 * 与HaVip绑定的实例信息。
                 */
                associatedInstance: string[];
            };
            /**
             * 高可用虚拟IP所属的资源组ID。
             * @example `rg-bp67acfmxazb4ph****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `FinanceDept`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `FinanceJoshua`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
