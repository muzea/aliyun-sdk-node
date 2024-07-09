export interface UpdateTriggerRequest {
    /**
     * 项目ID
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 触发器ID
     * @example `1`
     */
    "Id": number;
    /**
     * 是否在沙箱环境触发。
     * - **0**（默认）：不在该环境执行
     * - **1**：在该环境执行
     * @example `1`
     */
    "Sandbox"?: number;
    /**
     * 是否在生产环境触发。
     * - **0**（默认）：不在该环境执行
     * - **1**：在该环境执行
     * @example `1`
     */
    "Production"?: number;
}
