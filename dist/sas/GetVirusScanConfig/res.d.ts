export interface GetVirusScanConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `028CF634-5268-5660-9575-48C9ED6BDEFC`
     */
    RequestId: string;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 保存资产信息的键值。
         * > 您可以调用[GetAssetSelectionConfig](~~GetAssetSelectionConfig~~)接口获取该参数。
         * @example `345ddbea-a57f-437e-832f-fb7a1202xxxx`
         */
        SelectionKey: string;
        /**
         * 任务类型。取值：
         * - **VIRUS\_VUL\_SCHEDULE\_SCAN**：病毒扫描。
         * @example `VIRUS_VUL_SCHEDULE_SCAN`
         */
        TaskType: string;
        /**
         * 病毒扫描的扫描类型。取值：
         * - **system**：系统扫描
         * - **user**：自定义扫描。
         * @example `user`
         */
        ScanType: string;
        /**
         * 如果是自定义扫描需要传输的扫描路径信息。
         */
        ScanPath: string[];
        /**
         * 扫描周期的单位，取值：
         * - **day**：天。
         * @example `day`
         */
        PeriodUnit: string;
        /**
         * 任务开始时间（小时）。
         * @example `0`
         */
        TargetStartTime: number;
        /**
         * 任务结束时间（小时）。
         * @example `6`
         */
        TargetEndTime: number;
        /**
         * 间隔周期。
         * @example `7`
         */
        IntervalPeriod: number;
        /**
         * 是否启用。取值：
         * - **1**：开启
         * - **0**：关闭
         * @example `1`
         */
        Enable: number;
        /**
         * 配置对应的ID。
         * >调用[DescribeCycleTaskList](~~DescribeCycleTaskList~~)接口可以获取该参数。
         * @example `97a1fed216908e417407344e1505xxxx`
         */
        ConfigId: string;
    };
}
