export interface CreateSimulatedSystemEventsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    EventIdSet: {
        /**
         * 模拟事件ID（EventId）列表。
         */
        EventId: string[];
    };
}
