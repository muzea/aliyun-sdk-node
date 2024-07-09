export interface DescribeProcessTasksResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E7698CFB-4E1C-5840-8EC9-691B86729E94`
     */
    RequestId: string;
    /**
     * 处置任务列表。
     */
    ProcessTasks: {
        /**
         * 处置任务的唯一标识。
         * @example `150xxxxxxxxx95066`
         */
        TaskId: string;
        /**
         * 提交处置任务的阿里云账户ID。
         * @example `123xxxx355`
         */
        Creator: string;
        /**
         * 处置任务的创建时间，格式：13位的时间戳。
         * @example `1700031183572`
         */
        GmtCreateMillis: number;
        /**
         * 处置任务的修改时间，格式：13位的时间戳。
         * @example `1700031183572`
         */
        GmtModifiedMillis: number;
        /**
         * 处置任务关联的云产品CODE。
         * @example `WAF`
         */
        YunCode: string;
        /**
         * 处置的实体名称。
         * @example `1.1.1.x`
         */
        EntityName: string;
        /**
         * 处置的实体类型。
         * @example `ip`
         */
        EntityType: string;
        /**
         * 处置任务的状态。
         * @example `11`
         */
        TaskStatus: number;
        /**
         * 处置的阿里云账户ID。
         * @example `123xxxxx234`
         */
        Scope: string;
        /**
         * 处置任务的输入参数。
         * @example `{"groupuuid":"c6a9b1df-f4ac-4078-bef4-99xxxxxx"}`
         */
        InputParams: string;
        /**
         * 处置任务的场景CODE。
         * @example `event_xxx_whole_process`
         */
        SceneCode: string;
        /**
         * 处置任务的场景名称。
         * @example `waf_whole_process`
         */
        SceneName: string;
        /**
         * 处置任务的下发时间，格式：13位的时间戳。
         * @example `1700031183572`
         */
        ProcessTime: number;
        /**
         * 处置任务的解封时间，格式：13位的时间戳。
         * @example `1700031183572`
         */
        RemoveTime: number;
        /**
         * 关联的策略ID。
         * @example `92af3c79-1754-4646-9366-9ddbd1e45536_xxxx`
         */
        ProcessStrategyUuid: string;
        /**
         * 处置任务的提交来源。
         * @example `system`
         */
        Source: string;
        /**
         * 错误码。
         * @example `sts_openapi.Info.DefenseSceneNotSupported`
         */
        ErrCode: string;
        /**
         * 错误信息。
         * @example `ParamError : The parameters of your request are invalid`
         */
        ErrMsg: string;
        /**
         * 错误提示。
         * @example `Verify that the input parameters of the components are correct`
         */
        ErrTip: string;
    }[];
    /**
     * 页面显示的信息。
     */
    Page: {
        /**
         * 查询到的信息总数量。
         * @example `30`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页查询时，每页显示的条目数量。
         * @example `10`
         */
        PageSize: number;
    };
}
