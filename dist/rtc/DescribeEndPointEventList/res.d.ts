export interface DescribeEndPointEventListResponse {
    /**
     * 用户基本信息列表。
     */
    Nodes: {
        /**
         * 用户ID。
         * @example `testuserid`
         */
        UserId: string;
        /**
         * 事件数据列表。
         */
        EventDataItems: {
            /**
             * 第一个事件发生的时间，使用UNIX时间戳表示，单位：秒。
             * @example `1614936817`
             */
            Ts: number;
            /**
             * 事件列表。
             */
            EventList: {
                /**
                 * 事件名称。
                 * @example `开始发布`
                 */
                EventName: string;
                /**
                 * 事件类型。取值：
                 * - **USER**：用户事件。
                 * - **SYSTEM**：系统事件。
                 * @example `USER`
                 */
                EventType: string;
                /**
                 * 事件发生的时间，使用UNIX时间戳表示，单位：秒。
                 * @example `1614936817`
                 */
                Ts: number;
                /**
                 * 事件发生的时间，使用UNIX时间戳表示，单位：毫秒。
                 * @example `1614936817123`
                 */
                TsInMs: string;
            }[];
        }[];
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
