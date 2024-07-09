export interface GetDesktopGroupDetailResponse {
    /**
     * 请求ID。
     * @example `1B5268CE-5EB3-545F-9F38-A8BCF710****`
     */
    RequestId: string;
    /**
     * 云电脑池信息。
     */
    Desktops: {
        /**
         * 云电脑池的状态。
         * @example `1`
         */
        Status: number;
        /**
         * 创建时间。
         * @example `2020-11-06T08:28Z`
         */
        CreationTime: string;
        /**
         * 付费类型。
         * @example `PrePaid`
         */
        PayType: string;
        /**
         * 云电脑重置类型。
         * @example `0`
         */
        ResetType: number;
        /**
         * 多会话云电脑池的负载均衡策略。
         * @example `0`
         */
        LoadPolicy: number;
        /**
         * 云电脑池关联的策略名称。
         * @example `All enabled policy`
         */
        PolicyGroupName: string;
        /**
         * 创建者的阿里云账号ID。
         * @example `155177335370****`
         */
        Creator: string;
        /**
         * 按量付费云电脑池内能容纳的云电脑最大数量。
         * @example `3`
         */
        MaxDesktopsCount: number;
        /**
         * 是否允许包年包月云电脑池自动创建云电脑。
         * @example `1`
         */
        AllowAutoSetup: number;
        /**
         * 资源类型，目前仅支持ECS。
         * @example `0`
         */
        ResType: number;
        /**
         * 系统盘容量。单位为GiB。
         * @example `80`
         */
        SystemDiskSize: number;
        /**
         * 云电脑池关联的策略ID。
         * @example `pg-9cktlowtxfl6****`
         */
        PolicyGroupId: string;
        /**
         * 云电脑模板ID。
         * @example `b-1se9fb37r5tfq****`
         */
        OwnBundleId: string;
        /**
         * GPU核数。
         * @example `4`
         */
        GpuCount: number;
        /**
         * 按量付费云电脑池内允许预留的云电脑数量。取值范围：
         * - 0：不预留
         * - N：预留N台（1≤N≤100）
         * @example `1`
         */
        AllowBufferCount: number;
        /**
         * 内存大小。单位为MiB。
         * @example `4096`
         */
        Memory: number;
        /**
         * GPU规格。
         * @example `NVIDIA T4`
         */
        GpuSpec: string;
        /**
         * 目录ID（办公网络ID）。
         * @example `cn-hangzhou+dir-363353****`
         */
        DirectoryId: string;
        /**
         * 云电脑模板名称。
         * @example `BundleDemo`
         */
        OwnBundleName: string;
        /**
         * 用户磁盘类型。
         * @example `cloud_essd`
         */
        DataDiskCategory: string;
        /**
         * 要查询的云电脑池名称。
         * @example `CloudComputerPool01
        `
         */
        DesktopGroupName: string;
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
         * 系统盘类型。
         * @example `cloud_essd`
         */
        SystemDiskCategory: string;
        /**
         * 办公网络ID。
         * @example `cn-hangzhou+dir-990541****`
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
         * 用户磁盘容量。单位为GiB。
         * @example `80`
         */
        DataDiskSize: string;
        /**
         * 云电脑池ID。
         * @example `dg-3uiojcc0j4kh7****`
         */
        DesktopGroupId: string;
        /**
         * 云电脑池所属的办公网络名称。
         * @example `test`
         */
        OfficeSiteName: string;
        /**
         * 目录类型。
         * @example `SIMPLE`
         */
        DirectoryType: string;
        /**
         * vCPU核数。
         * @example `4`
         */
        Cpu: number;
        /**
         * 包年包月云电脑池的到期时间。
         * @example `2021-12-31T15:59Z`
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
         * 定时时间列表。
         */
        TimerInfos: {
            /**
             * 状态。
             * @example `1`
             */
            Status: number;
            /**
             * Cron表达式。
             * @example `0 58 11 ? * 2`
             */
            CronExpression: string;
            /**
             * 定时任务类型。
             * @example `1`
             */
            TimerType: number;
            /**
             * 是否强制执行该定时任务。
             * @example `false`
             */
            Forced: boolean;
        }[];
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
         * @example `900000`
         */
        IdleDisconnectDuration: number;
        /**
         * 云电脑池版本号。
         * @example `2`
         */
        Version: number;
        /**
         * 空闲关机时间。当云电脑空闲时长达到该值时，自动关机。关机后如果有用户连接，会自动开机。单位：毫秒。
         * @example `180000`
         */
        StopDuration: number;
        /**
         * 是否开启用户数据漫游。
         * @example `false`
         */
        ProfileFollowSwitch: boolean;
        /**
         * 用户数据漫游功能使用的NAS文件系统ID。
         * @example `0783b4****`
         */
        NasFileSystemID: string;
        /**
         * 用户数据漫游功能使用的NAS文件系统名称。
         * @example `abcd`
         */
        NasFileSystemName: string;
        /**
         * 定时应用信息。
         * @example `abcd`
         */
        TimingStrategyInfo: string;
        /**
         * 定时任务信息。
         */
        ScaleTimerInfos: {
            /**
             * 定时任务类型。
             * @example `rise`
             */
            Type: string;
            /**
             * 定时任务的Cron表达式。
             * @example `0 0 0 * * ? `
             */
            Cron: string;
            /**
             * 多会话云电脑池的负载均衡策略。
             * @example `1`
             */
            LoadPolicy: number;
            /**
             * 伸缩策略参数之一：购买云电脑数。取值范围：0~200。
             * @example `5`
             */
            BuyResAmount: number;
            /**
             * 伸缩策略参数之一：云电脑最小数量。取值范围：0~200。
             * @example `1`
             */
            MinResAmount: number;
            /**
             * 伸缩策略参数之一：云电脑最大数量。取值范围：0~200。
             * @example `100`
             */
            MaxResAmount: number;
            /**
             * 会话断开连接后继续保留的时间。单位为毫秒，取值范围为180000（3分钟）~345600000（4天）。取值为0时，表示始终保留。
             * 当会话因为用户主动断开或因为其他因素意外断开时，从断开的时刻开始计算，若在该保留时长内用户始终未重新建立与该会话的连接，则该会话注销，未保存的数据都将销毁；若在该保留时长内，用户重新建立连接成功，则仍可进入原来的会话，仍可访问对话断开之前的数据。
             * @example `180000`
             */
            KeepDuration: number;
            /**
             * 会话占用率阈值，用作多会话云电脑池的自动伸缩触发条件。会话占用率的计算公式为：
             * ```会话占用率 = 已绑定会话数 / (云电脑资源总数 × 每台云电脑支持的最大会话数) × 100%```
             * 当会话占用率达到该阈值时，则会新建云电脑；未达到该阈值时，则删除多余的云电脑。
             * @example `0.85`
             */
            RatioThreshold: number;
        }[];
        /**
         * 云电脑池关联的策略ID列表。
         */
        PolicyGroupIds: string[];
        /**
         * 云电脑池关联的策略名称列表。
         */
        PolicyGroupNames: string[];
        /**
         * - 对于包年包月云电脑池：购买云电脑数量。取值范围：0~200。
         * - 对于按量付费云电脑池：池内云电脑最小创建数量。默认值为1，取值范围为0~`MaxDesktopsCount`。
         * @example `5`
         */
        BuyDesktopsCount: number;
        /**
         * 镜像ID。
         * @example `m-4zfb6zj728hhr****`
         */
        ImageId: string;
    };
}
