export interface EnableMqSofamqWarnRequest {
    /**
     * 实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 待开启的报警规则 ID
     * @example `10001`
     */
    "WarnId": number;
}
