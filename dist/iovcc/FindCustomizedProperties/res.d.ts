export interface FindCustomizedPropertiesResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 自定义属性查询结果
     */
    CustomizedPropertyList: {
        /**
         * 返回记录列表
         */
        Items: {
            /**
             * 创建时间戳
             * @example `1324320000`
             */
            GmtCreateTimestamp: number;
            /**
             * 自定义属性值
             * @example `1.0,2.0`
             */
            Value: string;
            /**
             * 创建时间
             * @example `2018-01-01 00:00:00`
             */
            GmtCreate: string;
            /**
             * 自定义属性名
             * @example `AnotherWhiteList`
             */
            Name: string;
            /**
             * 自定义属性ID
             * @example `1`
             */
            Id: number;
        }[];
        /**
         * 符合条件的记录总数
         * @example `30`
         */
        TotalCount: number;
    };
}
