export interface ValidateTemplateContentResponse {
    /**
     * 模板输出。
     * @example `{}`
     */
    Outputs: string;
    /**
     * 请求ID。
     * @example `D5EE9591-1F2D-573E-8751-7F08BBB388D4`
     */
    RequestId: string;
    /**
     * 模板参数。
     * @example `{ "Status": { "Description": "(Required) The status of the Ecs instance.", "Type": "String" } }`
     */
    Parameters: string;
    /**
     * RAM角色
     * @example `OOSServiceRole`
     */
    RamRole: string;
    /**
     * 模板中定义的任务。
     */
    Tasks: {
        /**
         * 任务输出。
         * @example `.instanceId`
         */
        Outputs: string;
        /**
         * 动作类型。
         * @example `ACS::ExecuteAPI`
         */
        Type: string;
        /**
         * 任务描述。
         * @example `(Required) The status of the Ecs instance.`
         */
        Description: string;
        /**
         * 任务名称。
         * @example `foo`
         */
        Name: string;
        /**
         * 任务属性。
         * @example `{"API": "DescribeInstances","Parameters": {"Status": "{{ Status }}"},"Service": "Ecs"}`
         */
        Properties: string;
    }[];
}
