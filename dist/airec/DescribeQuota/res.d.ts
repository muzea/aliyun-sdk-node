export interface DescribeQuotaResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 已经使用的物品数
         * @example `100`
         */
        itemCountUsed: number;
        /**
         * 物品表文档数，取值范围：1~1000
         * @example `100`
         */
        itemCount: number;
        /**
         * 用户表文档数，取值范围如下：
         * 1~1000
         * @example `100`
         */
        userCount: number;
        /**
         * 已使用的用户数
         * @example `100`
         */
        userCountUsed: number;
        /**
         * 查询的QPS值，取值范围如下：
         * 最小值 10、最大值 500
         * @example `10`
         */
        qps: number;
        /**
         * 弹性QPS数量
         * @example `10`
         */
        currentQps: number;
    };
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求ID
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `success`
     */
    message: string;
}
