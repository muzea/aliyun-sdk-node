export interface ModifyInstanceNodeNumRequest {
    /**
     * OceanBase 集群的 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 集群节点个数信息。
     * 如果部署模式为 n-n-n，则节点个数为 n * 3。
     * @example `6`
     */
    "NodeNum": string;
    /**
     * 是否只预检此次请求, 默认为 false。取值范围：
     * - true：发送检查请求，不会更改实例节点数。如果检查通过，则返回 DryRunResult=true， 如果检查不通过，则返回相应错误的错误码。
     * - false（默认）：发送正常请求，通过检查后直接更改实例节点数。如为 false, 则表示不进行预检查, DryRunResult 默认返回 false。
     * @example `false`
     */
    "DryRun"?: boolean;
}
