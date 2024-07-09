export interface ListFlowsResponse {
    /**
     * 当前地域下工作流的总数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `A4865221-E0BC-5AF6-BDD3-749F5A2371CC`
     */
    RequestId: string;
    /**
     * 工作流列表
     */
    Flows: {
        /**
         * 最后更新时间
         * @example `2019-07-19T05:43:16.783Z`
         */
        UpdateTime: string;
        /**
         * 工作流来源
         * @example `Solution`
         */
        FlowSource: string;
        /**
         * 状态。
         * - **Enabled**：启用
         * - **Disabled**：已禁用
         * @example `Enabled`
         */
        FlowStatus: string;
        /**
         * 创建时间
         * @example `2019-07-19T05:43:16.783Z`
         */
        CreateTime: string;
        /**
         * 编辑模式
         * @example `Normal`
         */
        FlowEditMode: string;
        /**
         * 当前最新版本
         * @example `1`
         */
        VersionId: string;
        /**
         * 工作流的描述
         * @example `test flow`
         */
        FlowDescription: string;
        /**
         * 工作流名称
         * @example `test`
         */
        FlowName: string;
        /**
         * 模板 ID，可以通过 ListTemplates 获得模板 ID
         * @example `tp-uf6lzhzywy28bs`
         */
        TemplateId: string;
        /**
         * 工作流ID
         * @example `lc-uf6axpwfcw4ubx`
         */
        FlowId: string;
        /**
         * 当前工作流所属地域
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 资源组ID
         * @example `rg-acfmzyxxxxxxx`
         */
        ResourceGroupId: string;
    }[];
}
