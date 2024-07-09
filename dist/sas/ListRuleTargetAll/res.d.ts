export interface ListRuleTargetAllResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `30CBF632-109F-596F-97F2-451C8B2A****`
     */
    RequestId: string;
    /**
     * 查询到的网络对象列表。
     */
    RuleTargetList: {
        /**
         * 网络对象ID。
         * @example `301944`
         */
        TargetId: number;
        /**
         * 网络对象的名称。
         * @example `source-test-obj-xFKcx`
         */
        TargetName: string;
        /**
         * 对象类型。取值：
         * - IMAGE：镜像
         * @example `IMAGE`
         */
        TargetType: string;
    }[];
}
