export interface CreateAppInstanceGroupRequest {
    /**
     * 应用镜像ID。可从[无影云应用控制台](https://appstreaming.console.aliyun.com/)的**运维**>**自定义镜像**或**系统镜像**页面获取。
     * @example `img-8z4nztpaqvay4****`
     */
    "AppCenterImageId": string;
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 交付组名称。
     * @example `办公应用`
     */
    "AppInstanceGroupName": string;
    /**
     * 需添加到交付组分配用户的用户名称列表。
     */
    "Users"?: string[];
    /**
     * 需添加到交付组分配用户的用户信息。如果填写了`Users`参数，则该字段为必需。
     */
    "UserInfo"?: {
        /**
         * 用户账号类型。
         * @example `Simple`
         */
        Type: string;
    };
    /**
     * 付费方式。
     * @example `PrePaid`
     */
    "ChargeType": string;
    /**
     * 优惠ID。可通过[GetResourcePrice](~~428503~~)接口获取。
     * @example `17440009****`
     */
    "PromotionId"?: string;
    /**
     * 是否自动付费。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 是否自动续费。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 当参数`ChargeType`取值为`PrePaid`时，该参数表示购买资源的时长，且为必填值。单位由`PeriodUnit`指定。
     * - 如果`PeriodUnit`为`Week`，该参数的取值范围为：
     *    - 1
     * - 如果`PeriodUnit`为`Month`，该参数的取值范围为：
     *    - 1
     *    - 2
     *    - 3
     *    - 6
     * - 如果`PeriodUnit`为`Year`，该参数的取值范围为：
     *    - 1
     *    - 2
     *    - 3
     * > 当参数`ChargeType`取值为`PostPaid`时，该参数请填写固定值1。
     * @example `1`
     */
    "Period": number;
    /**
     * 当参数`ChargeType`取值为`PrePaid`时，该参数表示购买资源的时长单位。
     * > 该参数区分大小写。例如，`Week`是有效的，`week`是无效的。
     * 另外，如果请求参数不符合上述搭配，例如`2 Week`，虽然调用本接口会成功，但最终在下单阶段会出错。
     * > 当参数`ChargeType`取值为`PostPaid`时，该参数请填写固定值`Month`。
     * @example `Week`
     */
    "PeriodUnit": string;
    /**
     * 应用回收时间，单位为分钟。终端用户将云应用断开连接一段时间后，云上应用进程即退出，这段时间就是应用回收时间。如果永不回收，则填写`-1`。取值范围：-1和3~300，且值为整数。默认值为`15`。
     * @example `15`
     */
    "SessionTimeout": number;
    /**
     * 交付组所属的地域ID。关于支持的地域详情，请参见[使用限制](~~426036~~)。
     * @example `cn-hangzhou`
     */
    "BizRegionId": string;
    /**
     * 售卖模式。
     * @example `Node`
     */
    "ChargeResourceMode": string;
    /**
     * 节点池对象。
     */
    "NodePool"?: {
        /**
         * 购买资源的规格类型ID，可通过[ListNodeInstanceType](~~428502~~)接口获取。
         * @example `appstreaming.general.4c8g`
         */
        NodeInstanceType: string;
        /**
         * 购买资源的数量。取值范围：1~100。
         * >- 若为包年包月资源，则该参数必填。
         * >- 若为按量付费资源，则当弹性模式（`StrategyType`）为固定数量（`NODE_FIXED`）或自动扩缩容（`NODE_SCALING_BY_USAGE`）时该参数必填。
         * @example `1`
         */
        NodeAmount: number;
        /**
         * 并发会话数，即单个资源可同时连接的会话数。如果同时连接的会话数过多，可能导致应用的使用体验下降。取值范围因资源规格不同而不同。各资源规格对应的取值范围分别是：
         * - appstreaming.general.4c8g：1\~2；
         * - appstreaming.general.8c16g：1\~4；
         * - appstreaming.vgpu.8c16g.4g：1\~4；
         * - appstreaming.vgpu.8c31g.16g：1\~4；
         * - appstreaming.vgpu.14c93g.12g：1\~6；
         * @example `2`
         */
        NodeCapacity: number;
        /**
         * 弹性模式。
         * >
         * >- `NODE_FIXED`（固定数量）：适用于包年包月资源和按量付费资源。
         * >- `NODE_SCALING_BY_USAGE`（自动扩缩容）：适用于包年包月资源和按量付费资源。
         * >- `NODE_SCALING_BY_SCHEDULE`（定时扩缩容）：仅适用于按量付费资源。
         * @example `NODE_FIXED`
         */
        StrategyType: string;
        /**
         * 扩容时最多创建资源的数量。`StrategyType`设为`NODE_SCALING_BY_USAGE`（使用弹性资源）时，该字段必填。
         * @example `10`
         */
        MaxScalingAmount: number;
        /**
         * 扩容时每次创建资源的数量。取值范围：1~10。`StrategyType`设为`NODE_SCALING_BY_USAGE`（使用弹性资源）时，该字段必填。
         * @example `2`
         */
        ScalingStep: number;
        /**
         * 会话使用率上限阈值（%）。当会话使用率超过该阈值时，将触发自动扩容。会话使用率的计算公式为`会话使用率=当前会话数÷(资源总数×资源并发会话数)×100%`。`StrategyType`设为`NODE_SCALING_BY_USAGE`（使用弹性资源）时，该字段必填。取值范围：0~100。默认值：85。
         * @example `85`
         */
        ScalingUsageThreshold: string;
        /**
         * 无会话连接的资源最多保留的时长（分钟）。当资源内无会话连接时，将按照此处设置的时长开始倒计时，倒计时结束时将完成缩容。取值范围：5\~120。默认值：5。但有以下例外情况：
         * - 若缩容后将导致重新触发自动扩容，则不会执行缩容，以免导致反复产生缩容、扩容。
         * - 若此时间段内，因会话数增加而触发自动扩容，则该资源不会按原计划缩容，倒计时也将重新开始。
         * @example `5`
         */
        ScalingDownAfterIdleMinutes: number;
        /**
         * 策略生效日期。格式为：yyyy-MM-dd。该日期必须大于或等于当前日期。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
         * @example `2022-08-01`
         */
        StrategyEnableDate: string;
        /**
         * 策略失效日期。格式为：yyyy-MM-dd。失效日期与生效日期的间隔必须介于7天到1年之间（含7天和1年）。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
         * @example `2022-09-08`
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
     * 网络配置。
     * > 如需使用该参数，请提交工单。
     */
    "Network"?: {
        /**
         * 网络策略类型。
         * @example `Shared`
         */
        StrategyType: string;
        /**
         * 路由配置。仅当网络策略类型（`StrategyType`）的值为混合模式（`Mixed`）时可配置。
         */
        Routes: {
            /**
             * 访问目标。CIDR格式。
             * @example `139.196.XX.XX/32`
             */
            Destination: string;
            /**
             * 网络出口模式。
             * @example `Shared`
             */
            Mode: string;
        }[];
        /**
         * 公网IP地址使用时长超过这个值时，在下次登录时就会触发IP地址更新。最小值为60。单位为分钟。
         * @example `60`
         */
        IpExpireMinutes: number;
        /**
         * 域名规则配置。
         */
        DomainRules: {
            /**
             * 域名。
             * @example `www.example.com`
             */
            Domain: string;
            /**
             * 策略值。
             * @example `block`
             */
            Policy: string;
        }[];
    };
    /**
     * 存储策略。
     */
    "StoragePolicy"?: {
        /**
         * 存储类型列表。
         */
        StorageTypeList: string[];
    };
    /**
     * 预开的AppId。
     * @example `cag-b2ronxxd****`
     */
    "PreOpenAppId"?: string;
    /**
     * 运行时策略。
     */
    "RuntimePolicy"?: {
        /**
         * 会话类型。
         * @example `NORMAL`
         */
        SessionType: string;
        /**
         * 是否开启调试模式。如需调用`GetDebugAppInstance`和`CreateImageFromAppInstanceGroup`，则必须将此字段设为`ON`。
         * @example `OFF`
         */
        DebugMode: string;
    };
    /**
     * 安全策略。
     */
    "SecurityPolicy"?: {
        /**
         * 解绑后是否重置。
         * @example `true`
         */
        ResetAfterUnbind: boolean;
        /**
         * 是否跳过用户授权校验。
         * @example `false`
         */
        SkipUserAuthCheck: boolean;
    };
    /**
     * 用户自定义策略
     */
    "UserDefinePolicy"?: {
        /**
         * 自定义策略内容，需要满足镜像版本规范，如需使用该参数，请提交工单申请开启白名单。
         * @example `[{"target":"agent","config":{"abc":"xxx"}}]`
         */
        CustomConfig: string;
    };
}
