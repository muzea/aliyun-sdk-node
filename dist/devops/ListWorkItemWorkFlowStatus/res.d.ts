export interface ListWorkItemWorkFlowStatusResponse {
    /**
     * 请求id，每次请求都是唯一值
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误返回码
     * @example `例：Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误返回信息
     * @example `errormessage`
     */
    errorMessage: string;
    /**
     * 接口是否正常返回
     * @example `true或者false`
     */
    success: boolean;
    /**
     * 工作流状态
     */
    statuses: {
        /**
         * 工作流状态id
         * @example `dfexxxxxf4fee18xxxxx36`
         */
        identifier: string;
        /**
         * 工作流状态名称
         * @example `例：待处理`
         */
        name: string;
        /**
         * 阶段信息-名称
         * @example `例：确认阶段`
         */
        workflowStageName: string;
        /**
         * 阶段信息-阶段的唯一标识
         * @example `例如：1`
         */
        workflowStageIdentifier: string;
        /**
         * 状态来源，system：系统默认的，custom:企业、项目或者团队新建的
         * @example `system`
         */
        source: string;
        /**
         * 创建时间
         * @example `1620455467000`
         */
        gmtCreate: number;
        /**
         * 状态的创建人
         * @example `用户阿里云pk，例如19xxxx31947xxxx`
         */
        creator: string;
        /**
         * 描述
         * @example `该状态的具体信息`
         */
        description: string;
        /**
         * 修改人
         * @example `用户阿里云pk，例如19xxxx31947xxxx`
         */
        modifier: string;
        /**
         * 更新时间
         * @example `1641870287000`
         */
        gmtModified: number;
        /**
         * 状态作用的资源类型，项目：Project，工作项：Workitem
         * @example `Workitem`
         */
        resourceType: string;
    }[];
}
