export interface DescribeDeploymentSetsResponse {
    /**
     * 设置的每页行数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 部署集列表的页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 查询到的部署集总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 部署集所处的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    DeploymentSets: {
        /**
         * 由DeploymentSet组成的数组格式，返回部署集详细信息。
         */
        DeploymentSet: {
            /**
             * 部署集的创建时间。
             * @example `2021-12-07T06:01:46Z`
             */
            CreationTime: string;
            /**
             * 部署策略。
             * @example `LooseDispersion`
             */
            Strategy: string;
            /**
             * 部署集ID。
             * @example `ds-bp67acfmxazb4ph****`
             */
            DeploymentSetId: string;
            /**
             * 部署策略。该返回值对应请求参数`Strategy`的值。
             * @example `Availability`
             */
            DeploymentStrategy: string;
            /**
             * 部署集的描述信息。
             * @example `testDeploymentSetDescription`
             */
            DeploymentSetDescription: string;
            /**
             * 部署域。
             * @example `default`
             */
            Domain: string;
            /**
             * 部署集中的分组数量。
             * > 当部署集策略为部署集组高可用策略（AvailabilityGroup）时，该返回值生效。
             * @example `3`
             */
            GroupCount: number;
            /**
             * 部署粒度。
             * @example `host`
             */
            Granularity: string;
            /**
             * 部署集名称。
             * @example `testDeploymentSetName`
             */
            DeploymentSetName: string;
            /**
             * 部署集内的实例数量。
             * @example `3`
             */
            InstanceAmount: number;
            InstanceIds: {
                /**
                 * 部署集内的实例ID列表。
                 */
                InstanceId: string[];
            };
            Capacities: {
                /**
                 * 由Capacity组成的数组格式。仅当部署集内有存量ECS实例时提供返回结果，返回结果包含部署集可用区维度的容量信息。
                 */
                Capacity: {
                    /**
                     * 可用区ID。只返回部署集内存量ECS实例所属的可用区ID。
                     * @example `cn-hangzhou-i`
                     */
                    ZoneId: string;
                    /**
                     * 部署集内属于该可用区的ECS实例数量。
                     * @example `2`
                     */
                    UsedAmount: number;
                    /**
                     * 该可用区内，还可以加入当前部署集的ECS实例数量。
                     * @example `18`
                     */
                    AvailableAmount: number;
                }[];
            };
        }[];
    };
}
