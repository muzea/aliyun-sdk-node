export interface GetInstanceResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 实例描述
         * @example `测试实例`
         */
        description: string;
        /**
         * 资源组ID
         * @example `rg-aekzjvw24****`
         */
        resourceGroupId: string;
        /**
         * 到期时间
         * @example `024-05-21 16:49:31.0`
         */
        expiredTime: string;
        /**
         * 商品code
         * @example `opensearch_ha3post_public_cn`
         */
        commodityCode: string;
        /**
         * 资源一级ID
         * @example `ha-cn-pl32rf0****`
         */
        instanceId: string;
        /**
         * 创建时间
         * @example `2022-06-17T02:01:26Z`
         */
        createTime: string;
        /**
         * 锁定状态
         * @example `Unlock`
         */
        lockMode: string;
        /**
         * 付费类型
         * @example `POSYPAY`
         */
        chargeType: string;
        /**
         * 更新时间
         * @example `024-05-21 16:49:31.0`
         */
        updateTime: string;
        /**
         * 是否欠费
         * @example `false`
         */
        inDebt: boolean;
        /**
         * 实例状态阶段
         * - INIT：初始化
         * - WAIT_CONFIG：待配置
         * - CONFIG_UPDATING：配置生效中
         * - READY：正常
         * @example `INIT`
         */
        status: string;
        /**
         * 标签。
         */
        tags: {
            /**
             * 标签键
             * @example `opensearch`
             */
            key: string;
            /**
             * 标签值
             * @example `opensearch`
             */
            value: string;
        }[];
    };
    /**
     * 当前请求的requestID
     * @example `E7B7D598-B080-5C8E-AA35-D43EC0D5F886`
     */
    requestId: string;
}
