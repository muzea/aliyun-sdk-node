export interface DescribeSystemEventCountResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * 当请求成功时，返回成功信息；当请求失败时，返回失败原因。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C7A7B776-0ACE-5A93-9B07-DE8008D9CCDF`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    SystemEventCounts: {
        /**
         * 事件详情。
         */
        SystemEventCount: {
            /**
             * 事件状态。
             * @example `Normal`
             */
            Status: string;
            /**
             * 事件发生的时间戳。单位：毫秒。
             * @example `1635993751000`
             */
            Time: number;
            /**
             * 应用分组ID。
             * @example `17285****`
             */
            GroupId: string;
            /**
             * 事件的云服务名称。
             * @example `ECS`
             */
            Product: string;
            /**
             * 实例名称。
             * @example `ECS-test`
             */
            InstanceName: string;
            /**
             * 发生事件的数量。
             * @example `3`
             */
            Num: number;
            /**
             * 资源ID。
             * @example `i-rj99xc6cptkk64ml****`
             */
            ResourceId: string;
            /**
             * 事件名称。
             * @example `Instance:StateChange`
             */
            Name: string;
            /**
             * 事件描述。
             * @example `实例状态改变通知`
             */
            Content: string;
            /**
             * 事件级别。取值：
             * - Critical：严重。
             * - Warn：警告。
             * - Info：信息。
             * @example `Info`
             */
            Level: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
