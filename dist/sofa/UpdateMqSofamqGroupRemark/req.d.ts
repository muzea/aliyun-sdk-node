export interface UpdateMqSofamqGroupRemarkRequest {
    /**
     * 需配置更新的 Group ID
     * @example `test_group_id`
     */
    "GroupId": string;
    /**
     * 实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 描述信息
     * @example `test`
     */
    "Remark": string;
}
