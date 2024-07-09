export interface DescribeAutoScalingHistoryResponse {
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
    /**
     * 弹性伸缩历史记录。
     */
    Data: {
        /**
         * 实例ID。
         * @example `rm-2ze1jdv45i7l6****`
         */
        InstanceId: string;
        /**
         * 自动性能扩展历史记录。
         */
        SpecHistory: {
            /**
             * 自动性能扩展任务类型，取值：
             * - **SCALE_UP**：规格自动扩容。
             * - **SCALE_DOWN**：规格自动缩容。
             * @example `SCALE_UP`
             */
            ScaleType: string;
            /**
             * 任务执行状态：
             * - **true**：执行成功。
             * - **false**：执行失败。
             * @example `true`
             */
            TaskExcuteStatus: boolean;
            /**
             * 扩缩容内部任务返回的错误码：
             * - **Insufficient_Balance** ：用户余额不足或存在未支付订单。
             * - **REACH_SPEC_UPPERBOUND** ：已达到用户规格上限。
             * - **Control_Error_Timeout_Msg** ：管控任务超时。
             * - **Invoke_Rds_Api_Error_Msg** ：调用RDS API失败。
             * @example `Insufficient_Balance`
             */
            ErrorCode: string;
            /**
             * 原始实例规格码。
             * @example `mysql.n2.large.2c`
             */
            OriginInstanceClass: string;
            /**
             * 目标实例规格码。
             * @example `mysql.n2.xlarge.2c`
             */
            TargetInstanceClass: string;
            /**
             * 原始实例CPU核数。
             * @example `4`
             */
            OriginCore: number;
            /**
             * 原始实例内存大小，单位GB。
             * @example `8`
             */
            OriginMemory: number;
            /**
             * 目标实例CPU核数。
             * @example `8`
             */
            TargetCore: number;
            /**
             * 目标实例内存大小，单位GB。
             * @example `16`
             */
            TargetMemory: number;
            /**
             * 任务执行时间，格式为Unix时间戳，单位为毫秒。
             * @example `1684830763000`
             */
            TaskTime: number;
        }[];
        /**
         * 存储扩容历史记录，暂不支持。
         */
        Storage: any[];
        /**
         * Redis资源扩容历史记录，暂不支持。
         */
        Resource: any[];
        /**
         * Redis自动分片扩容历史记录，暂不支持。
         */
        Shard: any[];
        /**
         * Redis带宽弹性伸缩历史记录，暂不支持。
         */
        Bandwidth: any[];
    };
}
