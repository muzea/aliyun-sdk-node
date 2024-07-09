export interface GetLiveRoomStatisticsResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 查询直播统计数据返回的结果。
     */
    Result: {
        /**
         * 直播资源的唯一标识ID。
         * @example `b7f2****ebb3`
         */
        LiveId: string;
        /**
         * 直播状态。取值：
         * * **0**：已创建，未开始直播。
         * * **1**：直播中。
         * * **2**：直播结束。
         * @example `1`
         */
        Status: number;
        /**
         * 访问用户数，同个访客多次访问直播间仅计算一个UV。
         * @example `100`
         */
        Uv: number;
        /**
         * 访问用户人次，访客对同一直播间的多次访问，PV累加。
         * @example `200`
         */
        Pv: number;
        /**
         * 互动消息数。
         * @example `500`
         */
        MessageCount: number;
        /**
         * 直播开始时间，单位：毫秒。
         * @example `1624259500000`
         */
        StartTime: number;
        /**
         * 直播结束时间，单位：毫秒。直播结束后生成。
         * @example `1624259500000`
         */
        EndTime: number;
        /**
         * 所有用户总观看时长，单位：毫秒。在直播中可获取该信息，数据延迟时间为几分钟；在2022.6.24 00:00:00之前创建的直播，需要在直播结束后生成。
         * @example `10000000`
         */
        WatchLiveTime: number;
        /**
         * 点赞数。
         * @example `100`
         */
        LikeCount: number;
        /**
         * 在线用户数。
         * @example `50`
         */
        OnlineCount: number;
    };
}
