export interface ListServiceInstanceLogsResponse {
    /**
     * 下一个查询开始Token。
     * @example `AAAAAfu+XtuBE55iRLHEYYuojI4=`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `51945B04-6AA6-410D-93BA-236E0248B104`
     */
    RequestId: string;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 服务实例日志。
     */
    ServiceInstancesLogs: {
        /**
         * 服务实例日志的时间戳。
         * @example `2021-05-21T00:00:00Z`
         */
        Timestamp: string;
        /**
         * 服务实例日志的来源。可能的值：
         * - ros：资源编排ROS产生的日志。
         * - computeNest：计算巢产生的日志。
         * @example `ros`
         */
        Source: string;
        /**
         * 日志内容。
         * @example `Start creating service instance`
         */
        Content: string;
        /**
         * 日志类型。可能的值：
         * - serviceInstance：服务实例产生的日志。
         * - resource：ROS资源产生的日志。
         * @example `serviceInstance`
         */
        LogType: string;
        /**
         * 资源类型。
         * @example `ROS.Stack`
         */
        ResourceType: string;
        /**
         * 关联ID。
         * @example `si-5c6525c0589545c3****`
         */
        ResourceId: string;
        /**
         * 日志状态。可能的值：
         * - Creating：创建中。
         * - Created：已创建。
         * - Deploying：部署中。
         * - Deployed：已部署。
         * - DeployedFailed：部署失败。
         * - Expired：已过期。
         * - ExtendSuccess：续费成功。
         * - Upgrading：升级中。
         * - UpgradeSuccess：升级成功。
         * @example `Creating`
         */
        Status: string;
    }[];
}
