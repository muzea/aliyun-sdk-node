export interface DescribeInstanceAutoRenewAttributeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回的实例总数。
     * @example `6`
     */
    TotalCount: number;
    InstanceRenewAttributes: {
        /**
         * 实例续费的属性InstanceRenewAttribute的集合。
         */
        InstanceRenewAttribute: {
            /**
             * 自动续费时长的单位。
             * @example `week`
             */
            PeriodUnit: string;
            /**
             * 自动续费时长。
             * @example `1`
             */
            Duration: number;
            /**
             * 实例的自动续费状态。可能值：
             * - AutoRenewal：设置为自动续费。
             * - Normal：取消自动续费。
             * - NotRenewal：不再续费，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以通过[ModifyInstanceAutoRenewAttribute](~~52843~~)更改成待续费（`Normal`）后，再自行续费或设置为自动续费。
             * @example `Normal`
             */
            RenewalStatus: string;
            /**
             * 实例ID。
             * @example `i-bp18x3z4hc7bixhx****`
             */
            InstanceId: string;
            /**
             * 是否已设置自动续费。
             * @example `false`
             */
            AutoRenewEnabled: boolean;
        }[];
    };
}
