export interface CreateTriggerRequest {
    /**
     * 项目ID。
     * @example `PE9FQC48`
     */
    "ProjectId": string;
    /**
     * 命名空间，如：syncstore的namespace。
     * @example `f323baa35c304751a4b1254adc8230bf`
     */
    "Namespace": string;
    /**
     * 触发器触发的事件标识，如：syncstore路径。
     * @example `/`
     */
    "Source": string;
    /**
     * 目标函数所在的文件ID。
     * 与目标函数ID相对应，多个以英文逗号","分隔。
     * @example `1,2`
     */
    "FileIds": string;
    /**
     * 目标函数ID。
     * 与目标函数所在的文件ID相对应，多个以英文逗号","分隔。
     * @example `35,36`
     */
    "FunctionIds": string;
    /**
     * 调用模式。
     * - **0**：串行（同步）调用
     * - **1**：并行（异步）调用
     * @example `0`
     */
    "InvocationMode": number;
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
