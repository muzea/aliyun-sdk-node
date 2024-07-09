export interface DescribeNamespacesResponse {
    /**
     * 请求ID。
     * @example `67F33190-946B-1105-B6A1-E2DF0426DD51`
     */
    RequestId: string;
    /**
     * 是否成功，取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 总条数
     * @example `5`
     */
    TotalCount: number;
    /**
     * 总页数
     * @example `2`
     */
    TotalPage: number;
    /**
     * 当前页数。
     * @example `1`
     */
    PageIndex: number;
    /**
     * 设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 项目空间列表
     */
    Namespaces: {
        /**
         * 项目空间的名称。
         * @example `ns-1`
         */
        Namespace: string;
        /**
         * 项目空间的状态，取值如下：
         * - CREATING：正在创建。
         * - DELETING：正在删除。
         * - MODIFYING：正在修改资源规格。
         * - SUCCESS：上一个操作执行成功。
         * - FAILED：上一个操作执行失败。
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 创建时间。
         * @example `1629879567394`
         */
        GmtCreate: number;
        /**
         * 修改时间。
         * @example `1629879567394`
         */
        GmtModified: number;
        /**
         * 资源规格信息
         */
        ResourceSpec: {
            /**
             * CPU数量。
             * @example `10`
             */
            Cpu: number;
            /**
             * 内存大小。
             * @example `40`
             */
            MemoryGB: number;
        };
        /**
         * 已使用的资源。
         */
        ResourceUsed: {
            /**
             * 已使用的CPU数量。
             * @example `2`
             */
            Cpu: number;
            /**
             * 已使用的内存数量。
             * @example `4`
             */
            MemoryGB: number;
            Cu: number;
        };
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键
             * @example `flink`
             */
            Key: string;
            /**
             * 标签值
             * @example `test`
             */
            Value: string;
        }[];
        Ha: boolean;
    }[];
}
