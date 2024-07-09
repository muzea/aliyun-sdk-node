export interface SetPolicyAccessTimeRangeConfigRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 控制策略ID。
     * > 您可以调用[ListPolicies](~~2758876~~)接口获取该参数。
     * @example `13`
     */
    "PolicyId": string;
    /**
     * 登录时段限制配置。
     */
    "AccessTimeRangeConfig": {
        /**
         * 允许登录的时段详情。
         */
        EffectiveTime: {
            /**
             * 允许登录的星期日期。
             */
            Days: number[];
            /**
             * 每天允许登录的时间。
             */
            Hours: number[];
        }[];
    };
}
