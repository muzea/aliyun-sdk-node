export interface DescribeDemandsResponse {
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 报备单列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 查询到的报备单数量。
     * @example `6`
     */
    TotalCount: number;
    /**
     * 查询的地域。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    Demands: {
        /**
         * 指定地域符合过滤条件的报备单集合。
         */
        Demand: {
            /**
             * 资源报备被拒绝的反馈建议。
             * @example `test-for-comment`
             */
            Comment: string;
            /**
             * 报备描述。
             * @example `test-DemandDescription`
             */
            DemandDescription: string;
            /**
             * 报备ID。
             * @example `ed-bp11n21kq00sl71p****`
             */
            DemandId: string;
            /**
             * 报备单创建时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2019-02-26T12:00:00Z`
             */
            DemandTime: string;
            /**
             * 报备的实例规格。
             * @example `ecs.g6.xlarge`
             */
            InstanceType: string;
            /**
             * 报备名称。
             * @example `k8s-node-demand`
             */
            DemandName: string;
            /**
             * 报备资源的使用时长。
             * @example `3`
             */
            Period: number;
            /**
             * 报备资源的付费类型。可能值：
             * - Prepaid：包年包月
             * - Postpaid：按量付费
             * @example `Prepaid`
             */
            InstanceChargeType: string;
            /**
             * 报备资源当前可使用实例数量。
             * @example `10`
             */
            AvailableAmount: number;
            /**
             * 报备资源预期截止购买时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2019-03-03T15:00:00Z`
             */
            EndTime: string;
            /**
             * 报备资源预期开始购买时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2019-02-27T12:00:00Z`
             */
            StartTime: string;
            /**
             * 报备资源的使用时长单位。可能值：
             * - Hour
             * - Day
             * - <props="china">Week</props>
             * - Month
             * @example `Month`
             */
            PeriodUnit: string;
            /**
             * 报备资源所在的可用区。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 已经消耗的实例数。
             * @example `20`
             */
            UsedAmount: number;
            /**
             * 报备的实例数。
             * @example `50`
             */
            TotalAmount: number;
            /**
             * 报备资源中待交付实例数量。
             * @example `20`
             */
            DeliveringAmount: number;
            /**
             *  报备实例所属的规格族。
             * @example `ecs.g6`
             */
            InstanceTypeFamily: string;
            /**
             * 报备单或资源使用的状态。可能值：
             * - Creating：报备单创建中。
             * - Active：资源供应中。
             * - Expired：报备单已过期。
             * - Finished：消费完毕。
             * - Refused：报备拒绝，具体原因请查看参数`comment`。
             * - Cancelled：报备取消，报备资源已取消。报备取消后，资源交付状态无效。
             * @example `Active`
             */
            DemandStatus: string;
            SupplyInfos: {
                /**
                 * 报备资源的交付状态。
                 */
                SupplyInfo: {
                    /**
                     * 交付的实例数量。
                     * @example `30`
                     */
                    Amount: number;
                    /**
                     * 资源交付状态。可能值：
                     * - Delivered ：已交付
                     * - Delivering：交付中
                     * @example `Delivering`
                     */
                    SupplyStatus: string;
                    /**
                     * 资源交付可用的开始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                     * @example `2019-03-01T14:00:00Z`
                     */
                    SupplyStartTime: string;
                    /**
                     * 资源交付可用的截止时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                     * @example `2019-03-03T15:00:00Z`
                     */
                    SupplyEndTime: string;
                    /**
                     * 需求单对应的私有池ID。
                     * @example `crp-bp1fv8sbhelbzjwx****`
                     */
                    PrivatePoolId: string;
                }[];
            };
        }[];
    };
}
