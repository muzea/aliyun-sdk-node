export interface GetAutoThrottleRulesResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 所有开启过自动SQL限流功能的数据库数量。
         * @example `3`
         */
        TotalAutoThrottleRulesCount: number;
        /**
         * 正在使用自动SQL限流功能的数据库实例数量。
         * @example `1`
         */
        EnableAutoThrottleCount: number;
        /**
         * 曾经开启并且当前已关闭自动SQL限流功能的数据库实例数量。
         * @example `1`
         */
        TurnOffAutoThrottleCount: number;
        /**
         * 从未开启过自动SQL限流或者实例不存在的数据库实例数量。
         * > 实例不存在：数据库实例已经释放或者传入的数据库实例ID存在错误。
         * @example `1`
         */
        NeverEnableAutoThrottleOrReleasedInstanceCount: number;
        /**
         * 正在使用自动SQL限流功能的数据库实例信息列表。
         */
        EnableAutoThrottleList: {
            /**
             * 触发自动限SQL流规则的异常的持续时间阈值，单位：分钟。
             * @example `2`
             */
            AbnormalDuration: number;
            /**
             * CPU利用率阈值。
             * @example `70`
             */
            CpuUsage: number;
            /**
             * CPU利用率阈值和活跃会话数阈值的逻辑关系：
             * - **AND**：且。
             * - **OR**：或。
             * @example `AND`
             */
            CpuSessionRelation: string;
            /**
             * 活跃会话数量阈值。
             * @example `32`
             */
            ActiveSessions: number;
            /**
             * 最大限流时长，单位：分钟。
             * @example `10`
             */
            MaxThrottleTime: number;
            /**
             * 可限流时间段的开始时间（UTC时间）。
             * @example `00:00Z`
             */
            AllowThrottleStartTime: string;
            /**
             * 可限流时间段的结束时间（UTC时间）。
             * @example `23:59Z`
             */
            AllowThrottleEndTime: string;
            /**
             * 自动SQL限流规则是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Visible: boolean;
            /**
             * 是否同时KILL执行中的异常SQL：
             * > 异常SQL：与需要限流的SQL模板相同。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            AutoKillSession: boolean;
            /**
             * 数据库实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            InstanceId: string;
            /**
             * 用户ID，即创建数据库实例的阿里云主账号ID。
             * @example `140692647406****`
             */
            UserId: string;
        }[];
        /**
         * 曾经开启并且当前已关闭自动SQL限流功能的数据库实例信息列表。
         */
        TurnOffAutoThrottleList: {
            /**
             * 触发自动限流规则的持续时间阈值，单位：分钟。
             * @example `2`
             */
            AbnormalDuration: number;
            /**
             * CPU利用率阈值。
             * @example `80`
             */
            CpuUsage: number;
            /**
             * 可限流时间段的结束时间（UTC时间）。
             * @example `23:59Z`
             */
            AllowThrottleEndTime: string;
            /**
             * 数据库实例ID。
             * @example `rm-2ze9xrhze0709****`
             */
            InstanceId: string;
            /**
             * 自动SQL限流规则是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            Visible: boolean;
            /**
             * CPU利用率阈值和活跃会话数阈值的关系：
             * - **AND**：且。
             * - **OR**：或。
             * @example `OR`
             */
            CpuSessionRelation: string;
            /**
             * 是否同时KILL执行中的异常SQL：
             * > 异常SQL：与需要限流的SQL模板相同。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            AutoKillSession: boolean;
            /**
             * 活跃会话数阈值。
             * @example `64`
             */
            ActiveSessions: number;
            /**
             * 最大限流时长，单位：分钟。
             * @example `10`
             */
            MaxThrottleTime: number;
            /**
             * 用户ID，即创建数据库实例的阿里云主账号ID。
             * @example `140692647406****`
             */
            UserId: string;
            /**
             * 可限流时间段的开始时间（UTC时间）。
             * @example `00:00Z`
             */
            AllowThrottleStartTime: string;
        }[];
        /**
         * 从未开启过自动SQL限流或者实例不存在的数据库实例数量。
         * > 实例不存在：数据库实例已经释放或者传入的数据库实例ID存在错误。
         */
        NeverEnableAutoThrottleOrReleasedInstanceIdList: string[];
    };
    /**
     * 请求ID。
     * @example `7172BECE-588A-5961-8126-C216E16B****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
