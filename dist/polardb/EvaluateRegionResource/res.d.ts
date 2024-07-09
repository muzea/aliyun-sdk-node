export interface EvaluateRegionResourceResponse {
    /**
     * 请求ID。
     * @example `69A85BAF-1089-4CDF-A82F-0A140F******`
     */
    RequestId: string;
    /**
     * 是否有足够的资源。
     * * **true**：有足够的资源。
     * * **false**：资源不足。
     * @example `true`
     */
    DBInstanceAvailable: string;
    /**
     * 数据库引擎类型，取值范围如下：
     * - **MySQL**
     * - **PostgreSQL**
     * - **Oracle**
     * @example `MySQL`
     */
    DBType: string;
    /**
     * 数据库引擎版本号。
     * * MySQL版本号取值范围如下：
     *     * **5.6**
     *     * **5.7**
     *     * **8.0**
     * * PostgreSQL版本号取值范围如下：
     *     * **11**
     *     * **14**
     * * Oracle版本号取值为**11**。
     * @example `8.0`
     */
    DBVersion: string;
}
