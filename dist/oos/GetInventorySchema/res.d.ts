export interface GetInventorySchemaResponse {
    /**
     * 翻页标记的Token
     * @example `gAAAAABfh8MVLQI9AuKGACLgjbsXbWs-Mna47IDM6tr6wK7TZ1`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `89117642-7167-4F4D-B7F1-876582279E3E`
     */
    RequestId: string;
    /**
     * 分页大小
     * @example `1`
     */
    MaxResults: string;
    /**
     * 组件配置清单详细信息
     */
    Schemas: {
        /**
         * 组件版本
         * @example `1.0`
         */
        Version: string;
        /**
         * 组件名称
         * @example `ACS:Application`
         */
        TypeName: string;
        /**
         * 组件配置的详细属性
         */
        Attributes: {
            /**
             * 组件配置的属性名称
             * @example `ApplicationType`
             */
            Name: string;
            /**
             * 组件配置的数据类型
             * @example `STRING`
             */
            DataType: string;
        }[];
    }[];
}
