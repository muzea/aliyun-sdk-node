export interface ListStackEventsResponse {
    /**
     * 查询到的事件总数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     * 默认值：10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6`
     */
    RequestId: string;
    /**
     * 事件列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 事件对象列表。
     */
    Events: {
        /**
         * 资源的状态。
         * @example `CREATE_COMPLETE`
         */
        Status: string;
        /**
         * 事件ID。
         * @example `0086612d-77cf-4056-b0b5-ff8e94ad****`
         */
        EventId: string;
        /**
         * 资源逻辑ID，即模板中资源的名称。
         * @example `WebServer`
         */
        LogicalResourceId: string;
        /**
         * 资源栈ID。
         * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
         */
        StackId: string;
        /**
         * 实际资源的物理ID。
         * @example `i-m5e3tfdbinchnexh****`
         */
        PhysicalResourceId: string;
        /**
         * 资源类型。
         * @example `ALIYUN::ECS::Instance`
         */
        ResourceType: string;
        /**
         * 状态原因。
         * @example `state changed`
         */
        StatusReason: string;
        /**
         * 创建时间。按照ISO8601标准表示，需使用UTC时间，格式：YYYY-MM-DDThh:mm:ss。
         * @example `2019-08-01T04:07:39`
         */
        CreateTime: string;
        /**
         * 资源栈名称。
         * @example `StackName`
         */
        StackName: string;
    }[];
}
