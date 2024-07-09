export interface ListFunctionInstancesRequest {
    /**
     * 应用名称
     * @example `app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `ctr`
     */
    "functionName": string;
    /**
     * 模型类型
     * @example `tf_checkpoint`
     */
    "modelType"?: string;
    /**
     * 功能类型
     * @example `"PAAS"`
     */
    "functionType"?: string;
    /**
     * 实例来源
     * - builtin 系统实例
     * - user 用户实例 （默认）
     * - all 全部实例
     * @example `user`
     */
    "source"?: string;
    /**
     * 页码，默认值为1
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页大小，默认值为10
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 返回信息的丰富度
     *  - normal：显示createParameters, cron等信息（默认）
     * - simple：只显示基本信息
     * - detail：返回训练任务详细信息
     * @example `normal`
     */
    "output"?: string;
}
