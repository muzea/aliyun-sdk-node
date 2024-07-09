export interface DescribeDesktopsResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `484256DA-D816-44D2-9D86-B6EE4D5BA78C`
     */
    RequestId: string;
    /**
     * 云电脑总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 云电脑详细信息。
     */
    Desktops: {
        /**
         * 云电脑创建时间。
         * @example `2020-11-06T08:28Z`
         */
        CreationTime: string;
        /**
         * 云电脑的计费方式。
         * @example `PostPaid`
         */
        ChargeType: string;
        /**
         * 云电脑名称。
         * @example `DemoComputer01`
         */
        DesktopName: string;
        /**
         * 策略名称。
         * @example `All enabled policy`
         */
        PolicyGroupName: string;
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `0`
         */
        SystemDiskSize: number;
        /**
         * 策略ID。
         * @example `system-all-enabled-policy`
         */
        PolicyGroupId: string;
        /**
         * 云电脑状态。
         * @example `Running`
         */
        DesktopStatus: string;
        /**
         * 云电脑规格。
         * @example `ecd.basic.large`
         */
        DesktopType: string;
        /**
         * GPU数量。
         * @example `1`
         */
        GpuCount: number;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 内存大小。单位：MiB。
         * @example `4096`
         */
        Memory: number;
        /**
         * GPU规格。
         * @example `NVIDIA T4`
         */
        GpuSpec: string;
        /**
         * 镜像ID。
         * @example `m-4zfb6zj728hhr****`
         */
        ImageId: string;
        /**
         * 目录ID，同办公网络ID（OfficeSiteId）。
         * @example `cn-hangzhou+dir-363353****`
         */
        DirectoryId: string;
        /**
         * 管理标识。
         * @example `NoFlag`
         */
        ManagementFlag: string;
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `null`
         */
        DataDiskCategory: string;
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `null`
         */
        SystemDiskCategory: string;
        /**
         * 云电脑服务在RAM或AD用户下创建的辅助网卡ID，不可修改。
         * @example `123456`
         */
        NetworkInterfaceId: string;
        /**
         * 办公网络ID。
         * @example `cn-hangzhou+dir-363353****`
         */
        OfficeSiteId: string;
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `null`
         */
        DataDiskSize: string;
        /**
         * 云电脑所属的云电脑池ID。默认为`null`。
         * @example `null`
         */
        DesktopGroupId: string;
        /**
         * 云电脑ID。
         * @example `ecd-gx2x1dhsmucyy****`
         */
        DesktopId: string;
        /**
         * 办公网络名称。
         * @example `default`
         */
        OfficeSiteName: string;
        /**
         * 云电脑首次启动时间。
         * @example `2020-11-06T08:31Z`
         */
        StartTime: string;
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `SIMPLE`
         */
        DirectoryType: string;
        /**
         * vCPU数量。
         * @example `2`
         */
        Cpu: number;
        /**
         * 云电脑服务在RAM或AD用户下创建的辅助网卡IP。
         * @example `192.168.XX.XX`
         */
        NetworkInterfaceIp: string;
        /**
         * 包年包月云电脑的到期时间。
         * @example `2021-12-31T15:59Z`
         */
        ExpiredTime: string;
        /**
         * 操作系统类型。
         * @example `Windows`
         */
        OsType: string;
        /**
         * 用户的连接状态。
         * @example `Disconnected`
         */
        ConnectionStatus: string;
        /**
         * 云电脑使用的云电脑模板ID。
         * @example `b-2g65ljy4291vl****`
         */
        BundleId: string;
        /**
         * 云电脑使用的云电脑模板名称。
         * @example `TemplateName`
         */
        BundleName: string;
        /**
         * 办公网络的账号系统类型。
         * @example `SIMPLE`
         */
        OfficeSiteType: string;
        /**
         * 主机名称。
         * @example `testName`
         */
        HostName: string;
        /**
         * 磁盘信息。
         */
        Disks: {
            /**
             * 磁盘类型。
             * @example `SYSTEM`
             */
            DiskType: string;
            /**
             * 磁盘ID。
             * @example `d-jedbpr4sl9l37****`
             */
            DiskId: string;
            /**
             * 磁盘大小。单位：GiB。
             * @example `80`
             */
            DiskSize: number;
            /**
             * 当磁盘采用ESSD云盘时，ESSD云盘的性能等级。
             * 关于各性能等级磁盘的差异，请参见[ESSD云盘](~~122389~~)。
             * @example `PL0`
             */
            PerformanceLevel: string;
        }[];
        /**
         * 标签信息。
         */
        Tags: {
            /**
             * 标签键。
             * @example `TestKey`
             */
            Key: string;
            /**
             * 标签值。
             * @example `TestValue`
             */
            Value: string;
        }[];
        /**
         * 云电脑用户会话信息。
         */
        Sessions: {
            /**
             * 连接云电脑的用户ID。
             * @example `29615820929547****`
             */
            EndUserId: string;
            /**
             * 云电脑会话连接的时间。
             * @example `2021-03-07T08:23Z`
             */
            EstablishmentTime: string;
            /**
             * 外部用户名称。
             * @example `Testname`
             */
            ExternalUserName: string;
        }[];
        /**
         * 云电脑的授权用户ID。
         */
        EndUserIds: string[];
        /**
         * 可以降配的次数。
         * @example `3`
         */
        DowngradeQuota: number;
        /**
         * 已经降配的次数。
         * @example `0`
         */
        DowngradedTimes: number;
        /**
         * 是否为GPU云电脑。
         * @example `0`
         */
        GpuCategory: number;
        /**
         * 云电脑的GPU驱动版本号。
         * @example `null`
         */
        GpuDriverVersion: string;
        /**
         * 查询可用区的类型。默认取值为`AvailabilityZone`，即普通云上可用区。
         * @example `AvailabilityZone`
         */
        ZoneType: string;
        /**
         * 云电脑的镜像版本信息。
         */
        FotaUpdate: {
            /**
             * 云电脑当前镜像的版本号。
             * @example `0.0.0-D-20220102.000000`
             */
            CurrentAppVersion: string;
            /**
             * 云电脑可升级的镜像版本号。
             * @example `0.0.0-R-20220307.190736`
             */
            NewAppVersion: string;
            /**
             * 可升级镜像的版本描述。
             * @example `测试升级包03-07`
             */
            ReleaseNote: string;
            /**
             * 可升级的版本安装包大小。单位：KB。
             * @example `108815097`
             */
            Size: number;
            /**
             * 可升级的版本英文描述。
             * @example `What's new`
             */
            ReleaseNoteEn: string;
            /**
             * 可升级的版本日文描述。
             * @example `リリースノート`
             */
            ReleaseNoteJp: string;
        };
        /**
         * 云电脑的创建进度。
         * @example `100%`
         */
        Progress: string;
        /**
         * 是否开启磁盘加密。
         * @example `false`
         */
        VolumeEncryptionEnabled: boolean;
        /**
         * 开启磁盘加密的情况下使用的KMS的密钥ID。可通过[ListKeys](~~28951~~)接口获取。
         * @example `08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****`
         */
        VolumeEncryptionKey: string;
        /**
         * 办公网络VPC类型。
         * @example `basic`
         */
        OfficeSiteVpcType: string;
        /**
         * 操作系统平台信息。
         * @example `Ubuntu`
         */
        Platform: string;
        /**
         * 会话类型。
         * @example `SINGLE_SESSION`
         */
        SessionType: string;
        /**
         * 管理标识。
         */
        ManagementFlags: string[];
        /**
         * 快照策略ID。
         * @example `sp-gi007jgyc3kcey2bb`
         */
        SnapshotPolicyId: string;
        /**
         * 快照策略名称。
         * @example `testSnapshotName`
         */
        SnapshotPolicyName: string;
        /**
         * 多会话云电脑池中，每台云电脑允许的并发会话数。
         * @example `2`
         */
        BindAmount: number;
        /**
         * 策略ID集合。
         */
        PolicyGroupIdList: string[];
        /**
         * 策略名称集合。
         */
        PolicyGroupNameList: string[];
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `true`
         */
        HibernationOptionsConfigured: boolean;
        /**
         * 是否支持休眠。
         * @example `true`
         */
        SupportHibernation: boolean;
        /**
         * > 该参数正在邀测中，暂未开放使用。
         * @example `true`
         */
        HibernationBeta: boolean;
        ResourceGroups: {
            Name: string;
            Id: string;
        }[];
    }[];
}
