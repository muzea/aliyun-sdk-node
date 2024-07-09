export interface DescribeDistributeTableListResponse {
    /**
     * 返回信息，成功返回success，错误返回对应错误码。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 表列表。
         */
        Tables: {
            /**
             * 表名。
             * @example `sbtest1`
             */
            TableName: string;
            /**
             * 表类型。
             * @example `multi`
             */
            TableType: string;
            /**
             * 表key。
             * @example `“”`
             */
            TbKey: string;
            /**
             * 数据key。
             * @example `id`
             */
            DbKey: string;
        }[];
    };
}
