export interface UpdateMqSofamqTopicRequest {
    /**
     * 需更新读写权限的 Topic 所对应的实例 ID
     * @example `000001`
     */
    "InstanceId": string;
    /**
     * 设置该 Topic 的读写模式。取值说明：6：同时支持读写；4：禁写；2：禁读。
     * @example `6`
     */
    "Perm": number;
    /**
     * 需更新读写权限的 Topic 名称。一个用户下不可重复。
     * @example `test`
     */
    "Topic": string;
}
