export interface UpdateMqSofamqTopicRemarkRequest {
    /**
     * 实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx	 `
     */
    "InstanceId": string;
    /**
     * Topic 描述信息
     * @example `test`
     */
    "Remark": string;
    /**
     * 需更新的 Topic 名称，一个用户下不可重复。
     * @example `test`
     */
    "Topic": string;
}
