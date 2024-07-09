export interface ListNodesByQueueResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B405FF19-2D5F-4489-A84C-BC15CC1B24BD`
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
             * - uninit：未初始化
             * - init：初始化中
             * - ready：空闲
             * - running：运行中
             * - exception：异常
             * - untracking：未加入集群
             * @example `untracking`
             */
            Status: string;
            /**
             * 是否启用HT。
             * @example `true`
             */
            HtEnabled: boolean;
            /**
             * 包年包月节点是否到期。如果是按量付费节点，则为false。
             * @example `false`
             */
            Expired: boolean;
            /**
             * 镜像类型，可能值：
             * - system：公共镜像
             * - self：自定义镜像
             * - others：共享镜像
             * - marketplace：镜像市场镜像
             * @example `system`
             */
            ImageOwnerAlias: string;
            /**
             * 节点被锁定类型，可能值：
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
             * @example `compute0`
             */
            HostName: string;
            /**
             * 节点的公网IP地址。
             * @example `10.34.**.**`
             */
            PublicIpAddress: string;
            /**
             * 实例的抢占策略。可能值：
             * - NoSpot：正常按量付费实例。
             * - SpotWithPriceLimit：设置上限价格的抢占式实例。
             * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
             * @example `NoSpot`
             */
            SpotStrategy: string;
            /**
             * 是否由E-HPC创建的节点。
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
             * 节点私网IP地址。
             * @example `172.168.**.**`
             */
            IpAddress: string;
            /**
             * 包年包月节点到期时间。如果是按量付费节点，则此项为空。
             * @example `2020-09-18T13:24:29.000Z`
             */
            ExpiredTime: string;
            /**
             * 集群所使用的客户端版本号。
             * @example `1.0.64`
             */
            Version: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            /**
             * 节点加入集群的时间。
             * @example `2019-09-18T13:24:29.000Z`
             */
            AddTime: string;
            /**
             * 镜像ID。
             * @example `centos_7_02_64_20G_alibase_20170818****`
             */
            ImageId: string;
            /**
             * 节点所在位置。可能值：
             * - OnPremise：混合云集群。
             * - PublicCloud：公有云集群。
             * @example `PublicCloud`
             */
            Location: string;
            /**
             * 节点实例ID。
             * @example `i-bp13p7vlcb1uihfv****`
             */
            Id: string;
            /**
             * 节点创建方式。可能值：
             * - manual：手动扩容
             * - autoscale：自动扩容
             * @example `manual`
             */
            CreateMode: string;
            /**
             * 资源总量。
             */
            TotalResources: {
                /**
                 * GPU资源总量。单位：卡
                 * @example `0`
                 */
                Gpu: number;
                /**
                 * CPU资源总量。单位：核
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
                 * GPU资源总量。单位：卡
                 * @example `0`
                 */
                Gpu: number;
                /**
                 * CPU资源总量。单位：核
                 * @example `1`
                 */
                Cpu: number;
                /**
                 * 内存资源总量。单位：GB
                 * @example `1`
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
