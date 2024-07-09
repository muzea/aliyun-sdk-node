export interface DescribeStrategyTargetResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `001BAB34-D70A-54B0-B1D7-91B76DCDD8E8`
     */
    RequestId: string;
    /**
     * 策略生效的资产的信息列表。
     */
    StrategyTargets: {
        /**
         * 资产分组中绑定的资产的数量。
         * @example `85`
         */
        BindUuidCount: number;
        /**
         * 策略是否对该资产分组生效。取值：
         * - **add**：对该资产分组生效
         * - **del**：不对该资产分组生效
         * @example `add`
         */
        Flag: string;
        /**
         * 资产的分组ID或者UUID。
         * @example `9165712`
         */
        Target: string;
        /**
         * 策略生效的资产的添加方式。取值：
         * -  **groupId**：按照资产的分组添加。
         * - **uuid**：按照单个资产添加。
         * @example `groupId`
         */
        TargetType: string;
    }[];
}
