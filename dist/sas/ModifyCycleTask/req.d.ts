export interface ModifyCycleTaskRequest {
    /**
     * 配置对应的ID。
     * >调用[DescribeCycleTaskList](~~DescribeCycleTaskList~~)接口可以获取该参数。
     * @example `00cfa8161da093089e6804ba6a33****`
     */
    "ConfigId": string;
    /**
     * 任务名称。
     * - **VIRUS\_VUL\_SCHEDULE\_SCAN**：病毒扫描。
     * - **IMAGE_SCAN**：镜像扫描。
     * - **EMG\_VUL\_SCHEDULE\_SCAN**：应急漏洞扫描。
     * @example `EMG_VUL_SCHEDULE_SCAN`
     */
    "TaskName"?: string;
    /**
     * 任务类型。
     * - **VIRUS\_VUL\_SCHEDULE\_SCAN**：病毒扫描。
     * - **IMAGE_SCAN**：镜像扫描。
     * - **EMG\_VUL\_SCHEDULE\_SCAN**：应急漏洞扫描。
     * @example `VIRUS_VUL_SCHEDULE_SCAN`
     */
    "TaskType"?: string;
    /**
     * 扫描周期的单位，取值：
     * - **day**：天。
     * - **hour**：小时。
     * @example `day`
     */
    "PeriodUnit"?: string;
    /**
     * 间隔周期。
     * @example `14`
     */
    "IntervalPeriod"?: number;
    /**
     * 首次执行时间。
     * @example `1664380800000`
     */
    "FirstDateStr"?: number;
    /**
     * 任务开始时间（小时）。
     * @example `0`
     */
    "TargetStartTime"?: number;
    /**
     * 任务结束时间（小时）。
     * @example `6`
     */
    "TargetEndTime"?: number;
    /**
     * 扩展信息字段。
     * @example `{
          "targetInfo": [
                {
                      "type": "groupId",
                      "name": "TI HOST",
                      "target": 10597***
                },
                {
                      "type": "groupId",
                      "name": "expense HOST",
                      "target": 10597***
                }
          ]
    }`
     */
    "Param"?: string;
    /**
     * 是否启用。取值：
     * - **1**：开启
     * - **0**：关闭
     * @example `1`
     */
    "Enable"?: number;
}
