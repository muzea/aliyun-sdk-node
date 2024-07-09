export interface GetWorkItemWorkFlowInfoResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMessage: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 工作项信息
     */
    workflow: {
        /**
         * 工作流唯一标识
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        identifier: string;
        /**
         * 工作流名称
         * @example `名称`
         */
        name: string;
        /**
         * 工作流的描述
         * @example `工作流的描述`
         */
        description: string;
        /**
         * 工作流所属的团队空间或项目的identifier
         * @example `e8b26xxxxx6e76aa20xxxxx23`
         */
        ownerSpaceIdentifier: string;
        /**
         * 工作流所属的团队项目类型
         * @example `null`
         */
        ownerSpaceType: string;
        /**
         * 工作流的默认状态id，具体的工作流列表在statuses状态列表里。
         * @example `100005`
         */
        defaultStatusIdentifier: string;
        /**
         * 工作流的状态顺序
         * @example `null`
         */
        statusOrder: string;
        /**
         * 资源来源，项目工作流：Project、工作项工作流：Workitem
         * @example `Project`
         */
        resourceType: string;
        /**
         * 工作流来源，system系统自带的，organization企业配置的工作流，custom项目或者团队自定义
         * @example `system`
         */
        source: string;
        /**
         * 创建时间的时间戳，单位毫秒
         * @example `1640850318000`
         */
        gmtCreate: number;
        /**
         * 修改时间的时间戳，单位毫秒
         * @example `1640850318000`
         */
        gmtModified: number;
        /**
         * 创建人的阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 修改人的阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        modifier: string;
        /**
         * 工作流的流转步骤
         */
        workflowActions: {
            /**
             * 流转步骤的id
             * @example `16274887`
             */
            id: number;
            /**
             * action的名称
             * @example `xxx`
             */
            name: string;
            /**
             * action对应的工作流
             * @example `fd0xxxxxd00d355b05dxxxx26`
             */
            workflowIdentifier: string;
            /**
             * action对应的当前状态id
             * @example `100005`
             */
            workflowStatusIdentifier: string;
            /**
             * action对应的下个状态的信息id
             * @example `100011`
             */
            nextWorkflowStatusIdentifier: string;
        }[];
        /**
         * 状态列表
         */
        statuses: {
            /**
             * 状态唯一标识
             * @example `156603`
             */
            identifier: string;
            /**
             * 状态名
             * @example `待处理`
             */
            name: string;
            /**
             * 阶段信息-名称
             * @example `确认阶段`
             */
            workflowStageName: string;
            /**
             * 阶段信息-阶段的唯一标识
             * @example `1`
             */
            workflowStageIdentifier: string;
            /**
             * 状态来源，system：系统默认的、custom：企业/项目或者团队新建的
             * @example `system`
             */
            source: string;
            /**
             * 创建时间的时间戳，单位毫秒
             * @example `1613805843000`
             */
            gmtCreate: number;
            /**
             * 修改时间的时间戳，单位毫秒
             * @example `1613805843000`
             */
            gmtModified: number;
            /**
             * 创建人阿里云accountId
             * @example `19xx7043xxxxxxx914`
             */
            creator: string;
            /**
             * 修改人阿里云accountId
             * @example `19xx7043xxxxxxx914`
             */
            modifier: string;
            /**
             * 描述信息
             * @example `xxx`
             */
            description: string;
            /**
             * 状态作用的资源类型，项目：Project、工作项：Workitem
             * @example `Workitem`
             */
            resourceType: string;
        }[];
    };
}
