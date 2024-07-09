export interface QueryDataServiceListResponse {
    /**
     * 请求ID。
     * @example `78C1AA2D-9201-599E-A0BA-6FC462E57A95`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         *
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 总行数。
         * @example `1`
         */
        TotalNum: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 页记录数
         * @example `10`
         */
        PageSize: number;
        /**
         * 数据服务信息。
         */
        Data: {
            /**
             * 数据服务的唯一ID。
             * @example `dtsuq3i31f5j8v848b`
             */
            Sid: string;
            /**
             * 数据服务名称。
             * @example `测试报表`
             */
            Name: string;
            /**
             * 描述
             * @example `测试用`
             */
            Desc: string;
            /**
             * cube标识id
             * @example `d14e7448-0eb3-40d3-9375-4afef8de29fd`
             */
            CubeId: string;
            /**
             * 数据集名称。
             * @example `测试数据集`
             */
            CubeName: string;
            /**
             * 工作空间ID。
             * @example `7350a155-0e94-4c6c-8620-57bbec38****`
             */
            WorkspaceId: string;
            /**
             * 工作空间名称。
             * @example `测试工作空间`
             */
            WorkspaceName: string;
            /**
             * 创建时间。
             * @example `2023-05-18 14:00:02.0`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2023-03-21 18:02:36`
             */
            GmtModified: string;
            /**
             * 创建人id
             * @example `7cb94cd48701`
             */
            CreatorId: string;
            /**
             * 创建者姓名
             * @example `张仔龙`
             */
            CreatorName: string;
            /**
             * 修改者userId。
             * @example `7cb94cd48701`
             */
            ModifierId: string;
            /**
             * 修改人名
             * @example `张仔龙
            `
             */
            ModifierName: string;
            /**
             * 拥有者id
             * @example `862801339`
             */
            OwnerId: string;
            /**
             * 所有者名字
             * @example `李四`
             */
            OwnerName: string;
            /**
             * 数据服务的Model，JSON格式。
             */
            Content: {
                /**
                 * 返回信息。
                 */
                ReturnFields: {
                    /**
                     * 字段参数名。
                     * @example `s_number`
                     */
                    Alias: string;
                    /**
                     * 返回字段的备注。
                     * @example `主题配置已存在。`
                     */
                    Desc: string;
                    /**
                     * 聚合操作符。例如SUM、AVG和MAX。
                     * @example `SUM`
                     */
                    Aggregator: string;
                    /**
                     * 排序。
                     * - asc：升序
                     * - desc：降序
                     * - no：不排序
                     * @example `no`
                     */
                    Orderby: string;
                    /**
                     * 对应的cube字段信息。
                     */
                    Field: {
                        /**
                         * 原始字段唯一标志ID。
                         * @example `1c1f88cb7d`
                         */
                        Fid: string;
                        /**
                         * cube字段的唯一名称，主要用于返回结果的唯一定位。
                         * @example `sss`
                         */
                        Name: string;
                        /**
                         * 类型。
                         * - Dimension：维度
                         * - Measure：度量
                         * @example `dimension`
                         */
                        Type: string;
                        /**
                         * cube模型中的显示名（可能是中文，也可能是英文）。
                         * @example `日期(year)`
                         */
                        Caption: string;
                        /**
                         * 对应的物理字段名。
                         * @example `shid_star`
                         */
                        Column: string;
                        /**
                         * 数据类型。
                         * - number：数字
                         * - string：字符串
                         * - date：时间
                         * - datetime：时间
                         * - time：时间
                         * - geographic：地理
                         * - boolean：布尔
                         * - url：url
                         * @example `datetime`
                         */
                        DataType: string;
                        /**
                         * 日期维度、地理维度包含此属性，支持的粒度。
                         * @example `yearRegion`
                         */
                        Granularity: string;
                    };
                }[];
                /**
                 * 请求参数信息。
                 */
                Filter: {
                    /**
                     * 多个SQL文本关键词的逻辑关系。
                     * - **or**：或。
                     * - **and**：与。
                     * @example `and`
                     */
                    LogicalOperator: string;
                    /**
                     * 类型。
                     * - basic：基本
                     * - combined：复杂
                     * @example `basic`
                     */
                    Type: string;
                    /**
                     * 组合条件。
                     */
                    Filters: any[];
                };
                /**
                 * cube标识id。
                 * @example `56f9f34a-bdba-496a-91a3-a18b1ff73a80`
                 */
                CubeId: string;
                /**
                 * 数据集名称。
                 * @example `测试数据集`
                 */
                CubeName: string;
                /**
                 * 明细 or 汇总。
                 * @example `true`
                 */
                Detail: boolean;
            };
        }[];
    };
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
