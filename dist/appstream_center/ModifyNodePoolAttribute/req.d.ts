export interface ModifyNodePoolAttributeRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType"?: string;
    /**
     * 资源组ID。
     * @example `rg-ew7va2g1wl3vm****`
     */
    "PoolId"?: string;
    /**
     * 并发会话数，即单个资源可同时连接的会话数。如果同时连接的会话数过多，可能导致应用的使用体验下降。取值范围因资源规格不同而不同。各资源规格对应的取值范围分别是：
     * - appstreaming.general.4c8g：1\~2；
     * - appstreaming.general.8c16g：1\~4；
     * - appstreaming.vgpu.8c16g.4g：1\~4；
     * - appstreaming.vgpu.8c31g.16g：1\~4；
     * - appstreaming.vgpu.14c93g.12g：1\~6；
     * @example `2`
     */
    "NodeCapacity"?: number;
    /**
     * 交付组的自动扩缩容策略。
     */
    "NodePoolStrategy"?: {
        /**
         * 弹性模式。
         * >
         * - `NODE_FIXED`（固定数量）：适用于包年包月资源和按量付费资源。
         * - `NODE_SCALING_BY_USAGE`（自动扩缩容）：适用于包年包月资源和按量付费资源。
         * - `NODE_SCALING_BY_SCHEDULE`（定时扩缩容）：仅适用于按量付费资源。
         * @example `NODE_FIXED`
         */
        StrategyType: string;
        /**
         * 购买资源的数量。取值范围：1~100。
         * >
         * - 若为包年包月资源，则该参数不可修改。
         * - 若为按量付费资源，则当弹性模式（`StrategyType`）为固定数量（`NODE_FIXED`）或自动扩缩容（`NODE_SCALING_BY_USAGE`）时该参数可修改。
         * @example `1`
         */
        NodeAmount: number;
        /**
         * 扩容时最多创建资源的数量。`StrategyType`设为`NODE_SCALING_BY_USAGE`时，该字段必填。
         * @example `10`
         */
        MaxScalingAmount: number;
        /**
         * 扩容时每次创建资源的数量。取值范围：1~10。`StrategyType`设为`NODE_SCALING_BY_USAGE`时，该字段必填。
         * @example `2`
         */
        ScalingStep: number;
        /**
         * 会话使用率上限阈值（%）。当会话使用率超过该阈值时，将触发自动扩容。会话使用率的计算公式为`会话使用率=当前会话数÷(资源总数×资源并发会话数)×100%`。`StrategyType`设为`NODE_SCALING_BY_USAGE`时，该字段必填。取值范围：0\~100。默认值：85。
         * @example `85`
         */
        ScalingUsageThreshold: string;
        /**
         * 无会话连接的资源最多保留的时长（分钟）。当资源内无会话连接时，将按照此处设置的时长开始倒计时，倒计时结束时将完成缩容。取值范围：5~120。默认值：5。但有以下例外情况：
         * - 若缩容后将导致重新触发自动扩容，则不会执行缩容，以免导致反复产生缩容、扩容。
         * - 若此时间段内，因会话数增加而触发自动扩容，则该资源不会按原计划缩容，倒计时也将重新开始。
         * @example `5`
         */
        ScalingDownAfterIdleMinutes: number;
        /**
         * 策略生效日期。格式为：yyyy-MM-dd。该日期必须大于或等于当前日期。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
         * @example `2023-01-05`
         */
        StrategyEnableDate: string;
        /**
         * 策略失效日期。格式为：yyyy-MM-dd。失效日期与生效日期的间隔必须介于7天到1年之间（含7天和1年）。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
         * @example `2023-01-19`
         */
        StrategyDisableDate: string;
        /**
         * 是否开启资源预热策略。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
         * @example `false`
         */
        WarmUp: boolean;
        /**
         * 策略执行周期列表。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
         */
        RecurrenceSchedules: {
            /**
             * 策略执行周期的类型。必须同时指定`RecurrenceType`和`RecurrenceValues`。
             * @example `weekly`
             */
            RecurrenceType: string;
            /**
             * 策略执行周期的数值列表。
             */
            RecurrenceValues: number[];
            /**
             * 策略执行周期的时间段列表。时间段设置要求：
             * - 最多可添加3个时间段。
             * - 时间段之间不重叠。
             * - 时间段之间的间隔大于或等于5分钟。
             * - 单个时间段的时长大于或等于15分钟。
             * - 所有时间段累计不跨天。
             */
            TimerPeriods: {
                /**
                 * 开始时间。格式为HH:mm。
                 * @example `12:00`
                 */
                StartTime: string;
                /**
                 * 结束时间。格式为HH:mm。
                 * @example `15:00`
                 */
                EndTime: string;
                /**
                 * 资源数量。
                 * @example `2`
                 */
                Amount: number;
            }[];
        }[];
    };
    /**
     * 交付组所属的地域ID。关于支持的地域详情，请参见[使用限制](https://help.aliyun.com/document_detail/426036.html)。
     * @example `cn-hangzhou`
     */
    "BizRegionId"?: string;
}
