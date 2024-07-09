export interface DescribeDedicatedHostAutoRenewResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    DedicatedHostRenewAttributes: {
        /**
         * 专有宿主机自动续费属性组成的数组。
         */
        DedicatedHostRenewAttribute: {
            /**
             * 续费单位。可能值：
             * - Week
             * - Month
             * @example `Month`
             */
            PeriodUnit: string;
            /**
             * 自动续费时长。
             * @example `0`
             */
            Duration: number;
            /**
             * 专有宿主机ID。
             * @example `dh-bp165p6xk2tlw61e****`
             */
            DedicatedHostId: string;
            /**
             * 是否自动续费包年包月专有宿主机。取值范围：
             * - AutoRenewal：自动续费。
             * - Normal：待续费。
             * - NotRenewal：不续费，也不发送到期提醒。到期前第三天阿里云会发送不续费提醒。不续费的专有宿主机可以设置成待续费（Normal），再自行续费[RenewDedicatedHosts](~~93287~~)或设置为自动续费（AutoRenewal）。
             * @example `Normal`
             */
            RenewalStatus: string;
            /**
             * 是否自动续费。可能值：
             * - true：自动续费
             * - false：不自动续费
             * @example `false`
             */
            AutoRenewEnabled: boolean;
            /**
             * 包年包月专有宿主机内的包年包月ECS实例自动续费时，如果ECS实例续费后的到期时间比专有宿主机的到期时间晚，则该专有宿主机是否随ECS实例自动续费。可能值：
             * - AutoRenewWithEcs：跟随ECS实例自动续费。
             * - StopRenewWithEcs：不跟随ECS实例自动续费。
             * @example `StopRenewWithEcs`
             */
            AutoRenewWithEcs: string;
        }[];
    };
}
