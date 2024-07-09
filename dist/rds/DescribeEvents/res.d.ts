export interface DescribeEventsResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `A103039D-B1B2-4C57-B989-7D7C0DA95426`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `40`
     */
    TotalRecordCount: number;
    EventItems: {
        /**
         * 事件列表。
         */
        EventItems: {
            /**
             * 事件名称。
             * @example `ModifySecurityIPList`
             */
            EventName: string;
            /**
             * 事件发生时间。
             * @example `2019-08-20T01:08:22Z`
             */
            EventTime: string;
            /**
             * 执行事件的用户类型。
             * @example `SYSTEM`
             */
            EventUserType: string;
            /**
             * 事件的记录时间。会稍晚于事件的发生时间。
             * @example `2019-08-20T01:12:49Z`
             */
            EventRecordTime: string;
            /**
             * 事件执行人的用户ID。
             * @example `22973492****`
             */
            CallerUid: number;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 事件ID。
             * @example `11000053`
             */
            EventId: number;
            /**
             * 事件类型。
             * @example `NetworkManagement`
             */
            EventType: string;
            /**
             * 事件关联资源类型。当前仅有实例。
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 事件的请求参数或上下文参数。
             * @example `{\"Domain\": \"rds-inc-share.aliyuncs.com\", \"Api\": \"ReleaseInstancePublicConnection\"}`
             */
            EventPayload: string;
            /**
             * 事件操作的来源。
             * @example `FROM_USER`
             */
            EventReason: string;
            /**
             * 事件关联资源名称。当前仅有实例ID。
             * @example `rm-bp****`
             */
            ResourceName: string;
        }[];
    };
}
