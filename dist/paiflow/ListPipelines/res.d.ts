export interface ListPipelinesResponse {
    /**
     * 请求ID。
     * @example `DA869D1B-035A-43B2-ACC1-C56681B****`
     */
    RequestId: string;
    /**
     * 工作流列表。
     */
    Pipelines: {
        /**
         * 工作流ID。
         * @example `pipeline-c0h44g3wlwkj8o*****`
         */
        PipelineId: string;
        /**
         * 创建UTC时间，日期格式iso8601。
         * @example `2021-01-06T14:32:50Z`
         */
        GmtCreateTime: string;
        /**
         * 修改UTC时间，日期格式iso8601。
         * @example `2021-01-06T22:26:24Z`
         */
        GmtModifiedTime: string;
        /**
         * 工作流提供者。PAI平台提供的工作流Provider为pai。
         * @example `pai`
         */
        Provider: string;
        /**
         * 工作流标识。
         * @example `SqlWriteTable_2`
         */
        Identifier: string;
        /**
         * 工作流版本。
         * @example `v1`
         */
        Version: string;
        /**
         * 工作流当前版本标识，用户每次更新，会生成该uuid。
         * @example `q8dp9hklueznh*****`
         */
        Uuid: string;
        /**
         * 工作空间ID。
         * @example `726**`
         */
        WorkspaceId: string;
    }[];
    /**
     * 总数。
     * @example `15`
     */
    TotalCount: number;
}
