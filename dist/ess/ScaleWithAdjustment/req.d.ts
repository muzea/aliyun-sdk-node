export interface ScaleWithAdjustmentRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-j6c1o397427hyjdc****`
     */
    "ScalingGroupId": string;
    /**
     * 伸缩活动调整方式，取值范围：
     * - QuantityChangeInCapacity：增加或减少指定数量的ECS实例。
     * - PercentChangeInCapacity：增加或减少指定比例的ECS实例。
     * - TotalCapacity：将当前伸缩组的ECS实例数量调整到指定数量。
     * @example `QuantityChangeInCapacity`
     */
    "AdjustmentType": string;
    /**
     * 伸缩活动调整值。任何情况下，单次调整的ECS实例台数都不能超过1000，否则会导致调整失败。不同调整方式对应的取值范围：
     * - QuantityChangeInCapacity：-1000~1000。
     * - PercentChangeInCapacity：-100~10000。
     * - TotalCapacity：0~2000。
     * @example `100`
     */
    "AdjustmentValue": number;
    /**
     * 伸缩活动最小调整实例数，仅当`AdjustmentType`为`PercentChangeInCapacity`时生效。
     * @example `1`
     */
    "MinAdjustmentMagnitude"?: number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 伸缩活动同步执行开关，仅对具有期望实例数配置项的伸缩组有效。取值范围：
     * - true：同步流程，即执行伸缩规则时会直接触发伸缩组的扩缩容活动。
     * - false：异步流程，即修改伸缩组内的期望实例数时，不会立刻触发伸缩组的实际扩缩容活动，需等待期望实例数变化后，系统自动检测期望实例数与伸缩组内当前实例数不一致，才会触发扩缩容活动。
     * > 关于期望实例数的更多信息，请参见[期望实例数](~~146231~~)。
     * 默认值：false。
     * @example `false`
     */
    "SyncActivity"?: boolean;
    /**
     * ECI伸缩组扩容指定覆写参数。
     */
    "Overrides"?: {
        /**
         * 实例级别vCPU大小。单位：核。
         * @example `2`
         */
        Cpu: number;
        /**
         * 实例级别内存大小。单位：GiB。
         * @example `4`
         */
        Memory: number;
        /**
         * 覆写容器列表参数。
         */
        ContainerOverrides: {
            /**
             * 容器名称。当需要覆写容器参数时，必须指定容器名称，容器名称与伸缩配置容器名称相匹配时，方可覆写容器参数。
             * @example `container-1`
             */
            Name: string;
            /**
             * 容器启动命令对应的参数。最多10个。
             */
            Args: string[];
            /**
             * 容器启动命令。最多20个。每个命令最多包含256个字符。
             */
            Commands: string[];
            /**
             * 环境变量的信息列表。
             */
            EnvironmentVars: {
                /**
                 * 环境变量名。长度为1~128个字符。格式要求：`[0-9a-zA-Z]`，以及下划线（_），不能以数字开头。
                 * @example `PATH`
                 */
                Key: string;
                /**
                 * 环境变量值。长度为0~256位。
                 * @example `/usr/local/tomcat`
                 */
                Value: string;
            }[];
            /**
             * 容器vCPU核数。单位：核。
             * @example `2`
             */
            Cpu: number;
            /**
             * 容器内存大小。单位：GiB。
             * @example `4`
             */
            Memory: number;
        }[];
    };
    /**
     * 生命周期挂钩上下文信息。
     */
    "LifecycleHookContext"?: {
        /**
         * 伸缩活动禁用所有生命周期挂钩。取值范围：
         * - true：禁用。
         * - false：不禁用。
         * @example `false`
         */
        DisableLifecycleHook: boolean;
        /**
         * 伸缩活动禁用的生命周期挂钩ID列表。
         */
        IgnoredLifecycleHookIds: string[];
    };
    /**
     * 伸缩活动的元数据。
     * @example `{"key":"value"}`
     */
    "ActivityMetadata"?: string;
}
