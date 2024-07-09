export interface DescribeDesktopSessionsResponse {
    /**
     * 查询结果总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `3EC4A6DB-EC8D-55B0-9038-543DE671****`
     */
    RequestId: string;
    /**
     * 会话详情。
     */
    Sessions: {
        /**
         * 会话连接状态。
         * @example `Connected`
         */
        SessionStatus: string;
        /**
         * 终端用户ID。
         * @example `alice`
         */
        EndUserId: string;
        /**
         * 办公网络ID。
         * @example `cn-hangzhou+dir-8904****`
         */
        OfficeSiteId: string;
        /**
         * 客户端IP。
         * @example `172.21.XX.XX`
         */
        ClientIp: string;
        /**
         * 客户端操作系统。
         * @example `windows_\"Windows10Enterprise\"10.0(Build22000)`
         */
        ClientOS: string;
        /**
         * 云电脑ID。
         * @example `ecd-g6t1ukbaea****`
         */
        DesktopId: string;
        /**
         * 云电脑名称。
         * @example `DemoComputer`
         */
        DesktopName: string;
        /**
         * 办公网络名称。
         * @example `TestOfficeSite`
         */
        OfficeSiteName: string;
        /**
         * 客户端版本。
         * @example `2.0.0-R-20221030.08****`
         */
        ClientVersion: string;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 最近一次连接云电脑的时长。单位：秒。
         * @example `120`
         */
        LatestConnectionTime: number;
        /**
         * 总连接时长。单位：秒。
         * @example `240`
         */
        TotalConnectionTime: number;
        /**
         * 会话的开始时间。
         * @example `2023-01-28T02:31:43Z
        `
         */
        SessionStartTime: string;
        /**
         * 会话的结束时间。
         * @example `2023-01-28T02:31:43Z`
         */
        SessionEndTime: string;
        /**
         * 会话空闲时长。单位：秒。
         * @example `120`
         */
        SessionIdleTime: number;
        /**
         * 操作系统类型。
         * @example `Windows`
         */
        OsType: string;
        /**
         * 终端用户远程协助时长。单位：秒。
         * @example `120`
         */
        EndUserApplyCoordinateTime: number;
        SubPayType: string;
    }[];
}
