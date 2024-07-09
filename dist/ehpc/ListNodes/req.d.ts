export interface ListNodesRequest {
    /**
     * 待查询的集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 节点类型。取值范围：
     * - Manager：管控节点
     * - Login：登录节点
     * - Compute：计算节点
     * @example `Manager`
     */
    "Role"?: string;
    /**
     * 节点名称，支持模糊查询，支持MySQL的正则表达式。
     * @example `test-HostName`
     */
    "HostName"?: string;
    /**
     * 显示的页码，起始值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数。取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 节点列表排序方式。取值范围：
     * - Forward：正序排序。
     * - Backward：逆序排序。
     * 默认值：Forward
     * > 和SortBy同时使用，如SortBy设置为AddedTime，Sequence设置为Forward，表示按节点加入时间正序查询。
     * @example `Forward`
     */
    "Sequence"?: string;
    /**
     * 节点列表排序方式。取值范围：
     * - AddedTime：按加入时间排序
     * - HostName：按节点主机名称排序
     * @example `AddedTime`
     */
    "SortBy"?: string;
    /**
     * 节点状态过滤选项。
     * 取值格式为：{"status":"node_status"}，请将其中node_status替换为节点的状态。节点的取值范围为：
     * - uninit：安装中
     * - exception：异常
     * - running：运行中
     * - initing：初始化中
     * - releasing：释放中
     * - untracking：未加入集群
     * - stopped：已停止
     * @example `{"status":"running"}`
     */
    "Filter"?: string;
    /**
     * 私网IP地址。
     * @example `172.16.**.**`
     */
    "PrivateIpAddress"?: string;
    /**
     * 主机名前缀。查询具有指定前缀的节点。
     * @example `compute`
     */
    "HostNamePrefix"?: string;
    /**
     * 主机名后缀。查询具有指定后缀的节点。
     * @example `01`
     */
    "HostNameSuffix"?: string;
}
