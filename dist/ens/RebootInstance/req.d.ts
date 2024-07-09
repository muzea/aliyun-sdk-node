export interface RebootInstanceRequest {
    /**
     * 要重启实例的ID，仅支持重启单个。
     * @example `i-instanceid****`
     */
    "InstanceId": string;
    /**
     * 重启ENS实例前是否强制关机策略。
     * - **true**：重启ENS实例前强制关机。
     * - **false**（默认）：重启ENS实例前正常关机。
     * @example `true`
     */
    "ForceStop"?: string;
}
