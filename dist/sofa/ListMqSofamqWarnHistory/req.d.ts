export interface ListMqSofamqWarnHistoryRequest {
    /**
     * 目标单元
     * @example `RZ00A`
     */
    "Cell"?: string;
    /**
     * Group ID
     * @example `GID_TEST`
     */
    "GroupId"?: string;
    /**
     * 实例 ID
     * @example `INSTANCE_XXX`
     */
    "InstanceId": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页显示条数
     * @example `20`
     */
    "PageSize": number;
    /**
     * Topic 名称
     * @example `TP_TEST`
     */
    "Topic"?: string;
    /**
     * 报警规则 ID
     * @example `4`
     */
    "WarnId"?: number;
}
