export interface GetLiveRoomUserStatisticsResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 分页查询直播用户数据统计的结果。
     */
    Result: {
        /**
         * 直播资源的唯一标识ID。
         * @example `b7f2****ebb3`
         */
        LiveId: string;
        /**
         * 观看用户总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 观看用户总页数。
         * @example `10`
         */
        PageTotal: number;
        /**
         * 是否还有下一页。
         * @example `true`
         */
        HasMore: boolean;
        /**
         * 用户观看数据列表。
         * @example `10000000`
         */
        UserStatisticsList: {
            /**
             * 用户ID。
             * @example `User001`
             */
            UserId: string;
            /**
             * 观看时长，单位：毫秒。
             * @example `100000`
             */
            WatchLiveTime: number;
            /**
             * 该用户发送的弹幕消息数量。
             * @example `100`
             */
            CommentCount: number;
            /**
             * 该用户的点赞数量。
             * @example `100`
             */
            LikeCount: number;
        }[];
    };
}
