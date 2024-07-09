export interface DescribeExpandLogicTableInfoListResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `0B6B7BDC-575D-4A77-A4F8-24B7EF******`
     */
    RequestId: string;
    Data: {
        /**
         * 结果。
         */
        data: {
            /**
             * 表拆分键。
             * @example `address`
             */
            ShardTbKey: string;
            /**
             * 数据表名。
             * @example `employee_split2`
             */
            TableName: string;
            /**
             * 库拆分键。
             * @example `id`
             */
            ShardDbKey: string;
        }[];
    };
}
