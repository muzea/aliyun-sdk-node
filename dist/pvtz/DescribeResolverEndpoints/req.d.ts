export interface DescribeResolverEndpointsRequest {
    /**
     * 关键字，照”%Keyword%”模式搜索终端节点名称
     * @example `终端节点-test`
     */
    "Keyword"?: string;
    /**
     * 语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 当前页码，默认是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小，默认是20；最大支持100
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 终端节点状态，不传获取全部，传入则获取指定状态：
     * - SUCCESS: 工作正常
     * - INIT：创建中
     * - FAILED：创建失败
     * - CHANGE_INIT: 修改中
     * - CHANGE_FAILED: 修改失败
     * - EXCEPTION: 工作异常
     * @example `SUCCESS`
     */
    "Status"?: string;
}
