export interface ListConnectLogsResponse {
    /**
     * 请求ID。
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 返回日志分页列表对象。
     */
    Logs: {
        /**
         * 分页对象。
         */
        Pagination: {
            /**
             * 分页页码。
             * @example `1`
             */
            PageIndex: number;
            /**
             * 总分页数。
             * @example `2`
             */
            TotalPageCount: number;
            /**
             * 分页每页数据集大小。
             * @example `20`
             */
            PageSize: number;
            /**
             * 数据集总数。
             * @example `30`
             */
            TotalCount: number;
        };
        /**
         * 日志列表。
         */
        List: {
            /**
             * 长连接的sessionid。
             * @example `rkp_u-sTz_1_29473_1525516404577`
             */
            Sid: string;
            /**
             * 连接状态。
             * @example `断开`
             */
            Status: string;
            /**
             * 日志时间。
             * @example `1525517083249`
             */
            Time: number;
            /**
             * dis系统设备ID。
             * @example `fc71429ddd9b473c81d7ef5f44ab10cc`
             */
            DeviceId: string;
            /**
             * 设备系统版本。
             * @example `4.4.4`
             */
            SystemVersion: string;
            /**
             * 设备Ip。
             * @example `220.180.xx.xxx`
             */
            Ip: string;
            /**
             * 网络类型，比如EDGE、LTE、WIFI等。
             * @example `EDGE`
             */
            NetWorking: string;
            /**
             * 设备机型。
             * @example `iphone7`
             */
            Terminal: string;
        }[];
    };
}
