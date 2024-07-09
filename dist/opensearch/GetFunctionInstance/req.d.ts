export interface GetFunctionInstanceRequest {
    /**
     * 应用名称
     * @example `150057101`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `ctr`
     */
    "functionName": string;
    /**
     * 实例名称
     * @example `ctr_test`
     */
    "instanceName": string;
    /**
     * 控制返回信息的丰富度：
     * - simple：只显示基本信息
     * - normal：显示createParameters, cron等信息（默认）
     * - detail: 返回训练任务信息
     * @example `detail`
     */
    "output"?: string;
}
