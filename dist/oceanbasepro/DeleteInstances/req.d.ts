export interface DeleteInstancesRequest {
    /**
     * 需删除的集群 ID。
     * 格式为 JSON 数组的字符串。
     * @example `["ob317v4uif****","ob627v4uif****"]`
     */
    "InstanceIds": string;
    /**
     * 集群删除后的备份保留策略。取值如下：
     * - receive_all：保留全部备份集;
     * - delete_all：删除全部备份集；
     * - receive_last：保留最后一个备份集。
     * > <br>默认值为 delete_all。
     * @example `delete_all`
     */
    "BackupRetainMode"?: string;
    /**
     * 是否只预检此次请求, 默认为 false。取值范围：
     * - true：发送检查请求，不会删除实例。如果检查通过，则返回DryRunResult=true, 如果检查不通过, 则返回相应错误的错误码。
     * - false（默认）：发送正常请求，通过检查后直接删除实例。如果 DryRun 填写为 false, 则表示不进行预检查, DryRunResult 默认返回 false。
     * @example `false`
     */
    "DryRun"?: boolean;
}
