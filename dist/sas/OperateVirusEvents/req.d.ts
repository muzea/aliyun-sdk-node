export interface OperateVirusEventsRequest {
    /**
     * 告警事件的处理方式。取值：
     * - **default**：深度查杀
     * - **ignore**：忽略
     * - **advance\_mark\_mis_info**：加白名单
     * - **manual_handled**：我已手工处理
     * @example `default`
     */
    "OperationCode": string;
    /**
     * 处置范围。
     * @example `[{\"type\":\"machine\",\"list\":[\"xxxxxxxxx-4cbf-4ca6-a1b7-8a09d1f86ab0\"]}]`
     */
    "OperationRange"?: string;
    /**
     * 是否全部处理。取值：
     * - **1**：是
     * - **0**：否
     * @example `0`
     */
    "OperationAll": number;
}
