export interface GetChangeSetResponse {
    /**
     * 更改集状态。
     * @example `CREATE_COMPLETE`
     */
    Status: string;
    /**
     * 更改集变更内容列表。
     */
    Changes: any[];
    /**
     * 更改集描述。
     * @example `It is a demo.`
     */
    Description: string;
    /**
     * 资源栈参数列表。
     */
    Parameters: {
        /**
         * 参数名称。
         * @example `ALIYUN::Region`
         */
        ParameterKey: string;
        /**
         * 参数值。
         * @example `cn-hangzhou`
         */
        ParameterValue: string;
    }[];
    /**
     * 请求ID。
     * @example `3766EE04-76DD-50F9-9C23-3AF136CD5708`
     */
    RequestId: string;
    /**
     * 更改集异常状态原因。
     * @example `too many changes.`
     */
    StatusReason: string;
    /**
     * 创建时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ss。
     * @example `2021-12-01T02:20:56`
     */
    CreateTime: string;
    /**
     * 更改集对应的模板。
     * > 当ShowTemplate为true时该参数有效。
     * @example `{"ROSTemplateFormatVersion": "2015-09-01"}`
     */
    TemplateBody: string;
    /**
     * 更改集名称。
     * @example `ChangeSet_template`
     */
    ChangeSetName: string;
    /**
     * 更改集ID。
     * @example `4c11658d-bd47-4dd0-ba64-727edc62****`
     */
    ChangeSetId: string;
    /**
     * 更改集执行状态。
     * @example `AVAILABLE`
     */
    ExecutionStatus: string;
    /**
     * 更改集类型。
     * @example `UPDATE`
     */
    ChangeSetType: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 资源栈在创建或更新失败时是否回滚。
     * @example `false`
     */
    DisableRollback: boolean;
    /**
     * 更改集所属资源栈名。
     * @example `stack_2021-10-13`
     */
    StackName: string;
    /**
     * 资源栈创建或更新超时时间。
     * @example `60`
     */
    TimeoutInMinutes: number;
    /**
     * 更改集所属资源栈ID。
     * @example `a486fc19-ebb7-4ce9-a70b-554a7c3d****`
     */
    StackId: string;
    /**
     * 更改集相关输出日志。
     */
    Log: {
        /**
         * Terraform输出日志。仅Terraform类型资源栈的更改集返回该参数。
         * > 创建中的更改集不返回该参数。该参数表示创建更改集的日志。
         */
        TerraformLogs: {
            /**
             * 执行的Terraform命令名称。取值：
             * - apply
             * - plan
             * - destroy
             * - version
             * 关于命令含义的更多信息，请参见[Command](https://www.terraform.io/cli/commands)。
             * @example `apply`
             */
            Command: string;
            /**
             * 输出流。取值：
             * - stdout：标准输出。
             * - stderr：标准错误。
             * @example `stdout`
             */
            Stream: string;
            /**
             * 当前命令在当前输出流中输出的内容。
             * @example `Apply complete! Resources: 42 added, 0 changed, 0 destroyed.`
             */
            Content: string;
        }[];
    };
}
