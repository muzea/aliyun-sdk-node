export interface DescribeInstancesResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求 id
     * @example `XXX-XXX`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 实例信息列表。
     */
    Instances: {
        /**
         * 实例状态：
         * * Creating：创建中
         * * Starting：启动中
         * * Stopping：停止中
         * * Stopped：已停止
         * * Initializing：初始化
         * * Unregistered：未注册
         * * Registered：已注册
         * * InUse：使用中
         * * Missing：丢失
         * * Cloning：镜像制作中
         * @example `Stopped`
         */
        Status: string;
        /**
         * 过期时间。
         * @example `2099-12-31T15:59Z`
         */
        ExpireTime: string;
        /**
         * 工作模式
         * * Desktop：桌面模式
         * * Application：应用模式
         * @example `Application`
         */
        WorkMode: string;
        /**
         * 创建时间。
         * @example `2019-10-12T07:35Z`
         */
        CreateTime: string;
        /**
         * 实例停止时的计费状态。
         * * KeepCharging：收费中，例如用户通过 Windows 内部关机
         * * StopCharging：停止收费
         * * Not-applicable：不适用。例如包年包月实例
         * @example `停止`
         */
        StoppedMode: string;
        /**
         * 分配的用户 id
         * > 实例未分配给指定用户时，此值为空。
         * @example `1234`
         */
        UserUid: number;
        /**
         * 主机名称，实例创建时自动生成。不可更改，否则会导致实例状态“未注册”
         * @example `c0-i01-xx-t6`
         */
        HostName: string;
        /**
         * 实例 id
         * @example `i-xxx`
         */
        InstanceId: string;
        /**
         * 实例类型。
         * @example `ecs.g6.large`
         */
        InstanceType: string;
        /**
         * 实例所在的集群所关联的用户 AD。当集群未做 AD 关联或集群不支持 AD 关联时，此值为空。
         * @example `abc.com`
         */
        DomainName: string;
        /**
         * 计费方式：
         * * PrePaid：包年包月
         * * PostPaid：按量付费
         * @example `PostPaid`
         */
        InstanceChargeType: string;
        /**
         * 公网入带宽最大值，单位为 Mbps
         * @example `100`
         */
        MaxBandwidthIn: number;
        /**
         * 当前调用者是否已分配给当前实例
         * * true：是
         * * false：否
         * @example `true`
         */
        IsBoundUser: boolean;
        /**
         * 公网出带宽最大值，单位为 Mbps
         * @example `100`
         */
        MaxBandwidthOut: number;
        /**
         * 实例名称，用户可以自行设置
         * @example `c0-i01-xx-t6-2c8g`
         */
        Name: string;
        /**
         * 分配的用户名。
         * > 实例未分配给指定用户时，此值为空。
         * @example `user-xxx`
         */
        UserName: string;
        /**
         * 实例创建时所使用的镜像 id。
         * @example `m-xxx`
         */
        ImageId: string;
        /**
         * 集群 id
         * @example `gws-xxx`
         */
        ClusterId: string;
        /**
         * 应用列表。
         * > 工作模式为`桌面模式`时，此列表为空
         */
        AppList: {
            /**
             * 应用名称。
             * @example `notepad`
             */
            AppName: string;
            /**
             * 应用的运行参数。
             * @example `c:\temp.txt`
             */
            AppArgs: string;
            /**
             * 应用的运行路径。
             * @example `c:\windows\system32\nodepad.exe`
             */
            AppPath: string;
        }[];
    }[];
}
