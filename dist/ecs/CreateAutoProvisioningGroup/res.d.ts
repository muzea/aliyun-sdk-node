export interface CreateAutoProvisioningGroupResponse {
    /**
     * 弹性供应组的ID。
     * @example `apg-sn54avj8htgvtyh8****`
     */
    AutoProvisioningGroupId: string;
    /**
     * 请求ID。
     * @example `745CEC9F-0DD7-4451-9FE7-8B752F39****`
     */
    RequestId: string;
    LaunchResults: {
        /**
         * 弹性供应组创建的实例组成的集合。该集合值仅当弹性供应组的交付类型为一次性同步交付（`instant`）时返回。
         */
        LaunchResult: {
            /**
             * 实例所在的可用区ID。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 当实例创建失败时，返回的错误信息。
             * @example `Specific parameter is not valid.`
             */
            ErrorMsg: string;
            /**
             * 实例规格。
             * @example `ecs.g5.large`
             */
            InstanceType: string;
            /**
             * 当实例创建失败时，返回的错误码。
             * @example `InvalidParameter`
             */
            ErrorCode: string;
            /**
             * 按量实例的抢占策略。可能值：
             * - NoSpot：正常按量付费实例。
             * - SpotWithPriceLimit：设置上限价格的抢占式实例。
             * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
             * @example `NoSpot`
             */
            SpotStrategy: string;
            /**
             * 成功创建的实例ID列表内的实例数量。
             * @example `1`
             */
            Amount: number;
            InstanceIds: {
                /**
                 * 成功创建的实例ID列表。
                 */
                InstanceId: string[];
            };
        }[];
    };
}
