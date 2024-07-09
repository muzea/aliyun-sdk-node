export interface ListWorkFlowTemplatesResponse {
    /**
     * 请求ID。
     * @example `41067071-0243-4AAB-B3CF-4DE6D54F53B4`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误消息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    WorkFlowTemplates: {
        /**
         * 审批模板列表。
         */
        WorkFlowTemplate: {
            /**
             * 是否系统定义的审批模板，取值和说明如下：
             * - 1：是
             * - 0：否
             * @example `1`
             */
            IsSystem: number;
            WorkflowNodes: {
                /**
                 * 审批节点信息。
                 */
                WorkflowNode: {
                    /**
                     * 备注。
                     * @example `test`
                     */
                    Comment: string;
                    /**
                     * 节点类型，取值和说明如下：
                     * - SYS：系统定义
                     * - USER_LIST：用户自定义
                     * @example `SYS`
                     */
                    NodeType: string;
                    /**
                     * 节点名称。
                     * @example `test`
                     */
                    NodeName: string;
                    /**
                     * 顺序。
                     * @example `1`
                     */
                    Position: number;
                    /**
                     * 创建人ID。
                     * @example `1234`
                     */
                    CreateUserId: number;
                    /**
                     * 模板ID。
                     * @example `12345`
                     */
                    TemplateId: number;
                    /**
                     * 节点ID。
                     * @example `123`
                     */
                    NodeId: number;
                }[];
            };
            /**
             * 备注。
             * @example `test`
             */
            Comment: string;
            /**
             * 模板是否启用，取值和说明如下：
             * - Y：启用
             * - N：禁用
             * @example `Y`
             */
            Enabled: string;
            /**
             * 模板名称。
             * @example `Admin`
             */
            TemplateName: string;
            /**
             * 模板ID。
             * @example `12345`
             */
            TemplateId: number;
            /**
             * 创建人ID。
             * @example `1234`
             */
            CreateUserId: number;
        }[];
    };
}
