export interface DescribeServiceEventResponse {
    /**
     * 请求ID。
     * @example `3D491C94-6239-5318-B4B4-799D859***`
     */
    RequestId: string;
    /**
     * 事件列表。
     */
    Events: {
        /**
         * 事件类型，可能值：
         * - Normal：正常事件。
         * - Warning：异常事件。
         * @example `Normal`
         */
        Type: string;
        /**
         * 事件原因（服务状态变化信息）。
         * @example `Updating`
         */
        Reason: string;
        /**
         * 事件信息（格式化后的JSON字符串）。
         * @example `{\"versionId\":1,\"message\":\"Stage scale complete\",\"availableInstance\":1,\"unavailableInstance\":0}`
         */
        Message: string;
        /**
         * 事件发生UTC时间。
         * @example `2022-04-09 06:30:00`
         */
        Time: string;
    }[];
    /**
     * 总计数量。
     * @example `29`
     */
    TotalCount: number;
    /**
     * 总计页码。
     * @example `12`
     */
    TotalPageNum: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNum: number;
}
