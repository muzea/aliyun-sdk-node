export interface DescribeDesktopGroupsResponse {
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 云电脑池列表。
     */
    DesktopGroups: {
        /**
         * 创建时间。
         * @example `2022-02-17T14:51:07Z`
         */
        CreateTime: string;
        /**
         * 付费类型。
         * @example `PrePaid`
         */
        PayType: string;
        /**
         * 云电脑池关联的策略名称。
         * @example `All enabled policy`
         */
        PolicyGroupName: string;
        /**
         * 创建者的阿里云账号ID。
         * @example `1007214305******`
         */
        Creator: string;
        /**
         * 按量付费云电脑池内能容纳的云电脑最大数量。
         * @example `3`
         */
        MaxDesktopsCount: number;
        /**
         * 系统盘容量。单位为GiB。
         * @example `80`
         */
        SystemDiskSize: number;
        /**
         * 云电脑池关联的策略ID。
         * @example `pg-53iyi2aar0nd6c8qj`
         */
        PolicyGroupId: string;
        /**
         * 云电脑模板ID。
         * @example `bundle_eds_general_4c8g_s8d5_win2019`
         */
        OwnBundleId: string;
        /**
         * GPU核数。
         * @example `1`
         */
        GpuCount: number;
        /**
         * 内存大小。单位为MiB。
         * @example `16384`
         */
        Memory: number;
        /**
         * GPU显存。
         * @example `16 GiB`
         */
        GpuSpec: string;
        /**
         * 云电脑模板名称。
         * @example `test`
         */
        OwnBundleName: string;
        /**
         * 用户磁盘类型。
         * @example `cloud_ssd`
         */
        DataDiskCategory: string;
        /**
         * 云电脑池名称。
         * @example `CloudComputerPool01`
         */
        DesktopGroupName: string;
        /**
         * 系统盘类型。
         * @example `cloud_ssd`
         */
        SystemDiskCategory: string;
        /**
         * 云电脑池所属的办公网络名称。
         * @example `cn-hangzhou+dir-467671****`
         */
        OfficeSiteId: string;
        /**
         * 会话断开连接后继续保留的时间。单位为毫秒，取值范围为180000（3分钟）~345600000（4天）。取值为0时，表示始终保留。
         * 当会话因为用户主动断开或因为其他因素意外断开时，从断开的时刻开始计算，若在该保留时长内用户始终未重新建立与该会话的连接，则该会话注销，未保存的数据都将销毁；若在该保留时长内，用户重新建立连接成功，则仍可进入原来的会话，仍可访问对话断开之前的数据。
         * @example `180000`
         */
        KeepDuration: number;
        /**
         * 包年包月云电脑池内自动创建云电脑的上限。
         * @example `1`
         */
        MinDesktopsCount: number;
        /**
         * 云电脑池的授权用户数。
         * @example `1`
         */
        EndUserCount: number;
        /**
         * 用户磁盘容量。单位为GiB。
         * @example `50`
         */
        DataDiskSize: string;
        /**
         * 云电脑池ID。
         * @example `dg-2i8qxpv6t1a03****`
         */
        DesktopGroupId: string;
        /**
         * 云电脑池所属的办公网络ID。
         * @example `cn-hangzhou+os-c5cy7q578s8jc****`
         */
        OfficeSiteName: string;
        /**
         * vCPU核数。
         * @example `4`
         */
        Cpu: number;
        /**
         * 包年包月云电脑池的到期时间。
         * @example `2022-03-17T16:00:00Z`
         */
        ExpiredTime: string;
        /**
         * 备注信息。
         * @example `comment`
         */
        Comments: string;
        /**
         * 办公网络的账号体系类型。
         * @example `SIMPLE`
         */
        OfficeSiteType: string;
        /**
         * 云电脑池的状态。
         * @example `1`
         */
        Status: number;
        /**
         * 云电脑池重置类型。
         * @example `0`
         */
        ResetType: number;
        /**
         * 多会话云电脑池的负载均衡策略。
         * @example `1`
         */
        LoadPolicy: number;
        /**
         * 多会话云电脑池中每台云电脑允许的并发会话数。
         * @example `2`
         */
        BindAmount: number;
        /**
         * 云电脑池类型。
         * @example `0`
         */
        OwnType: number;
        /**
         * 镜像ID。
         * @example `m-gq15cq5ydlvwn****`
         */
        ImageId: string;
        /**
         * 是否开启加密功能。
         * @example `false`
         */
        VolumeEncryptionEnabled: boolean;
        /**
         * 加密磁盘使用的KMS密钥ID。
         * @example `e5409ada-xxxx-xxxx-xxxx-89e31e23e993`
         */
        VolumeEncryptionKey: string;
        /**
         * 会话占用率阈值，用作多会话云电脑池的自动伸缩触发条件。会话占用率的计算公式为：
         * ```会话占用率 = 已绑定会话数 / (云电脑资源总数 × 每台云电脑支持的最大会话数) × 100%```
         * 当会话占用率达到该阈值时，则会新建云电脑；未达到该阈值时，则删除多余的云电脑。
         * @example `0.85`
         */
        RatioThreshold: number;
        /**
         * 会话处于连接状态的最大时长。会话连接时长达到此值时将自动断开连接。单位：毫秒。
         * @example `3600000`
         */
        ConnectDuration: number;
        /**
         * 用户会话建立连接后，如果在该最大时长内，始终没有任何键盘或鼠标操作，则该会话断开连接。单位：毫秒。
         * @example `90000`
         */
        IdleDisconnectDuration: number;
        /**
         * 云电脑池版本号。
         * @example `2`
         */
        Version: number;
        /**
         * 空闲关机时间。当云电脑空闲时长达到该值时，自动关机。关机后如果有用户连接，会自动开机。单位：毫秒。
         * @example `900000`
         */
        StopDuration: number;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 操作系统类型。
         * @example `Windows`
         */
        OsType: string;
        /**
         * - 对于包年包月云电脑池：购买云电脑数量。取值范围：0~200。
         * - 对于按量付费云电脑池：池内云电脑最小创建数量。默认值为1，取值范围为0~`MaxDesktopsCount`。
         * @example `5`
         */
        BuyDesktopsCount: number;
        /**
         * 已创建的云电脑数量。
         * @example `2`
         */
        DesktopCount: number;
        /**
         * 目标云电脑规格。您可以调用[DescribeDesktopTypes](~~188882~~)查询无影云电脑支持的规格ID。
         * @example `eds.enterprise_office.4c4g`
         */
        DesktopType: string;
        /**
         * 每种状态下的云电脑数量列表。
         */
        CountPerStatus: {
            /**
             * 云电脑状态。
             * @example `Running`
             */
            Status: string;
            /**
             * 云电脑数量。
             * @example `10`
             */
            Count: number;
        }[];
        /**
         * GPU驱动版本。
         * @example `12`
         */
        GpuDriverVersion: string;
        /**
         * 子网ID。
         * @example `vsw-uf63bb6*****8gfytm`
         */
        SubnetId: string;
        /**
         * 标签列表
         */
        Tags: {
            /**
             * 标签键。
             * @example `desktop_group_name`
             */
            Key: string;
            /**
             * 标签值。
             * @example `ds-dq2mybjr23yw*****`
             */
            Value: string;
        }[];
    }[];
}
