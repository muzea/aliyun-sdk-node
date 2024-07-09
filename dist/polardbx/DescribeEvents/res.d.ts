export interface DescribeEventsResponse {
    /**
     * 请求ID。
     * @example `4748127A-6D50-432C-B635-433467074C27`
     */
    RequestId: string;
    /**
     * 总页数。
     * @example `20`
     */
    TotalRecordCount: number;
    /**
     * 事件体。
     */
    EventItems: {
        /**
         * 事件ID。
         * @example `50421290`
         */
        EventId: number;
        /**
         * 事件名称。
         * @example `ModifySecurityIps`
         */
        EventName: string;
        /**
         * 补充信息。
         * @example `{\"Domain\": \"rds-cn-hangzhou.aliyuncs.com\"}`
         */
        EventPayload: string;
        /**
         * 原因。
         * @example `FROM_USER`
         */
        EventReason: string;
        /**
         * 记录时间。
         * @example `2021-10-15T06:39:49Z`
         */
        EventRecordTime: string;
        /**
         * 事件时间。
         * @example `2021-10-15T06:35:00Z`
         */
        EventTime: string;
        /**
         * 事件类型。
         * @example `SecurityManagement`
         */
        EventType: string;
        /**
         * 事件用户类型。
         * @example `USRE`
         */
        EventUserType: string;
        /**
         * 区域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 资源名。
         * @example `px-bp1v8udesc89g156g`
         */
        ResourceName: string;
        /**
         * 资源类型。
         * @example `instance`
         */
        ResourceType: string;
    }[];
    /**
     * 页面大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 页面下标。
     * @example `1`
     */
    PageNumber: number;
}
