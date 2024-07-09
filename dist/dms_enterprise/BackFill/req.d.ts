export interface BackFillRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `15***`
     */
    "DagId": number;
    /**
     * 补数据开始节点ID列表。
     * > 参数缺省时运行整个任务流。
     */
    "StartNodeIds"?: number[];
    /**
     * 过滤条件，指定任务流中无需补数据的节点Id列表。
     */
    "FilterNodeIds"?: number[];
    /**
     * 是否运行下游节点。缺省时默认为true。
     * @example `true`
     */
    "IsTriggerSubTree"?: boolean;
    /**
     * 补数据业务时间。指定时间补数据需要填写该参数。
     * @example `2022-01-14`
     */
    "BackFillDate"?: string;
    /**
     * 补数据开始业务时间。指定时间范围补数据需要填写该参数。
     * @example `2022-01-14`
     */
    "BackFillDateBegin"?: string;
    /**
     * 补数据结束业务时间。指定时间范围补数据需要填写该参数。
     * @example `2022-09-29`
     */
    "BackFillDateEnd"?: string;
    /**
     * 补数据时间间隔，单位：小时。最小值：1，默认值：24。
     * @example `24`
     */
    "Interval"?: number;
    /**
     * 补数据任务流运行顺序。取值：
     * - **0**：降序。从大日期到小日期。
     * - **1**：默认值，升序。从小日期到大日期。
     * @example `0`
     */
    "Asc"?: boolean;
    /**
     * 历史任务流ID。
     * > 若您未填写该参数，在调用API时，系统会自动获取最近发布的任务流版本ID作为该参数的值。若没有发布过任务流，系统获取不到任务流版本ID，则调用会出错。
     * @example `16***`
     */
    "HistoryDagId"?: number;
}
