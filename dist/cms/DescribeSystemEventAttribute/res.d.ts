export interface DescribeSystemEventAttributeResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。当操作成功时，返回`success`；当操作失败时，返回错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `60912C8D-B340-4253-ADE7-61ACDFD25CFC`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: string;
    SystemEvents: {
        /**
         * 事件内容详情。
         */
        SystemEvent: {
            /**
             * 事件状态。
             * @example `normal`
             */
            Status: string;
            /**
             * 事件发生的时间戳。
             * 单位：毫秒。
             * @example `1552199984000`
             */
            Time: number;
            /**
             * 应用分组ID。
             * @example `12345`
             */
            GroupId: string;
            /**
             * 产品名称缩写。
             * @example `CloudMonitor`
             */
            Product: string;
            /**
             * 实例名称。
             * @example `instanceId1`
             */
            InstanceName: string;
            /**
             * 资源ID。
             * @example `xxxxx-1`
             */
            ResourceId: string;
            /**
             * 事件名称。
             * @example `Agent_Status_Stopped`
             */
            Name: string;
            /**
             * 事件内容详情。
             * @example `[{"product":"CloudMonitor","content":"{\"ipGroup\":\"112.126.XX.XX,10.163.XX.XX\",\"tianjimonVersion\":\"1.2.22\"}","groupId":"176,177,178,179,180,692,120812,1663836,96,2028302","time":"1552209568000","resourceId":"acs:ecs:cn-beijing:173651113438****:instance/i-25k35****","level":"CRITICAL","status":"stopped","instanceName":"cmssiteprobebj-6","name":"Agent_Status_Stopped","regionId":"cn-beijing"}]`
             */
            Content: string;
            /**
             * 事件级别。取值：
             * - CRITICAL：严重。
             * - WARN：警告。
             * - INFO：信息。
             * @example `WARN`
             */
            Level: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 事件ID。
             * @example `b936efc9-f621-4e8a-a6eb-076be40e****`
             */
            Id: string;
        }[];
    };
}
