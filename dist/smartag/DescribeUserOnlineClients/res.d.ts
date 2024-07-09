export interface DescribeUserOnlineClientsResponse {
    /**
     * 请求ID。
     * @example `7108A98F-C47D-45F7-A4D8-C2E3022735DA`
     */
    RequestId: string;
    Users: {
        /**
         * 用户信息。
         */
        User: {
            /**
             * 阿里云APP客户端IP。
             * @example `10.**.**.**`
             */
            ClientIp: string;
            /**
             * 上线时间。
             * @example `1559125519`
             */
            OnlineTime: string;
        }[];
    };
}
