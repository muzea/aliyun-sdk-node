export interface DescribeTableResponse {
    /**
     * 当前API是否请求成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求唯一ID，如果遇到问题请提供这个请求ID，由工作人员为您排查。
     * @example `B5644ABB-559A-4A1C-83F2-9E7209******`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 返回数据集合。
         */
        List: {
            /**
             * 主键。
             * @example `PRI`
             */
            Index: string;
            /**
             * 是否允许为空。
             * @example `NO`
             */
            IsAllowNull: string;
            /**
             * 列名。
             * @example `Id`
             */
            ColumnName: string;
            /**
             * 是否为主键。
             * @example `YES`
             */
            IsPk: string;
            /**
             * 列类型。
             * @example `bigint(20)`
             */
            ColumnType: string;
            /**
             * Extra
             * @example `auto_increment`
             */
            Extra: string;
        }[];
    };
}
