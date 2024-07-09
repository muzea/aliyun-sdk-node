export interface DescribePlaybooksRequest {
    /**
     * 剧本的启用状态，取值：
     * - **1**：表示剧本已启用。
     * - **0**：表示剧本未启用
     * @example `1`
     */
    "Active"?: number;
    /**
     * 剧本的类型，取值：
     * - **preset**：预定义剧本。
     * - **user**：自定义剧本。
     * @example `user`
     */
    "OwnType"?: string;
    /**
     * 查询的开始时间，格式：13位的时间戳。
     * @example `1683526277415`
     */
    "StartMillis"?: number;
    /**
     * 查询的结束时间，格式：13位的时间戳。
     * @example `1683858064361`
     */
    "EndMillis"?: number;
    /**
     * 剧本的UUID。
     * >通过UUID可查询某一具体的剧本信息。
     * > - 调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `8baa6cff-319e-4ede-97bc-1xxxxxx`
     */
    "PlaybookUuid"?: string;
    /**
     * 剧本的名称。
     * @example `demo_playbook`
     */
    "Name"?: string;
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回10条数据。
     * > 建议PageSize取值不要为空。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为1，表示从第1页开始显示。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 排序依据，默认为1。取值：
     * - 1：上次修改时间
     * - 2：最近执行时间
     * @example `1`
     */
    "Sort"?: string;
    /**
     * 排序逻辑，默认为desc，取值：
     * - desc ：逆序
     * - asc：顺序
     * @example `desc`
     */
    "Order"?: string;
}
