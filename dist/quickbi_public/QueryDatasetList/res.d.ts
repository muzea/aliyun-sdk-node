export interface QueryDatasetListResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回数据集列表的分页结果，数据集列表的详细信息存放在返回参数Data中。
     */
    Result: {
        /**
         * 总页数。
         * @example `1`
         */
        TotalPages: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 请求接口时设置的每页行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总行数。
         * @example `1`
         */
        TotalNum: number;
        /**
         * 数据集列表详情。
         */
        Data: {
            /**
             * 是否开启行级权限。取值范围：
             * - true：开启
             * - false：关闭
             * @example `true`
             */
            RowLevel: boolean;
            /**
             * 工作空间ID。
             * @example `95296e95-ca89-4c7d-8af9-dedf0ad06adf`
             */
            WorkspaceId: string;
            /**
             * 数据集备注。
             * @example `测试用数据集`
             */
            Description: string;
            /**
             * 创建时间。
             * @example `2020-11-02 10:36:05`
             */
            CreateTime: string;
            /**
             * 数据集拥有者的昵称。
             * @example `张三`
             */
            OwnerName: string;
            /**
             * 工作空间名称。
             * @example `测试空间`
             */
            WorkspaceName: string;
            /**
             * 数据集拥有者在Quick BI的UserID。
             * @example `136516262323****`
             */
            OwnerId: string;
            /**
             * 修改时间。
             * @example `2020-11-02 10:36:05`
             */
            ModifyTime: string;
            /**
             * 数据集名称。
             * @example `company_sales_record_copy12`
             */
            DatasetName: string;
            /**
             * 数据集ID。
             * @example `5820f58c-c734-4d8a-baf1-7979af4f****`
             */
            DatasetId: string;
            /**
             * 是否开启抽取加速。取值范围：
             * - true：开启
             * - false：关闭
             * @example `true`
             */
            OpenOfflineAcceleration: boolean;
            /**
             * 数据集所属数据源信息
             */
            DataSource: {
                /**
                 * 数据源类型。
                 * @example `mysql`
                 */
                DsType: string;
                /**
                 * 数据源名称。
                 * @example `测试数据源`
                 */
                DsName: string;
                /**
                 * 数据源ID。
                 * @example `261b252d-c3c3-498a-a0a7-5d1ec6cd****`
                 */
                DsId: string;
            };
            /**
             * 数据集所处目录信息
             */
            Directory: {
                /**
                 * 所处目录路径的ID。
                 * @example `schemaad8aad00-9c55-4984-a767-b4e0ec60****`
                 */
                PathId: string;
                /**
                 * 所处目录路径的名称。
                 * @example `我的数据集目录`
                 */
                PathName: string;
                /**
                 * 目录名称。
                 * @example `我的数据集目录`
                 */
                Name: string;
                /**
                 * 目录ID。
                 * @example `schemaad8aad00-9c55-4984-a767-b4e0ec60****`
                 */
                Id: string;
            };
        }[];
    };
}
