export interface DeleteMqSofamqWarnRequest {
    /**
     * 实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 待删除的报警规则 ID
     * @example `10000001`
     */
    "WarnId": number;
}
