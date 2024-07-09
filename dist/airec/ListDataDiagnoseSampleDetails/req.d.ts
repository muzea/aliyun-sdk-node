export interface ListDataDiagnoseSampleDetailsRequest {
    /**
     * 实例id
     * @example `airec-cn-shdjkgkeog`
     */
    "instanceId": string;
    /**
     * 毫秒时间戳， 诊断任务创建的时间。
     * @example `1665936000000`
     */
    "taskCreateTime": number;
    /**
     * 秒级时间戳，查询的整点时间
     * @example `1665158400`
     */
    "startTime": number;
    /**
     * 秒级时间戳，查询的整点时间
     * @example `1682179200`
     */
    "endTime": number;
    /**
     * 任务类型：firstRun, manual, cycle
     * @example `cycle`
     */
    "taskSource": string;
    /**
     * 诊断项
     */
    "key": string;
}
