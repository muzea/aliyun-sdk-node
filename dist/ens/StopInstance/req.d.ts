export interface StopInstanceRequest {
    /**
     * 要停止运行的实例的ID，仅支持停止单个。
     * @example `i-instanceid****`
     */
    "InstanceId": string;
    /**
     * 停止实例时是否强制关机策略。
     * - **true**：强制关机。
     * - **false**（默认）：正常关机流程。
     * @example `true`
     */
    "ForceStop"?: string;
}
