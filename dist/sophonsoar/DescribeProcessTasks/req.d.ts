export interface DescribeProcessTasksRequest {
    /**
     * 处置策略的UUID。
     * >调用[ListDisposeStrategy](~~2584440~~)接口可以获取该参数。
     * @example `92af3c79-1754-4646-9366-9ddbd1e45536_xxxx`
     */
    "ProcessStrategyUuid"?: string;
    /**
     * 处置的实体的名称。
     * @example `127.0.0.1`
     */
    "EntityName"?: string;
    /**
     * 处置的实体类型，取值：
     * - **ip**：表示IP类型实体
     * - **file**：表示文件类型实体
     * - **process**：表示进程类型实体
     * @example `ip`
     */
    "EntityType"?: string;
    /**
     * 处置任务的场景CODE。
     * >调用[DescribeEnumItems](~~DescribeEnumItems~~)接口可以获取该参数，接口的入参**EnumType**为**process**。
     * @example `event_xxx_whole_process`
     */
    "SceneCode"?: string;
    /**
     * 处置任务的状态列表，为数据字符串的格式，取值：
     * - **11**：表示处置中
     * - **21**：表示封禁中
     * - **22**：表示隔离中
     * - **23**：已结束
     * - **24**：已加白
     * - **20**：成功
     * - **90**：失败
     * - **91**：解封失败
     * - **92**：解除隔离失败
     * @example `["11","21"]`
     */
    "TaskStatus"?: string;
    /**
     * 处置的阿里云账户ID。
     * @example `125xxxxx9870`
     */
    "Scope"?: string;
    /**
     * 处置任务的触发来源，为数组字符串格式，取值：
     * - **system**：手动处置事件触发
     * - **custom**：自动响应规则，事件触发
     * - **custom_alert**：自动响应规则，告警触发
     * - **soar-manual**：SOAR手动调用剧本触发
     * - **soar-mdr**：由安全管家服务触发
     * @example `["system"]`
     */
    "Source"?: string;
    /**
     * 处置时间的查询开始时间，格式：13位的时间戳。
     * @example `1700031183572`
     */
    "ProcessActionStart"?: number;
    /**
     * 处置时间的查询结束时间，格式：13位的时间戳。
     * @example `1700031183572`
     */
    "ProcessActionEnd"?: number;
    /**
     * 解封时间的查询开始时间，格式：13位的时间戳。
     * @example `1700031183572`
     */
    "ProcessRemoveStart"?: number;
    /**
     * 解封时间的查询结束时间，格式：13位的时间戳。
     * @example `1700031183572`
     */
    "ProcessRemoveEnd"?: number;
    /**
     * 模糊匹配，会查询实体、处置场景、处置参数字段。
     * @example `12.x.x.x`
     */
    "ParamContent"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回10条数据。
     * > 建议PageSize取值不要为空。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为1，表示从第1页开始显示。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 处置任务关联的云产品，为数据字符串格式，取值：
     * - **WAF**：表示Web应用防火墙
     * - **CFW**：表示云防火墙
     * - **Aegis**：表示云安全中心
     * @example `["WAF"]`
     */
    "YunCode"?: string;
    /**
     * 处置任务的唯一标识。
     * > 用于查询某具体任务，参数可由接口的返回值中获取。
     * @example `150xxxxxxxxx95066`
     */
    "TaskId"?: string;
    /**
     * 结果的排序字段。
     * > 排序的字段，由接口的返回结果中获取。
     * @example `gmtCreate`
     */
    "OrderField"?: string;
    /**
     * 排序方向，取值：
     * - **desc**：递减（默认）
     * - **asc**：递增
     * @example `desc`
     */
    "Direction"?: string;
}
