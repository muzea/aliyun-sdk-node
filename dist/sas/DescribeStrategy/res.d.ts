export interface DescribeStrategyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `75C127E6-76CD-59A7-B6E4-1CBBDC98F2EB`
     */
    RequestId: string;
    /**
     * 策略的详细信息集合。
     */
    Strategies: {
        /**
         * 策略的来源类型。取值：
         * - **1**：系统自带的策略，即云安全中心默认执行的基线检查策略。
         * - **2**：用户添加的策略，包括用户自定义创建的标准策略和自定义策略。
         * @example `2`
         */
        Type: number;
        /**
         * 基线检查策略的执行状态。取值：
         * - **1**：未执行
         * - **2**：执行中
         * @example `1`
         */
        ExecStatus: number;
        /**
         * 执行基线检查策略发现的存在风险的基线的占比。
         * @example `0`
         */
        PassRate: number;
        /**
         * 基线检查开始的时间。取值：
         * - **0**：表示基线检查开始的时间为0:00~6:00
         * - **6**：表示基线检查开始的时间为6:00~12:00
         * - **12**：表示基线检查开始的时间为12:00~18:00
         * - **18**：表示基线检查开始的时间为18:00~24:00
         * @example `0`
         */
        CycleStartTime: number;
        /**
         * 策略的类型。取值：
         * - **common**：标准策略
         * - **custom**：自定义策略
         * @example `custom`
         */
        CustomType: string;
        /**
         * 策略生效的资产的数量。
         * @example `50`
         */
        EcsCount: number;
        /**
         * 已完成基线检查的资产的数量。
         * @example `20`
         */
        ProcessRate: number;
        /**
         * 基线检查的周期。取值：
         * - **1**：每隔1天
         * - **3**：每隔3天
         * - **7**：每隔7天
         * - 30：每隔30天
         * @example `1`
         */
        CycleDays: number;
        /**
         * 策略包含的基线检查项的数量。
         * @example `23`
         */
        RiskCount: number;
        /**
         * 策略的名称。
         * @example `text2`
         */
        Name: string;
        /**
         * 策略的ID。
         * @example `8164248`
         */
        Id: number;
        /**
         * 策略生效资产的信息集合。
         */
        ConfigTargets: {
            /**
             * 策略是否对该资产分组生效。取值：
             * - **add**：对该资产分组生效
             * - **del**：不对该资产分组生效
             * @example `add`
             */
            Flag: string;
            /**
             * 策略生效的资产的分组ID或者UUID。
             * @example `10099713`
             */
            Target: string;
            /**
             * 策略生效资产的添加方式。取值：
             * - **groupId**：按照资产的分组添加。
             * - **uuid**：按照单个资产添加。
             * @example `groupId`
             */
            TargetType: string;
        }[];
        /**
         * 基线检查策略执行开始时间。
         * @example `00:00:00`
         */
        StartTime: string;
        /**
         * 基线检查策略执行结束时间。
         * @example `03:00:00`
         */
        EndTime: string;
    }[];
}
