export interface DescribeAlarmsResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `871C7C53-34A4-45AA-8C14-4B72FA6A****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 报警任务的总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 报警任务的列表。
     */
    AlarmList: {
        /**
         * 报警任务ID。
         * @example `asg-bp1hvbnmkl10vll5****_f95ce797-dc2e-4bad-9618-14fee7d1****`
         */
        AlarmTaskId: string;
        /**
         * 监控项名称。可能值：
         * - CpuUtilization：（ECS）CPU使用率（%）。
         * - ConcurrentConnections：（ECS）ECS同时连接数（个）。
         * - IntranetTx：（ECS）内网出流量（Kb/min）。
         * - IntranetRx：（ECS）内网入流量（Kb/min）。
         * - VpcInternetTx：（ECS）外网出流量（Kb/min）。
         * - VpcInternetRx：（ECS）外网入流量（Kb/min）。
         * - SystemDiskReadBps：（ECS）系统盘读BPS（Byte/s）。
         * - SystemDiskWriteBps：（ECS）系统盘写BPS（Byte/s）。
         * - SystemDiskReadOps：（ECS）系统盘读IOPS（次/s）。
         * - SystemDiskWriteOps：（ECS）系统盘写IOPS（次/s）。
         * - CpuUtilizationAgent：（Agent）CPU使用率（%）。
         * - GpuUtilizationAgent：（Agent）GPU使用率（%）。
         * - GpuMemoryFreeUtilizationAgent：（Agent）GPU内存空闲率（%）。
         * - GpuMemoryUtilizationAgent：（Agent）GPU内存使用率（%）。
         * - MemoryUtilization：（Agent）内存（%）。
         * - LoadAverage：（Agent）系统平均负载。
         * - TcpConnection：（Agent）TCP总连接数（个）。
         * - TcpConnection：（Agent）TCP已建立连接数（个）。
         * - PackagesNetOut：（Agent）内网网卡发包数（个/s）。
         * - PackagesNetIn：（Agent）内网网卡收包数（个/s）。
         * - PackagesNetOut：（Agent）外网网卡发包数（个/s）。
         * - PackagesNetIn：（Agent）外网网卡收包数（个/s）。
         * - EciPodCpuUtilization：CPU使用率（%）。
         * - EciPodMemoryUtilization：内存（%）。
         * - LoadBalancerRealServerAverageQps：（ALB）服务器组单机QPS（次/s）。
         * 更多信息，请参见[系统监控报警任务](~~74854~~)。
         * @example `CpuUtilization`
         */
        MetricName: string;
        /**
         * 触发执行伸缩规则需要满足阈值表达式的次数，例如，CPU使用率平均值3次的统计结果均大于等于80%。
         * @example `3`
         */
        EvaluationCount: number;
        /**
         * 报警任务的状态。可能值：
         * - ALARM：报警，已满足报警条件。
         * - OK：正常，尚未满足报警条件。
         * - INSUFFICIENT_DATA：数据不足，不足以判断是否满足了报警条件。
         * @example `ALARM`
         */
        State: string;
        /**
         * 统计监控项数据的周期，单位为秒。可能值：
         * - 15。
         * - 60。
         * - 120。
         * - 300。
         * - 900。
         * > 仅ECS类型的伸缩组支持设置15秒的统计周期。
         * @example `300`
         */
        Period: number;
        /**
         * 报警任务关联的伸缩组的ID。
         * @example `asg-bp18p2yfxow2dloq****`
         */
        ScalingGroupId: string;
        /**
         * 监控项统计值与阈值的比较符，用于指定监控项统计值与阈值在什么关系下满足条件。可能值：
         * - 监控项统计值大于等于阈值。取值：>=。
         * - 监控项统计值小于等于阈值。取值：<=。
         * - 监控项统计值大于阈值。取值：>。
         * - 监控项统计值小于阈值。取值：<。
         * @example `>=`
         */
        ComparisonOperator: string;
        /**
         * 指定报警任务的生效时间段。
         * @example `* * * * * ?`
         */
        Effective: string;
        /**
         * 报警任务的描述。
         * @example `Test alarm task.`
         */
        Description: string;
        /**
         * 监控项类型。可能值：
         * - system：使用云监控系统指标。
         * - custom：使用上报到云监控的自定义指标。
         * @example `system`
         */
        MetricType: string;
        /**
         * 报警任务的名称。
         * @example `TestAlarmTask`
         */
        Name: string;
        /**
         * 监控指标的阈值，满足阈值表达式达到指定次数即触发执行伸缩规则。
         * @example `80.0`
         */
        Threshold: number;
        /**
         * 报警任务是否启用。可能值：
         * - true：已启用。
         * - false：已停用。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 统计监控项数据的方法。可能值：
         * - Average：平均值。
         * - Minimum：最小值。
         * - Maximum：最大值。
         * @example `Average`
         */
        Statistics: string;
        /**
         * 监控项关联的维度信息。
         */
        Dimensions: {
            /**
             * 监控项关联的维度信息键，可能值：
             * - user_id：您的账号ID。
             * - scaling_group：被监控的伸缩组。
             * - device：网卡设备的类型。
             * - state：TCP连接的状态。
             * @example `device`
             */
            DimensionKey: string;
            /**
             * 监控项关联的维度信息值，取值范围由维度信息键决定。
             * - `user_id`：由系统自动填充。
             * - `scaling_group`：由系统自动填充。
             * - `device`取值范围：
             *     - eth0：对于经典网络实例，eth0表示内网网卡。对于VPC实例，只存在eth0一张网卡。
             *     - eth1：对于经典网络实例，eth1代表外网网卡。
             * - `state`取值范围：
             *     - TCP_TOTAL：表示总的TCP连接数。
             *     - ESTABLISHED：表示已建立的TCP连接数。
             * @example `eth0`
             */
            DimensionValue: string;
        }[];
        /**
         * 报警任务关联伸缩规则的唯一标识符的列表。
         */
        AlarmActions: string[];
        /**
         * 多指标报警规则的相关信息。
         */
        Expressions: {
            /**
             * 多指标报警规则的监控指标名称。可能值：
             * - CpuUtilization：（ECS）CPU使用率（%）。
             * - ConcurrentConnections：（ECS）ECS同时连接数（个）。
             * - IntranetTx：（ECS）内网出流量（Kb/min）。
             * - IntranetRx：（ECS）内网入流量（Kb/min）。
             * - VpcInternetTx：（ECS）外网出流量（Kb/min）。
             * - VpcInternetRx：（ECS）外网入流量（Kb/min）。
             * - SystemDiskReadBps：（ECS）系统盘读BPS（Byte/s）。
             * - SystemDiskWriteBps：（ECS）系统盘写BPS（Byte/s）。
             * - SystemDiskReadOps：（ECS）系统盘读IOPS（次/s）。
             * - SystemDiskWriteOps：（ECS）系统盘写IOPS（次/s）。
             * - CpuUtilizationAgent：（Agent）CPU使用率（%）。
             * - GpuUtilizationAgent：（Agent）GPU使用率（%）。
             * - GpuMemoryFreeUtilizationAgent：（Agent）GPU内存空闲率（%）。
             * - GpuMemoryUtilizationAgent：（Agent）GPU内存使用率（%）。
             * - MemoryUtilization：（Agent）内存（%）。
             * - LoadAverage：（Agent）系统平均负载。
             * - TcpConnection：（Agent）TCP总连接数（个）。
             * - TcpConnection：（Agent）TCP已建立连接数（个）。
             * - PackagesNetOut：（Agent）内网网卡发包数（个/s）。
             * - PackagesNetIn：（Agent）内网网卡收包数（个/s）。
             * - PackagesNetOut：（Agent）外网网卡发包数（个/s）。
             * - PackagesNetIn：（Agent）外网网卡收包数（个/s）。
             * - EciPodCpuUtilization：CPU使用率（%）。
             * - EciPodMemoryUtilization：内存（%）。
             * - LoadBalancerRealServerAverageQps：（ALB）服务器组单机QPS（次/s）。
             * 更多信息，请参见[系统监控报警任务](~~74854~~)。
             * @example `CpuUtilization`
             */
            MetricName: string;
            /**
             * 多指标报警规则的监控项统计值与阈值的比较符，用于指定监控项统计值与阈值在什么关系下满足条件。可能值：
             * - 监控项统计值大于等于阈值。取值：>=。
             * - 监控项统计值小于等于阈值。取值：<=。
             * - 监控项统计值大于阈值。取值：>。
             * - 监控项统计值小于阈值。取值：<。
             * @example `>=`
             */
            ComparisonOperator: string;
            /**
             * 多指标报警规则中统计监控项数据的周期，单位为秒。可能值：
             * - 15。
             * - 60。
             * - 120。
             * - 300。
             * - 900。
             * >仅当监控ECS类型伸缩组时，使用云监控（Agent开头的监控项）客户端采集的监控项指标，才可以选择15秒的统计周期。
             * @example `900`
             */
            Period: number;
            /**
             * 多指标报警规则中统计监控项数据的方法。可能值：
             * - Average：平均值。
             * - Minimum：最小值。
             * - Maximum：最大值。
             * @example `Average`
             */
            Statistics: string;
            /**
             * 多指标报警规则中监控指标的阈值，满足阈值表达式达到指定次数即触发执行伸缩规则。
             * @example `40.0`
             */
            Threshold: number;
        }[];
        /**
         * 多指标报警条件之间的关系。可能值：
         * - `&&`：当所有监控指标都符合报警条件时，才能触发报警。即当多指标报警规则下的表达式均为`true`时，才能触发报警。
         * - `||`：如果其中一个指标符合报警条件，即可触发报警。
         * @example `&&`
         */
        ExpressionsLogicOperator: string;
    }[];
}
