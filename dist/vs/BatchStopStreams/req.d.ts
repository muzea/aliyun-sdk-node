export interface BatchStopStreamsRequest {
    /**
     * 流ID，多值用逗号分隔。
     * @example `323*****997-cn-qingdao`
     */
    "Id": string;
    /**
     * 停流触发时间，支持延迟停流。
     * @example `2021-12-10T10:00:00Z`
     */
    "StartTime"?: string;
}
