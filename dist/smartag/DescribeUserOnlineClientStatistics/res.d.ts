export interface DescribeUserOnlineClientStatisticsResponse {
    UserStatistics: {
        /**
         * 指定用户在线连接信息。
         */
        Statistics: {
            /**
             * 在线连接数。
             * @example `2`
             */
            OnlineCount: string;
            /**
             * 用户名。
             * @example `doctest`
             */
            UserName: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `14846A6A-2192-4F6A-B272-B8BD68EBC89B`
     */
    RequestId: string;
}
