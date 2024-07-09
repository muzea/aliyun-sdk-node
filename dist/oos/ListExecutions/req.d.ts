export interface ListExecutionsRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称。名称未包含关系，最终列出包含所填模板名称的所有模板。
     * @example `MyTemplate`
     */
    "TemplateName"?: string;
    /**
     * 执行状态，取值范围：Running, Started, Success, Failed, Waiting, Cancelled, Pending, Skipped。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 执行ID
     * @example `exec-xxx`
     */
    "ExecutionId"?: string;
    /**
     * 开始时间小于等于指定时间的执行
     * @example `2019-05-16T10:26:14Z`
     */
    "StartDateBefore"?: string;
    /**
     * 开始时间大于等于指定时间的执行
     * @example `2019-05-16T10:26:14Z`
     */
    "StartDateAfter"?: string;
    /**
     * 结束时间小于等于指定时间的执行
     * @example `2019-05-16T10:26:14Z`
     */
    "EndDateBefore"?: string;
    /**
     * 结束时间大于等于指定时间的执行
     * @example `2019-05-16T10:26:14Z`
     */
    "EndDateAfter"?: string;
    /**
     * 执行模式。取值范围：
     * - **Automatic**
     * - **Debug**
     * @example `Automatic`
     */
    "Mode"?: string;
    /**
     * 执行者
     * @example `vme`
     */
    "ExecutedBy"?: string;
    /**
     * 父执行ID
     * @example `exec-xxx`
     */
    "ParentExecutionId"?: string;
    /**
     * RAM角色
     * @example `OOSServiceRole`
     */
    "RamRole"?: string;
    /**
     * 是否包含子执行。默认为False。
     * @example `true`
     */
    "IncludeChildExecution"?: boolean;
    /**
     * 执行的模版类型。可分为Other、TimerTrigger、EventTrigger、AlarmTrigger。
     * @example `Other`
     */
    "Category"?: string;
    /**
     * 执行的标签
     * @example `{
          "k1": "v1",
          "k2": "v2"
    }`
     */
    "Tags"?: any;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ`
     */
    "NextToken"?: string;
    /**
     * 排序字段。取值范围：
     * - **StartDate**（默认值）：创建时间
     * - **EndDate**：结束时间
     * - **Status**：状态
     * @example `StartDate`
     */
    "SortField"?: string;
    /**
     * 排序方向。取值范围：
     * - **Ascending**：升序
     * - **Descending**（默认值）：降序
     * @example `Ascending`
     */
    "SortOrder"?: string;
    /**
     * ECS资源ID
     * @example `i-xxx`
     */
    "ResourceId"?: string;
    /**
     * 资源的模板名称
     * @example `ACS-ECS-TEST`
     */
    "ResourceTemplateName"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
    /**
     * 执行的描述。
     * @example `MyDescription`
     */
    "Description"?: string;
    /**
     * 执行的深度，可分为RootDepth、FirstChildDepth
     * RootDepth只返回主执行，FirstChildDepth只返回第一层的子执行。此参数和IncludeChildExecution参数只能同时传入一个，推荐使用Depth。
     * @example `RootDepth`
     */
    "Depth"?: string;
    /**
     * 执行的模板类型列表。可分为Other、TimerTrigger、EventTrigger、AlarmTrigger。此参数和Category参数只能同时传入一个，推荐使用Categories。
     * @example `["TimerTrigger"、"EventTrigger"]`
     */
    "Categories"?: string;
}
