export interface DisconnectDesktopSessionsResponse {
    /**
     * 本次请求的ID。
     * @example `2507CFA8-FEAB-5208-98F5-5E028C50XXXX`
     */
    RequestId: string;
    /**
     * 无效会话列表。
     */
    InvalidSessions: {
        /**
         * 终端用户ID
         * @example `wy01`
         */
        EndUserId: string;
        /**
         * 云桌面ID。
         * @example `ecd-2jv6wugbkp65pxxxx`
         */
        DesktopId: string;
    }[];
}
