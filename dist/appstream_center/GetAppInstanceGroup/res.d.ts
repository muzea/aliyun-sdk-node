export interface GetAppInstanceGroupResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * AppInstanceGroupModels
     */
    AppInstanceGroupModels: {
        /**
         * 应用信息列表。
         */
        Apps: {
            /**
             * 应用ID。
             * @example `ca-i87mycyn419nu****`
             */
            AppId: string;
            /**
             * 应用名称。
             * @example `办公应用`
             */
            AppName: string;
            /**
             * 应用版本。
             * @example `1.0.0`
             */
            AppVersion: string;
            /**
             * 应用版本名称。
             * @example `初始版本`
             */
            AppVersionName: string;
            /**
             * 应用图标。
             * @example `https://app-center-icon-****.png`
             */
            AppIcon: string;
        }[];
        /**
         * 应用镜像ID。
         * @example `img-8z4nztpaqvay4****`
         */
        AppCenterImageId: string;
        /**
         * 交付组所属的地域ID。关于支持的地域详情，请参见[使用限制](~~426036~~)。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 产品类型。
         * @example `CloudApp`
         */
        ProductType: string;
        /**
         * 交付组规格类型。
         * @example `__dynamic__`
         */
        AppInstanceType: string;
        /**
         * 交付组规格类型名称
         * @example `test001`
         */
        AppInstanceTypeName: string;
        /**
         * 交付组ID。
         * @example `aig-9ciijz60n4xsv****`
         */
        AppInstanceGroupId: string;
        /**
         * 用户设置的包年包月资源的数量。最小值为1。
         * @example `1`
         */
        Amount: number;
        /**
         * 实例数最小值。最小值为1。
         * @example `1`
         */
        MinAmount: number;
        /**
         * 实例数最大值。最小值为1。
         * @example `10`
         */
        MaxAmount: number;
        /**
         * 预留实例百分比，即交付组中未使用的会话比例。取值范围为0~99。
         * @example `20`
         */
        ReserveAmountRatio: string;
        /**
         * 最小预留实例数，即交付组中未使用会话的最小数量。最小值为1。
         * @example `1`
         */
        ReserveMinAmount: number;
        /**
         * 最大预留实例数，即交付组中未使用会话的最大数量。最小值为1。
         * @example `5`
         */
        ReserveMaxAmount: number;
        /**
         * 扩容时每次创建会话的数量。最小值为1。
         * @example `10`
         */
        ScalingStep: number;
        /**
         * 会话使用率上限阈值（%）。当会话使用率超过该阈值时，将触发自动扩容。会话使用率的计算公式为会话使用率=当前使用中的会话数÷总会话数×100%。取值范围为0~99。
         * @example `85`
         */
        ScalingUsageThreshold: string;
        /**
         * 无会话连接时长，单位为分钟。当资源内处于无会话连接状态达到此处设置的时长后，将触发自动缩容。最小值为0。
         * @example `5`
         */
        ScalingDownAfterIdleMinutes: number;
        /**
         * 付费方式。
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 售卖模式。
         * @example `Node`
         */
        ChargeResourceMode: string;
        /**
         * 创建时间。
         * @example `2022-04-26T15:06:16.000+00:00`
         */
        GmtCreate: string;
        /**
         * 交付组状态。
         * @example `PUBLISHED`
         */
        Status: string;
        /**
         * 资源组信息。
         */
        NodePool: {
            /**
             * 资源组ID。
             * @example `rg-g6922kced36hx****`
             */
            NodePoolId: string;
            /**
             * 购买资源的规格类型ID。
             * @example `appstreaming.vgpu.4c8g.2g`
             */
            NodeInstanceType: string;
            /**
             * 当前包年包月资源的总数量。
             * @example `1`
             */
            NodeAmount: number;
            /**
             * 使用中的包年包月资源数量。
             * @example `1`
             */
            NodeUsed: number;
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
             * 弹性资源总数量。
             * @example `8`
             */
            ScalingNodeAmount: number;
            /**
             * 使用中的弹性资源数量。
             * @example `4`
             */
            ScalingNodeUsed: number;
            /**
             * 弹性策略类型。
             * > `NODE_SCALING_BY_USAGE`（按用量伸缩策略）仅适用于`PrePaid`（包年包月）资源；`NODE_SCALING_BY_SCHEDULE`（定时伸缩策略）仅适用于`PostPaid`（按量付费）资源。
             * @example `NODE_FIXED`
             */
            StrategyType: string;
            /**
             * 创建交付组时购买资源的数量。
             * @example `2`
             */
            Amount: number;
            /**
             * 扩容时最多创建资源的数量。
             * @example `8`
             */
            MaxScalingAmount: number;
            /**
             * 扩容时每次创建资源的数量。取值范围：1~10。
             * @example `2`
             */
            ScalingStep: number;
            /**
             * 会话使用率上限阈值（%）。当会话使用率超过该阈值时，将触发自动扩容。会话使用率的计算公式为`会话使用率=当前会话数÷(资源总数×资源并发会话数)×100%`。
             * @example `85`
             */
            ScalingUsageThreshold: string;
            /**
             * 无会话连接时长，单位为分钟。当资源内处于无会话连接状态达到此处设置的时长后，将触发自动缩容。默认值：5。
             * @example `5`
             */
            ScalingDownAfterIdleMinutes: number;
            /**
             * 策略执行周期列表。
             */
            RecurrenceSchedules: {
                /**
                 * 策略执行周期的类型。必须同时指定`RecurrenceType`和`RecurrenceValues`。
                 * @example `Weekly`
                 */
                RecurrenceType: string;
                /**
                 * 策略执行周期的数值列表。
                 */
                RecurrenceValues: number[];
                /**
                 * 策略执行周期的时间段列表。
                 */
                TimerPeriods: {
                    /**
                     * 目标资源数量。
                     * @example `5`
                     */
                    Amount: number;
                    /**
                     * 结束时间。格式为HH:mm
                     * @example `11:00`
                     */
                    EndTime: string;
                    /**
                     * 开始时间。格式为HH:mm
                     * @example `09:30`
                     */
                    StartTime: string;
                }[];
            }[];
            /**
             * 策略失效日期。格式为：yyyy-MM-dd。
             * @example `2022-09-08`
             */
            StrategyDisableDate: string;
            /**
             * 策略生效日期。格式为：yyyy-MM-dd。
             * @example `2022-08-01`
             */
            StrategyEnableDate: string;
            /**
             * 是否开启资源预热策略。
             * @example `false`
             */
            WarmUp: boolean;
            /**
             * 资源规格名称。
             * @example `无影-通用型_4核8G`
             */
            NodeTypeName: string;
        }[];
        /**
         * 与交付组ID唯一对应的ID。
         * @example `spec-8o18t8uc31qib0****`
         */
        SpecId: string;
        /**
         * 会话断连保留时长，单位为分钟。终端用户会话断开连接后，会话将保留此处设置的时长，然后再注销。如果始终保留，则填写`-1`。取值范围：-1和3~300。默认值为`15`。
         * @example `15`
         */
        SessionTimeout: string;
        /**
         * 交付组名称。
         * @example `办公应用`
         */
        AppInstanceGroupName: string;
        /**
         * 交付组到期时间。
         * @example `2022-04-27T16:00:00.000+00:00`
         */
        ExpiredTime: string;
        /**
         * OTA升级任务信息。
         */
        OtaInfo: {
            /**
             * 当前OTA版本。
             * @example `0.0.1-D-20220615.11****`
             */
            OtaVersion: string;
            /**
             * 新的OTA版本。为空表示没有新版本。
             * @example `0.0.1-D-20220630.11****`
             */
            NewOtaVersion: string;
            /**
             * OTA升级任务ID。
             * @example `ota-e49929gv8acz5****`
             */
            TaskId: string;
        };
        /**
         * 系统类型。
         * @example `Windows`
         */
        OsType: string;
        /**
         * 应用镜像名称。
         * @example `OfficeApps`
         */
        AppCenterImageName: string;
        /**
         * 资源状态。
         * @example `AVAILABLE`
         */
        ResourceStatus: string;
        /**
         * 应用策略ID。
         * @example `pg-g3k5wa2ms2****`
         */
        AppPolicyId: string;
        /**
         * 是否跳过用户授权校验。
         * @example `false`
         */
        SkipUserAuthCheck: boolean;
    };
}
