export interface DescribeDesktopGroupSessionsResponse {
    /**
     * 请求ID。
     * @example `D0920845-7359-59FC-9899-B****`
     */
    RequestId: string;
    /**
     * 总数。
     * @example `15`
     */
    TotalCount: number;
    /**
     * 会话数据列表。
     */
    Sessions: {
        /**
         * 用户ID。
         * @example `xianqiu`
         */
        EndUserId: string;
        /**
         * 桌面组ID。
         * @example `dg-iaqu3bi2xtie****`
         */
        DesktopGroupId: string;
        /**
         * 桌面组名称。
         * @example `测试桌面`
         */
        DesktopGroupName: string;
        /**
         * 工作区ID。
         * @example `cn-hangzhou+dir-8904****`
         */
        OfficeSiteId: string;
        /**
         * 工作区名称。
         * @example `测试工作区`
         */
        OfficeSiteName: string;
        /**
         * 会话类型。
         * @example `0`
         */
        OwnType: number;
        /**
         * 会话连接状态。
         * @example `Connected`
         */
        SessionStatus: string;
        /**
         * 连接中代表当前的桌面ID，断连中代表最近一次连接的桌面ID。
         * @example `ecd-g6t1ukbaea****`
         */
        DesktopId: string;
        /**
         * 客户端系统。
         * @example `windows_\"Windows10Enterprise\"10.0(Build22000)`
         */
        ClientOS: string;
        /**
         * 客户端版本。
         * @example `2.0.0-R-20221030.08****`
         */
        ClientVersion: string;
        /**
         * 客户端IP。
         * @example `172.21.XX.XX`
         */
        ClientIp: string;
        /**
         * 最近一次连接时长。
         * @example `120`
         */
        LatestConnectionTime: number;
        /**
         * 连接总时长。
         * @example `120`
         */
        TotalConnectionDuration: number;
        /**
         * 桌面空闲时长。
         * @example `120`
         */
        SessionIdleTime: number;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 最近一次连接开始时间。
         * @example `2022-08-31 06:56:45`
         */
        LastSessionStartTime: string;
        /**
         * 最近一次连接结束时间。
         * @example `2022-08-31 06:56:45`
         */
        LastSessionEndTime: string;
        /**
         * 操作系统类型。包括：
         * - Windows
         * - Linux
         * @example `Windows`
         */
        OsType: string;
        /**
         * 用户申请管理员协助时间点。
         * @example `1678794261000`
         */
        EndUserApplyCoordinateTime: number;
    }[];
    /**
     * 下一页查询开始的Token。
     * @example `caeba0bbb2`
     */
    NextToken: string;
}
