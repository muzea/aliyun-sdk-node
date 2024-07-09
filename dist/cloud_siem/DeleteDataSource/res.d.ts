export interface DeleteDataSourceResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 删除的数据源的数量，等于1表示成功，小于等于0表示失败。
         * @example `1`
         */
        Count: number;
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
