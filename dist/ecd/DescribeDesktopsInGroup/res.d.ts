export interface DescribeDesktopsInGroupResponse {
    /**
     * 按量付费云电脑总数。
     * @example `10`
     */
    PostPaidDesktopsCount: number;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 包年包月云电脑总数。
     * @example `10`
     */
    PaidDesktopsCount: number;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 按量付费云电脑的账单总额。
     * @example `10000`
     */
    PostPaidDesktopsTotalAmount: number;
    /**
     * 包年包月云电脑列表。
     */
    PaidDesktops: {
        /**
         * 授权用户。
         * @example `alice`
         */
        EndUserId: string;
        /**
         * 云电脑状态。
         * @example `Running`
         */
        DesktopStatus: string;
        /**
         * 云电脑名称。
         * @example `DemoComputer`
         */
        DesktopName: string;
        /**
         * 连接状态。
         * @example `Connected`
         */
        ConnectionStatus: string;
        /**
         * 云电脑ID。
         * @example `ud-7ftf5b6yu77b0****`
         */
        DesktopId: string;
        /**
         * 授权用户名。
         * @example `alice`
         */
        EndUserName: string;
        /**
         * 管理标识。
         * @example `NoFlag`
         */
        ManagementFlag: string;
        /**
         * 当前连接用户ID列表，如果未连接状态则为空。
         */
        EndUserIds: string[];
        /**
         * 当前用户名列表，如果未连接状态则为空。
         */
        EndUserNames: string[];
        /**
         * 云电脑的重置时间。
         * @example `2021-03-03 08:48:08`
         */
        ResetTime: string;
        /**
         * 镜像ID。
         * @example `m-hn5v2mmk0****`
         */
        ImageId: string;
        /**
         * 镜像名称。
         * @example `Win10_ZC`
         */
        ImageName: string;
        /**
         * 系统盘大小，单位：GiB。
         * @example `80`
         */
        SystemDiskSize: number;
        /**
         * 操作系统类型。
         * @example `Windows`
         */
        OsType: string;
        /**
         * GPU驱动版本。
         * @example `1.0`
         */
        GpuDriverVersion: string;
        /**
         * 磁盘类型。
         * @example `SYSTEM`
         */
        DiskType: string;
        /**
         * 管理标识列表。
         */
        ManagementFlags: string[];
        /**
         * 实例的成员网卡IP。
         * @example `192.168.XX.XX`
         */
        MemberEniIp: string;
        /**
         * 实例的主网卡IP。
         * @example `192.168.XX.XX`
         */
        PrimaryEniIp: string;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 镜像版本信息。
         * @example `0.1.0-R-20220914.17****`
         */
        FotaVersion: string;
    }[];
    /**
     * 按量付费云电脑列表。
     */
    PostPaidDesktops: {
        /**
         * 保留时长。单位：毫秒。
         * @example `4153958447`
         */
        CreateDuration: string;
        /**
         * 授权用户。
         * @example `alice`
         */
        EndUserId: string;
        /**
         * 云电脑状态。
         * @example `Stopped`
         */
        DesktopStatus: string;
        /**
         * 创建时间。
         * @example `2022-01-21T06:34:57Z`
         */
        CreateTime: string;
        /**
         * 释放时间。
         * @example `2022-01-21T16:34:57Z`
         */
        ReleaseTime: string;
        /**
         * 云电脑名称。
         * @example `DemoComputer`
         */
        DesktopName: string;
        /**
         * 连接状态。
         * @example `Connected`
         */
        ConnectionStatus: string;
        /**
         * 云电脑ID。
         * @example `ud-2i8qxpv6t1a07****`
         */
        DesktopId: string;
        /**
         * 授权用户名。
         * @example `alice`
         */
        EndUserName: string;
        /**
         * 管理标识。
         * @example `NoFlag`
         */
        ManagementFlag: string;
        /**
         * 当前连接用户ID列表，如果未连接状态则为空。
         */
        EndUserIds: string[];
        /**
         * 当前用户名列表，如果未连接状态则为空。
         */
        EndUserNames: string[];
        /**
         * 云电脑的重置时间。
         * @example `2021-03-03 08:48:08`
         */
        ResetTime: string;
        /**
         * 镜像ID。
         * @example `m-hn5v2mmk0****`
         */
        ImageId: string;
        /**
         * 镜像名称。
         * @example `Win10_ZC`
         */
        ImageName: string;
        /**
         * 系统盘大小，单位：GiB。
         * @example `80`
         */
        SystemDiskSize: number;
        /**
         * 操作系统类型。
         * @example `Windows`
         */
        OsType: string;
        /**
         * GPU驱动版本。
         * @example `1.0`
         */
        GpuDriverVersion: string;
        /**
         * 磁盘类型。
         * @example `SYSTEM`
         */
        DiskType: string;
        /**
         * 管理标识集合。
         */
        ManagementFlags: string[];
        /**
         * 实例的成员网卡IP。
         * @example `192.168.XX.XX`
         */
        MemberEniIp: string;
        /**
         * 实例的主网卡IP。
         * @example `192.168.XX.XX`
         */
        PrimaryEniIp: string;
        /**
         * 协议类型。
         * @example `HDX`
         */
        ProtocolType: string;
        /**
         * 镜像版本信息。
         * @example `0.1.0-R-20220914.17****`
         */
        FotaVersion: string;
    }[];
    /**
     * 已连接的包年包月云电脑的数量。
     * @example `100`
     */
    OnlinePrePaidDesktopsCount: number;
    /**
     * 运行中的包年包月云电脑的数量。
     * @example `100`
     */
    RunningPrePaidDesktopsCount: number;
    /**
     * 已停止的包年包月云电脑的数量。
     * @example `100`
     */
    StopedPrePaidDesktopsCount: number;
    /**
     * 已停止的包年包月云电脑的数量。
     * @example `100`
     */
    StoppedPrePaidDesktopsCount: number;
}
