export interface GetTableDesignProjectFlowResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `B5FD0BC8-2D90-4478-B8EC-A0E92E0B1773`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值说明如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码，请求异常时返回。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 结构设计流程信息。
     */
    ProjectFlow: {
        /**
         * 流程节点列表。
         */
        FlowNodeArray: {
            /**
             * 流程节点角色：
             * - START：开始。
             * - DESIGN：结构设计。
             * - PUBLISH：发布。
             * - END：结束。
             * @example `DESIGN`
             */
            NodeRole: string;
            /**
             * 节点的标题。
             * @example `设计阶段`
             */
            NodeTitle: string;
            /**
             * 流程所在环节，从1开始。
             * @example `1`
             */
            Position: number;
            /**
             * 定义该节点是否为发布锚点。
             * 一个结构设计流程中有且仅有一个发布锚点，负责执行发布操作。发布锚点发布后，将生成发布后镜像、释放DDL元数据锁。
             * @example `false`
             */
            PublishAnchor: boolean;
            /**
             * 是否允许流程返回结构设计阶段，取值：
             * - **1**：允许。
             * - **0**：不允许，只能定义在PUBLISH（发布）节点上。
             * @example `1`
             */
            BackToDesign: boolean;
            /**
             * 是否允许跳过该当前节点，取值：
             * - **1**：可以。
             * - **0**：不可以，只能定义在PUBLISH（发布）节点上。
             * @example `0`
             */
            CanSkip: boolean;
            /**
             * 提交发布可选择执行策略列表。
             */
            PublishStrategies: string[];
        }[];
        /**
         * 当前结构设计流程所在节点位置。
         * @example `2`
         */
        CurrentPosition: number;
        /**
         * 结构设计应用的安全规则集名称。
         * @example `mysql default`
         */
        RuleName: string;
        /**
         * 结构设计应用的安全规则集描述。
         * @example `mysql缺省规则集`
         */
        RuleComment: string;
    };
}
