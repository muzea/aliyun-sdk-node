export interface ListNodesResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `89A1AC0F-4A6C-4F3D-98F9-BEF9A823****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Nodes: {
        /**
         * 节点列表信息。
         */
        NodeInfo: {
            /**
             * 专有网络ID。
             * @example `vpc-bp1gnu8br4ay7beb2w****`
             */
            VpcId: string;
            /**
             * 节点状态。可能值：
             * - uninit：安装中
             * - exception：异常
             * - running：运行中
             * - initing：初始化中
             * - releasing：释放中
             * - untracking：未加入集群
             * - stopped：已停止
             * @example `running`
             */
            Status: string;
            /**
             * 是否开启超线程。
             * @example `true`
             */
            HtEnabled: boolean;
            /**
             * 包年包月付费节点是否到期。如果是按量付费节点，返回值为false。
             * @example `false`
             */
            Expired: boolean;
            /**
             * 镜像类型。可能值：
             * - system：公共镜像
             * - self：自定义镜像
             * - others：共享镜像
             * - marketplace：镜像市场镜像
             * @example `system`
             */
            ImageOwnerAlias: string;
            /**
             * 节点被锁定类型。可能值：
             * - financial：因欠费被锁定。
             * - security：因安全原因被锁定。
             * - recycling：抢占式实例的待释放锁定状态。
             * - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
             * 默认返回为空字符串。
             * @example `financial`
             */
            LockReason: string;
            /**
             * 节点名称。
             * @example `test-HostName`
             */
            HostName: string;
            /**
             * 节点实例规格。
             * @example `ecs.c5.large`
             */
            InstanceType: string;
            /**
             * 公网IP地址。
             * @example `172.16.**.**`
             */
            PublicIpAddress: string;
            /**
             * 计算节点竞价策略。
             * @example `NoSpot`
             */
            SpotStrategy: string;
            /**
             * 是否由E-HPC创建。
             * - true：E-HPC创建
             * - false：非E-HPC创建
             * @example `true`
             */
            CreatedByEhpc: boolean;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 交换机ID。
             * @example `vsw-bp1e47optm9g58zcu****`
             */
            VSwitchId: string;
            /**
             * 节点IP地址。
             * @example `172.16.**.**`
             */
            IpAddress: string;
            /**
             * 包年包月付费节点到期时间。如果是按量付费节点，返回值为空。
             * @example `2020-06-09T06:22:02.000Z`
             */
            ExpiredTime: string;
            /**
             * 集群客户端版本。
             * @example `1.0.78`
             */
            Version: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            /**
             * 加入集群的时间。
             * @example `2020-06-09T06:22:02.000Z`
             */
            AddTime: string;
            /**
             * 镜像ID。
             * @example `centos_7_06_64_20G_alibase_20190711.vhd`
             */
            ImageId: string;
            /**
             * 节点所在位置。可能值：
             * - OnPremise：本地节点
             * - PublicCloud：公共云节点
             * @example `PublicCloud`
             */
            Location: string;
            /**
             * 节点ID。
             * @example `i-bp15707mys2rsy0j****`
             */
            Id: string;
            /**
             * 节点创建方式。可能值：
             * - manual：手动扩容
             * - autoscale：自动扩容
             * @example `manual`
             */
            CreateMode: string;
            Roles: {
                /**
                 * 节点类别。可能值：
                 * - Scheduler：主调度器
                 * - SchedulerBackup：备用调度器
                 * - Account：主域服务器
                 * - AccountBackup：备用域服务器
                 * - Login：登录节点
                 * - Compute：计算节点
                 * 调度器和域服务器都属于管控节点。
                 */
                Role: string[];
            };
            /**
             * 该节点使用的资源总量。
             */
            TotalResources: {
                /**
                 * GPU卡个数。
                 * @example `0`
                 */
                Gpu: number;
                /**
                 * CPU个数。
                 * @example `1`
                 */
                Cpu: number;
                /**
                 * 内存资源总量。单位：GB
                 * @example `1024`
                 */
                Memory: number;
            };
            /**
             * 计算节点资源使用量，其他类型节点返回值为空。
             */
            UsedResources: {
                /**
                 * GPU卡个数。
                 * @example `0`
                 */
                Gpu: number;
                /**
                 * CPU个数。
                 * @example `0`
                 */
                Cpu: number;
                /**
                 * 内存资源总量。单位：GB
                 * @example `0`
                 */
                Memory: number;
            };
            /**
             * 从调度器查看到的节点状态，不同调度器状态不同。
             * @example `active`
             */
            StateInSched: string;
        }[];
    };
}
