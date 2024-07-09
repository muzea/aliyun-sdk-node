export interface DescribeContainerGroupStatusResponse {
    /**
     * 请求ID。
     * @example `1340C38D-6189-54D1-86F6-7D5ECF3E0088`
     */
    RequestId: string;
    /**
     * 下一个查询开始的Token。
     * @example `d78f2dd8-5979-42fe-****-b16db43be5bc`
     */
    NextToken: string;
    /**
     * 结果条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * ECI实例状态信息集合。
     */
    Data: {
        /**
         * ECI实例ID。
         * @example `eci-bp1jrgfqqy54kg5hc****`
         */
        ContainerGroupId: string;
        /**
         * ECI实例名称。
         * @example `nginx`
         */
        Name: string;
        /**
         * ECI实例所在命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * ECI实例状态。
         * @example `Running`
         */
        Status: string;
        /**
         * ECI实例UUID，对应K8s的POD UID。
         * @example `78ee0657-987g-b8b2-1f507dic4****`
         */
        uuid: string;
        /**
         * ECI实例的注解。
         * @example `"{\"tenancy.x-k8s.io/namespace\":\"redis\"}"`
         */
        Annotations: string;
        /**
         * ECI实例的状态信息。
         */
        PodStatus: {
            /**
             * Pod conditions信息。
             */
            Conditions: {
                /**
                 * condition类型。可能值：
                 * - PodReadyToStartContainers
                 * - Initialized
                 * - Ready
                 * - ContainersReady
                 * - PodScheduled
                 * - ContainerHasSufficientDisk
                 * - ContainerInstanceCreated
                 * - Unschedulable
                 * @example `Ready`
                 */
                type: string;
                /**
                 * condition状态。
                 * @example `True`
                 */
                status: string;
                /**
                 * 事件原因。
                 * @example `Completed`
                 */
                Reason: string;
                /**
                 * 事件消息。
                 * @example `Completed`
                 */
                Message: string;
                /**
                 * 最后一次状态变化时间。
                 * @example `2021-05-12T07:02:47Z`
                 */
                lastTransitionTime: string;
            }[];
            /**
             * 容器状态信息。
             */
            ContainerStatuses: {
                /**
                 * 容器镜像。
                 * @example `registry-vpc.cn-zhangjiakou.aliyuncs.com/eci_open/ubuntu:18.04`
                 */
                Image: string;
                /**
                 * 镜像ID。
                 * @example `registry-vpc.cn-zhangjiakou.aliyuncs.com/eci_open/ubuntu@sha256:134c7fe821b9d359490cd009ce7ca322453f4f2d018623f849e580a89a685e5d`
                 */
                ImageID: string;
                /**
                 * 容器名称。
                 * @example `ubuntu`
                 */
                Name: string;
                /**
                 * 容器是否Ready。
                 * @example `true`
                 */
                Ready: boolean;
                /**
                 * 重启次数。
                 * @example `1`
                 */
                RestartCount: number;
                /**
                 * 容器是否启动。
                 * @example `true`
                 */
                Started: boolean;
                /**
                 * 容器状态。包括：
                 * - Waiting
                 * - Running
                 * - Terminated
                 */
                State: {
                    /**
                     * 容器正在等待创建，还未开始运行。
                     */
                    Waiting: {
                        /**
                         * 事件原因。
                         * @example `Started`
                         */
                        Reason: string;
                        /**
                         * 事件消息。
                         * @example `Back-off`
                         */
                        Message: string;
                    };
                    /**
                     * 容器已经成功创建，并且正在运行。
                     */
                    Running: {
                        /**
                         * 开始时间。
                         * @example `2021-05-23T20:49:31Z`
                         */
                        StartedAtstartedAt: string;
                    };
                    /**
                     * 容器运行终止并退出，包括运行成功终止和运行失败终止。
                     */
                    Terminated: {
                        /**
                         * 容器ID。
                         * @example `containerd://3ff993933bea366c4719e43a1b067d89bc7f01f1f573981659a44ff17a******`
                         */
                        ContainerID: string;
                        /**
                         * 退出码。
                         * @example `0`
                         */
                        ExitCode: number;
                        /**
                         * 结束时间。
                         * @example `2021-05-23T20:55:31Z`
                         */
                        FinishedAt: string;
                        /**
                         * 开始时间。
                         * @example `2021-05-23T20:49:31Z`
                         */
                        StartedAt: string;
                        /**
                         * 信号码。
                         * @example `1`
                         */
                        Signal: number;
                        /**
                         * 事件原因。
                         * @example `Completed`
                         */
                        Reason: string;
                        /**
                         * 事件消息。
                         * @example `Completed`
                         */
                        Message: string;
                    };
                };
                /**
                 * 容器上一次状态。
                 */
                LastState: {
                    /**
                     * 容器正在等待创建，还未开始运行。
                     */
                    Waiting: {
                        /**
                         * 事件原因。
                         * @example `Started`
                         */
                        Reason: string;
                        /**
                         * 事件消息。
                         * @example `Back-off`
                         */
                        Message: string;
                    };
                    /**
                     * 容器已经成功创建，并且正在运行。
                     */
                    Running: {
                        /**
                         * 开始时间。
                         * @example `2021-05-23T20:49:31Z`
                         */
                        StartedAtstartedAt: string;
                    };
                    /**
                     * 容器运行终止并退出，包括运行成功终止和运行失败终止。
                     */
                    Terminated: {
                        /**
                         * 容器ID。
                         * @example `containerd://3ff993933bea366c4719e43a1b067d89bc7f01f1f573981659a44ff17a******`
                         */
                        ContainerID: string;
                        /**
                         * 退出码。
                         * @example `0`
                         */
                        ExitCode: number;
                        /**
                         * 结束时间。
                         * @example `2021-05-23T20:49:31Z`
                         */
                        FinishedAt: string;
                        /**
                         * 开始时间。
                         * @example `2021-05-12T07:02:52Z`
                         */
                        StartedAt: string;
                        /**
                         * 信号码。
                         * @example `1`
                         */
                        Signal: number;
                        /**
                         * 事件原因。
                         * @example `Completed`
                         */
                        Reason: string;
                        /**
                         * 事件消息。
                         * @example `Completed`
                         */
                        Message: string;
                    };
                };
            }[];
            /**
             * 主机IP。
             * @example `192.168.XX.XX`
             */
            HostIp: string;
            /**
             * Pod生命周期阶段。
             * @example `Running`
             */
            Phase: string;
            /**
             * Pod IP地址。
             * @example `192.168.XX.XX`
             */
            PodIp: string;
            /**
             * Pod IP地址集合。
             */
            PodIps: {
                /**
                 * Pod IP地址。
                 * @example `192.168.XX.XX`
                 */
                Ip: string;
            }[];
            /**
             * Pod Qos。
             * @example `Guaranteed`
             */
            QosClass: string;
            /**
             * 容器开始运行时间。
             * @example `2021-05-12T07:02:47Z`
             */
            StartTime: string;
        };
    }[];
}
