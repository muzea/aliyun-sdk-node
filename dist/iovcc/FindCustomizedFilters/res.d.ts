export interface FindCustomizedFiltersResponse {
    /**
     * 查询自定义过滤条件结果
     */
    CustomizedFilterList: {
        /**
         * 结果详情列表
         */
        Items: {
            /**
             * 修改时间戳
             * @example `12354350000`
             */
            GmtModifyTimestamp: number;
            /**
             * 创建时间戳
             * @example `12354350000`
             */
            GmtCreateTimestamp: number;
            /**
             * 过滤条件值
             * @example `1,4`
             */
            Value: string;
            /**
             * 修改时间
             * @example `2018-01-01 00:01:00`
             */
            GmtModify: string;
            /**
             * 值的比较类型： **NUMBER**（按数字比较），**STRING**（按字符串比较）。
             * @example `NUMBER`
             */
            ValueCompareType: string;
            /**
             * 创建时间
             * @example `2018-01-01 00:00:00`
             */
            GmtCreate: string;
            /**
             * 比较的黑白名单类型：**BLACK**（黑名单），**WHITE**（白名单）。
             * @example `BLACK`
             */
            BlackWhiteType: string;
            /**
             * 过滤条件名
             * @example `AnotherFilter`
             */
            Name: string;
            /**
             * ID
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
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
}
