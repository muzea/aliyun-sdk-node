export interface DescribeExpressConnectTrafficQosResponse {
    /**
     * 请求ID。
     * @example `4CF20CC7-D1FC-425B-A15B-DF7C8E2131A7`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 返回结果总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 列表当前条目数。
     * @example `1`
     */
    Count: string;
    /**
     * QoS策略信息列表。
     */
    QosList: {
        /**
         * QoS策略ID。
         * @example `qos-pksbqfmotl5hzq****`
         */
        QosId: string;
        /**
         * QoS策略的名称。
         * 长度为**0**～**128**个字符，不能以`http://`或`https://`开头。
         * @example `qos-test`
         */
        QosName: string;
        /**
         * QoS策略的描述信息。
         * 长度为**0**～**256**个字符，不能以`http://`或`https://`开头。
         * @example `qos-test`
         */
        QosDescription: string;
        /**
         * QoS策略的状态。取值：
         * - **Normal**：可用。
         * - **Configuring**：配置中。
         * > 处于配置中状态的QoS将会限制绝大部分的QoS策略、QoS队列，QoS规则的创建、更新和删除操作。
         * @example `Normal`
         */
        Status: string;
        /**
         * QoS策略整体配置进度，取值范围为：**0**~**100**。
         * @example `100`
         */
        Progressing: number;
        /**
         * 关联实例列表。
         */
        AssociatedInstanceList: {
            /**
             * 关联实例的ID。
             * @example `pc-bp159zj8zujwy3p07****`
             */
            InstanceId: string;
            /**
             * 关联实例的类型。取值：**PHYSICALCONNECTION**物理专线。
             * @example `PHYSICALCONNECTION`
             */
            InstanceType: string;
            /**
             * 关联实例的状态。取值：
             * - **Normal**：可用。
             * - **Configuring**：配置中。
             * - **Deleting**：删除中。
             * @example `Normal`
             */
            InstanceStatus: string;
            /**
             * 关联实例的配置进度，取值范围为：**0**~**100**。
             * @example `100`
             */
            InstanceProgressing: number;
        }[];
        /**
         * QoS队列列表。
         */
        QueueList: {
            /**
             * QoS策略ID。
             * @example `qos-pksbqfmotl5hzq****`
             */
            QosId: string;
            /**
             * QoS队列ID。
             * @example `qos-queue-9nyx2u7n71s2rc****`
             */
            QueueId: string;
            /**
             * QoS队列类型，取值：
             * - **High**：高优先级队列。
             * - **Medium**：普通优先级队列。
             * - **Default**：默认优先级队列。
             * > 默认优先级队列无法创建。
             * @example `High`
             */
            QueueType: string;
            /**
             * QoS队列带宽百分比。
             * * 当QoS队列类型为**Medium**的时候，此字段必须输入，取值范围为：**1**~**100**。
             * * 当QoS队列类型为**Default**的时候，此字段为"-"。
             * @example `100`
             */
            BandwidthPercent: string;
            /**
             * QoS队列的名称。
             * 长度为**0**～**128**个字符，不能以`http://`或`https://`开头。
             * @example `qos-queue-test`
             */
            QueueName: string;
            /**
             * QoS队列的描述信息。
             * 长度为**0**～**256**个字符，不能以`http://`或`https://`开头。
             * @example `qos-queue-test`
             */
            QueueDescription: string;
            /**
             * QoS队列的状态。取值：
             * - **Normal**：可用。
             * - **Configuring**：配置中。
             * - **Deleting**：删除中。
             * @example `Normal`
             */
            Status: string;
        }[];
    }[];
}
