export interface DescribeSpotAdviceResponse {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    AvailableSpotZones: {
        /**
         * 可用区及其对应的抢占式实例相关信息组成的数组。
         * > 返回值的顺序按照实例规格的历史平均折扣率排序。
         */
        AvailableSpotZone: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-i`
             */
            ZoneId: string;
            AvailableSpotResources: {
                /**
                 * 近30天抢占式实例的释放率、折扣率等信息组成的数组。
                 */
                AvailableSpotResource: {
                    /**
                     * 近30天抢占式实例的释放率的范围，对应`InterruptionRate`返回值。可能值：
                     * - 0-3%
                     * - 3-5%
                     * - 5-10%
                     * - 10-100%
                     * @example `0-3%`
                     */
                    InterruptRateDesc: string;
                    /**
                     * 近30天抢占式实例的均价相比按量付费实例价格的折扣率。单位：%。可能值：1~100。
                     * 您可以根据该返回值计算抢占式实例的均价。例如，按量付费实例的价格为1，该返回值为20（即20%），则近30天抢占式实例的均价为0.2。
                     * @example `20`
                     */
                    AverageSpotDiscount: number;
                    /**
                     * 实例规格。
                     * @example `ecs.c5.large`
                     */
                    InstanceType: string;
                    /**
                     * 近30天抢占式实例的平均释放率。单位：%。
                     * @example `0`
                     */
                    InterruptionRate: number;
                }[];
            };
        }[];
    };
}
