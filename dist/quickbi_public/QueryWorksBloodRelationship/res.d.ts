export interface QueryWorksBloodRelationshipResponse {
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
     * 作品血缘信息列表。
     */
    Result: {
        /**
         * 组件ID。
         * @example `0696083a-ca72-4d89-8e7a-c017910e0***`
         */
        ComponentId: string;
        /**
         * 组件名称。
         * @example `线图`
         */
        ComponentName: string;
        /**
         * 组件类型。
         * @example `3`
         */
        ComponentType: number;
        /**
         * 组件类型名称。
         * @example `LINE`
         */
        ComponentTypeName: string;
        /**
         * 查询参数引用列的列表。
         */
        QueryParams: {
            /**
             * 字段唯一ID。
             * @example `Ndc78a4_order_number`
             */
            Uid: string;
            /**
             * 全局唯一的PathId。
             * @example `schema7d1944eb-443e-48c6-8123-bf45a99e7e74.dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record.[Ndc78a4_order_level].[Ndc78a4_order_level].[Ndc78a4_order_level]`
             */
            PathId: string;
            /**
             * 字段原名。
             * @example `order_number`
             */
            Caption: string;
            /**
             * 字段类型。取值范围：
             * - string：字符串类型
             * - date：仅包含年月日部分的日期类型
             * - datetime：通用日期类型
             * - time：仅包含时分秒部分的日期类型
             * - number：数值类型
             * - boolean：布尔类型
             * - geographic：地理位置
             * - url：字符串类型
             * - imageUrl：图片链接类型
             * - multivalue：多值列
             * @example `number`
             */
            DataType: string;
            /**
             * 是否是度量。取值范围：
             * true：是
             * false：否
             * @example `true`
             */
            IsMeasure: boolean;
            /**
             * 所属位置ID。
             * @example `area_column`
             */
            AreaId: string;
            /**
             * 所属位置名称。
             * @example `列（度量）`
             */
            AreaName: string;
        }[];
        /**
         * 数据集ID。
         * @example `dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record`
         */
        DatasetId: string;
    }[];
}
