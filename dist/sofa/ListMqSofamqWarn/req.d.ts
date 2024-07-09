export interface ListMqSofamqWarnRequest {
    /**
     * 查询指定 Group 的报警规则时设置
     * @example `GID_group`
     */
    "GroupId"?: string;
    /**
     * 实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx`
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
     * 查询指定 Topic 的报警规则时设置
     * @example `test`
     */
    "Topic"?: string;
}
