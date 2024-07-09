export interface ListQueuesResponse {
    /**
     * 请求ID。
     * @example `C6E5005C-00B0-4F27-98BB-95AB88016C22`
     */
    RequestId: string;
    Queues: {
        /**
         * 队列详细信息。
         */
        QueueInfo: {
            /**
             * 队列类型。可能值：
             * - Execution：可以执行作业的队列。
             * - Router：不能执行作业，只会将接受的作业转发至绑定的Execution队列执行。
             * @example `Execution`
             */
            Type: string;
            /**
             * 队列中计算节点的主机名前缀名称。
             * @example `compute`
             */
            HostNamePrefix: string;
            /**
             * 队列名称。
             * @example `workq`
             */
            QueueName: string;
            /**
             * 队列是否启动自动扩容。可能值：
             * - true：已启动
             * - false：未启动
             * @example `false`
             */
            EnableAutoGrow: boolean;
            /**
             * 队列所属资源组ID。
             * @example `rg-acfmxp7uc24****`
             */
            ResourceGroupId: string;
            /**
             * 镜像ID。
             * @example `centos_7_06_64_20G_alibase_20****.vhd`
             */
            ImageId: string;
            /**
             * 队列中计算节点的主机名后缀名称。
             * @example `01`
             */
            HostNameSuffix: string;
            /**
             * 计算节点抢占策略。可能值：
             * - NoSpot：正常按量付费实例。
             * - SpotWithPriceLimit：设置上限价格的抢占式实例。
             * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
             * @example `NoSpot`
             */
            SpotStrategy: string;
            SpotInstanceTypes: {
                /**
                 * 抢占式实例信息。
                 */
                Instance: {
                    /**
                     * 抢占式实例的规格。
                     * @example `ecs.n1.tiny`
                     */
                    InstanceType: string;
                    /**
                     * 实例的每小时最高价格，支持最多3位小数。参数SpotStrategy取值为SpotWithPriceLimit时生效。
                     * @example `0.062`
                     */
                    SpotPriceLimit: number;
                }[];
            };
            ComputeInstanceType: {
                /**
                 * 计算节点的实例规格。
                 */
                InstanceType: string[];
            };
            /**
             * 部署集ID。
             * 您可以通过[DescribeDeploymentSets](~~91313~~)获取部署集ID，当前仅支持网络低时延策略的部署集。
             * @example `ds-bp1frxuzdg87zh4pzq****`
             */
            DeploymentSetId: string;
            /**
             * 是否使用弹性伸缩组。
             * @example `false`
             */
            UseESS: boolean;
            /**
             * 弹性网卡的通讯模式。取值范围：
             * - Standard：使用TCP通讯模式。
             * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
             * @example `Standard`
             */
            NetworkInterfaceTrafficMode: string;
        }[];
    };
}
