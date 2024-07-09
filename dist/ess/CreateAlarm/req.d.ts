export interface CreateAlarmRequest {
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报警任务的名称。
     * @example `TestAlarmTask`
     */
    "Name"?: string;
    /**
     * 报警任务的描述。
     * @example `Test alarm task.`
     */
    "Description"?: string;
    /**
     * 报警任务关联的伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * 监控项名称。取值范围与报警任务的监控类型有关：
     * - 当报警任务为自定义监控类型（即MetricType=custom）时，取值范围是您自有的监控项范围。
     * - 当报警任务为系统监控类型（即MetricType=system）时，取值范围如下：
     *     - CpuUtilization：（ECS）CPU使用率（%）。
     *     - ConcurrentConnections：（ECS）ECS同时连接数（个）。
     *     - IntranetTx：（ECS）内网出流量（Kb/min）。
     *     - IntranetRx：（ECS）内网入流量（Kb/min）。
     *     - VpcInternetTx：（ECS）外网出流量（Kb/min）。
     *     - VpcInternetRx：（ECS）外网入流量（Kb/min）。
     *     - SystemDiskReadBps：（ECS）系统盘读BPS（Byte/s）。
     *     - SystemDiskWriteBps：（ECS）系统盘写BPS（Byte/s）。
     *     - SystemDiskReadOps：（ECS）系统盘读IOPS（次/s）。
     *     - SystemDiskWriteOps：（ECS）系统盘写IOPS（次/s）。
     *     - CpuUtilizationAgent：（Agent）CPU使用率（%）。
     *     - GpuUtilizationAgent：（Agent）GPU使用率（%）。
     *     - GpuMemoryFreeUtilizationAgent：（Agent）GPU内存空闲率（%）。
     *     - GpuMemoryUtilizationAgent：（Agent）GPU内存使用率（%）。
     *     - MemoryUtilization：（Agent）内存（%）。
     *     - LoadAverage：（Agent）系统平均负载。
     *     - TcpConnection：（Agent）TCP总连接数（个）。
     *
     *     - TcpConnection：（Agent）TCP已建立连接数（个）。
     *     - PackagesNetOut：（Agent）内网网卡发包数（个/s）。
     *     - PackagesNetIn：（Agent）内网网卡收包数（个/s）。
     *
     *     - PackagesNetOut：（Agent）外网网卡发包数（个/s）。
     *     - PackagesNetIn：（Agent）外网网卡收包数（个/s）。
     *     - EciPodCpuUtilization：CPU使用率（%）。
     *     - EciPodMemoryUtilization：内存（%）。
     *     - LoadBalancerRealServerAverageQps：（ALB）服务器组单机QPS（次/s）。
     * 更多信息，请参见[系统监控报警任务](~~74854~~)。
     * @example `CpuUtilization`
     */
    "MetricName"?: string;
    /**
     * 监控项类型。取值范围：
     * - system：使用云监控系统指标。
     * - custom：使用上报到云监控的自定义指标。
     * @example `system`
     */
    "MetricType"?: string;
    /**
     * 统计监控项数据的周期，单位：秒。取值范围：
     * - 15。
     * - 60。
     * - 120。
     * - 300。
     * - 900。
     * > 仅ECS类型的伸缩组支持设置15秒的统计周期。
     * 默认值：300。
     * @example `300`
     */
    "Period"?: number;
    /**
     * 统计监控项数据的方法。取值范围：
     * - Average：平均值。
     * - Minimum：最小值。
     * - Maximum：最大值。
     * 默认值：Average。
     * @example `Average`
     */
    "Statistics"?: string;
    /**
     * 监控指标的阈值，满足阈值表达式达到指定次数即触发执行伸缩规则。
     * @example `80.0`
     */
    "Threshold"?: number;
    /**
     * 监控项统计值与阈值的比较符，用于指定监控项统计值与阈值在什么关系下满足条件。取值范围：
     * - 监控项统计值大于等于阈值。取值：>=。
     * - 监控项统计值小于等于阈值。取值：<=。
     * - 监控项统计值大于阈值。取值：>。
     * - 监控项统计值小于阈值。取值：<。
     * 默认值：>=。
     * @example `>=`
     */
    "ComparisonOperator"?: string;
    /**
     * 触发执行伸缩规则需要满足阈值表达式的次数，例如，CPU使用率平均值3次的统计结果均大于等于80%。
     * 默认值：3。
     * @example `3`
     */
    "EvaluationCount"?: number;
    /**
     * 自定义监控项所属云监控应用分组的ID，仅在监控项类型为custom时需要指定该参数。
     * @example `4055401`
     */
    "GroupId"?: number;
    /**
     * 指定报警任务的生效时间段，默认所有时间都生效。
     * 该参数遵循Cron表达式，默认格式为`X X X X X ?`，含义如下：
     * - X：一个域的占位符，依次表示秒、分钟、小时、日期和月。X可以是确定的取值，也可以是具有逻辑意义的特殊字符。X的取值范围，请参见[Cron表达式](~~25907~~)。
     * - ？：表示不指定值。
     * > 该参数指定值**默认为UTC+8时区**，支持在Cron表达式之前添加时区信息`TZ=+yy`来指定时区，其中y表示时区的数值。例如，`TZ=+00 * * 1-2 * * ?`表示报警任务在UTC+0时区每天01:00~02:59之间生效。
     * 取值示例及含义如下：
     * -  `* * * * * ?  `：所有时间都生效。
     * -  `* * 17-18 * * ? `：在UTC+8时区每天17:00~18:59之间生效。
     * - `TZ=+00 * * 1-2 * * ?`：在UTC+0时区每天01:00~02:59之间生效。
     * @example `TZ=+00 * * 1-2 * * ?`
     */
    "Effective"?: string;
    /**
     * 报警任务关联伸缩规则的唯一标识符的列表。
     */
    "AlarmActions"?: string[];
    /**
     * 监控项关联的维度信息。
     */
    "Dimensions"?: {
        /**
         * 监控项关联的维度信息键，取值范围与报警任务的监控类型有关：
         * - 当报警任务为自定义监控类型（即MetricType=custom）时，不限制取值范围，由您自行指定。
         * - 当报警任务为系统监控类型（即MetricType=system）时，取值范围如下：
         *     - user_id：您的账号ID。
         *     - scaling_group：被监控的伸缩组。
         *     - device：网卡设备的类型。
         *     - state：TCP连接的状态。
         * @example `device`
         */
        DimensionKey: string;
        /**
         * 监控项关联的维度信息值，取值范围由Dimensions.DimensionKey决定：
         * - 当Dimensions.DimensionKey的取值是自定义的，即报警任务是自定义监控类型（即MetricType=custom）时，该参数不限制取值范围，由您自行指定。
         * - 当Dimensions.DimensionKey的取值是系统指定的取值范围中的，即报警任务为系统监控类型（即MetricType=system）时，该参数取值范围如下：
         *     - user_id：由系统自动填充。
         *     - scaling_group：由系统自动填充。
         *     - device：
         *         - eth0：对于经典网络实例，eth0表示内网网卡。对于VPC实例，只存在eth0一张网卡。
         *         - eth1：对于经典网络实例，eth1代表外网网卡。
         *     - state：
         *         - TCP_TOTAL：表示总的TCP连接数。
         *        - ESTABLISHED：表示已建立的TCP连接数。
         * @example `eth0`
         */
        DimensionValue: string;
    }[];
    /**
     * 多指标报警规则相关信息。
     */
    "Expressions"?: {
        /**
         * 多指标报警规则的监控指标名称。取值范围与报警任务的监控类型有关：
         * - 当报警任务为自定义监控类型（即MetricType=custom）时，取值范围是您自有的监控项范围。
         * - 当报警任务为系统监控类型（即MetricType=system）时，取值范围如下：
         *
         *     - CpuUtilization：（ECS）CPU使用率（%）。
         *     - ConcurrentConnections：（ECS）ECS同时连接数（个）。
         *     - IntranetTx：（ECS）内网出流量（Kb/min）。
         *     - IntranetRx：（ECS）内网入流量（Kb/min）。
         *     - VpcInternetTx：（ECS）外网出流量（Kb/min）。
         *     - VpcInternetRx：（ECS）外网入流量（Kb/min）。
         *     - SystemDiskReadBps：（ECS）系统盘读BPS（Byte/s）。
         *     - SystemDiskWriteBps：（ECS）系统盘写BPS（Byte/s）。
         *     - SystemDiskReadOps：（ECS）系统盘读IOPS（次/s）。
         *     - SystemDiskWriteOps：（ECS）系统盘写IOPS（次/s）。
         *     - CpuUtilizationAgent：（Agent）CPU使用率（%）。
         *     - GpuUtilizationAgent：（Agent）GPU使用率（%）。
         *     - GpuMemoryFreeUtilizationAgent：（Agent）GPU内存空闲率（%）。
         *     - GpuMemoryUtilizationAgent：（Agent）GPU内存使用率（%）。
         *     - MemoryUtilization：（Agent）内存（%）。
         *     - LoadAverage：（Agent）系统平均负载。
         *     - TcpConnection：（Agent）TCP总连接数（个）。
         *
         *     - TcpConnection：（Agent）TCP已建立连接数（个）。
         *     - PackagesNetOut：（Agent）内网网卡发包数（个/s）。
         *     - PackagesNetIn：（Agent）内网网卡收包数（个/s）。
         *     - PackagesNetOut：（Agent）外网网卡发包数（个/s）。
         *     - PackagesNetIn：（Agent）外网网卡收包数（个/s）。
         *
         *     - EciPodCpuUtilization：CPU使用率（%）。
         *     - EciPodMemoryUtilization：内存（%）。
         *     - LoadBalancerRealServerAverageQps：（ALB）服务器组单机QPS（次/s）。
         * 更多信息，请参见[系统监控报警任务](~~74854~~)。
         * @example `CpuUtilization`
         */
        MetricName: string;
        /**
         * 多指标报警规则的监控项统计值与阈值的比较符，用于指定监控项统计值与阈值在什么关系下满足条件。取值范围：
         * - 监控项统计值大于等于阈值。取值：>=。
         * - 监控项统计值小于等于阈值。取值：<=。
         * - 监控项统计值大于阈值。取值：>。
         * - 监控项统计值小于阈值。取值：<。
         * 默认值：>=。
         * @example `>=`
         */
        ComparisonOperator: string;
        /**
         * 多指标报警规则中统计监控项数据的周期，单位：秒。取值范围：
         * - 15。
         * - 60。
         * - 120。
         * - 300。
         * - 900。
         * >仅ECS类型的伸缩组支持设置15秒的统计周期。
         * 默认值：300。
         * @example `900`
         */
        Period: number;
        /**
         * 多指标报警规则中统计监控项数据的方法。取值范围：
         * - Average：平均值。
         * - Minimum：最小值。
         * - Maximum：最大值。
         * 默认值：Average。
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
     * 多指标报警条件之间的关系。取值范围：
     * - `&&`：当所有监控指标都符合报警条件时，才能触发报警。即当多指标报警规则下的表达式均为`true`时，才能触发报警。
     * - `||`：如果其中一个指标符合报警条件，即可触发报警。
     * 默认值： `&&`。
     * @example `&&`
     */
    "ExpressionsLogicOperator"?: string;
}
