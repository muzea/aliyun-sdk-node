export interface DescribeCustomizedStrategyTargetsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1EE7B150-D67E-53FD-A52D-3E8E669A****`
     */
    RequestId: string;
    /**
     * 查询到的自定义策略的目标信息列表。
     */
    StartegyTargets: {
        /**
         * 基线检查策略的名称。
         * @example `白名单`
         */
        StrategyName: string;
        /**
         * 基线检测策略ID。
         * @example `1884`
         */
        StrategyId: number;
        /**
         * 服务器分组ID。
         * > 您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)接口查询服务器分组ID。
         * @example `14590457`
         */
        GroupId: number;
        /**
         * 资产的UUID。
         * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
         * @example `2701ad2e-0e8f-428c-8812-ebb2686e****`
         */
        Uuid: string;
    }[];
}
