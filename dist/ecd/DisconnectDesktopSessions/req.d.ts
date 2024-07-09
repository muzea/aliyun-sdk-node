export interface DisconnectDesktopSessionsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 会话详情。
     */
    "Sessions": {
        /**
         * 终端用户ID
         * @example `wy01`
         */
        EndUserId: string;
        /**
         * 云桌面ID。
         * @example `ecd-90g15fkhsxxxn0unj`
         */
        DesktopId: string;
    }[];
    /**
     * 是否进行预检查。若执行预检查，则不会真正执行断连操作，只会将不符合执行条件的会话列表返回。
     * @example `true`
     */
    "PreCheck"?: boolean;
}
