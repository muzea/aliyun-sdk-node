export interface ListNamespaceChangeOrdersRequest {
    /**
     * 命名空间ID。
     * @example `cn-shanghai:test`
     */
    "NamespaceId": string;
    /**
     * 发布单状态。取值说明如下：
     * - **0**：准备。
     * - **1**：执行中。
     * - **2**：执行成功。
     * - **3**：执行失败。
     * - **6**：终止。
     * - **10**：系统异常执行失败。
     * @example `2`
     */
    "CoStatus"?: string;
    /**
     * 发布单类型。取值说明如下：
     * - **CoBatchStartApplication**：批量启动应用。
     * - **CoBatchStopApplication**：批量停止应用。
     * @example `CoBatchStartApplication`
     */
    "CoType"?: string;
    /**
     * 发布单描述信息模糊查询（包含此**key**的都会返回）。
     * @example `test`
     */
    "Key"?: string;
    /**
     * 当前页。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize"?: number;
}
