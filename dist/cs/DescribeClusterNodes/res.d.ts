export interface DescribeClusterNodesResponse {
    /**
     * 节点详情列表。
     */
    nodes: {
        /**
         * 节点创建时间。
         * @example `2020-08-25T11:25:35+08:00`
         */
        creation_time: string;
        /**
         * 节点创建时错误信息。
         * @example `error***`
         */
        error_message: string;
        /**
         * 节点到期时间。
         * @example `2099-12-31T23:59:00+08:00`
         */
        expired_time: string;
        /**
         * 节点主机名。
         * @example `iZ2vcckdmxp7u0urj2k****`
         */
        host_name: string;
        /**
         * 节点使用的系统镜像ID。
         * @example `aliyun_2_1903_x64_20G_alibase_20200529.vhd`
         */
        image_id: string;
        /**
         * 节点付费类型。取值：
         * - `PrePaid`：预付费，包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付或信用支付，否则将返回`InvalidPayMethod`的错误提示。
         * - `PostPaid`：按量付费。
         * @example `PostPaid`
         */
        instance_charge_type: string;
        /**
         * 节点实例ID。
         * @example `i-2vcckdmxp7u0urj2****`
         */
        instance_id: string;
        /**
         * 节点在集群中的名称。
         * @example `worker-k8s-for-cs-c5cdf7e3938bc4f8eb0e44b21a80f****`
         */
        instance_name: string;
        /**
         * 节点角色类型：
         * - Master：集群Master节点。
         * - Worker：集群Worker节点。
         * @example `Worker`
         */
        instance_role: string;
        /**
         * 节点运行状态。
         * @example `Running`
         */
        instance_status: string;
        /**
         * 节点类型。
         * @example `ecs.c5.xlarge`
         */
        instance_type: string;
        /**
         * 节点所属ECS族名称。
         * @example `ecs.c5`
         */
        instance_type_family: string;
        /**
         * 节点IP地址。
         */
        ip_address: string[];
        /**
         * 是否为阿里云实例。取值：
         * - `true`：是阿里云实例。
         * - `false`：不是阿里云实例。
         * @example `true`
         */
        is_aliyun_node: boolean;
        /**
         * 节点名称，集群内节点标识。
         * @example `cn-chengdu.192.168.0.36`
         */
        node_name: string;
        /**
         * 节点是否就绪。取值：
         * - `Ready`：节点已就绪。
         * - `NotReady`：节点未就绪。
         * - `Unknown`：未知。
         * - `Offline`：离线中。
         * @example `Ready`
         */
        node_status: string;
        /**
         * 节点池ID。
         * @example `np0794239424a84eb7a95327369d56****`
         */
        nodepool_id: string;
        /**
         * 节点通过何种方式初始化，例如：手动创建或ROS创建。
         * @example `ess_attach`
         */
        source: string;
        /**
         * 节点运行状态。取值：
         * - `pending`：创建中。
         * - `running`：运行中。
         * - `starting`：启动中。
         * - `stopping`：停止中。
         * - `stopped`：已停止。
         * @example `running`
         */
        state: string;
        /**
         * 抢占式实例类型，取值：
         * - NoSpot：非抢占式实例。
         * - SpotWithPriceLimit：设置抢占实例价格上限。
         * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
         * @example `NoSpot`
         */
        spot_strategy: string;
    }[];
    /**
     * 分页信息。
     */
    page: {
        /**
         * 页码。
         * @example `1`
         */
        page_number: number;
        /**
         * 每页显示的记录数。
         * @example `10`
         */
        page_size: number;
        /**
         * 结果总数。
         * @example `5`
         */
        total_count: number;
    };
}
