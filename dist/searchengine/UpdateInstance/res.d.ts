export interface UpdateInstanceResponse {
    /**
     * 返回结果。
     */
    result: {
        /**
         * 实例描述
         * @example `测试实例`
         */
        description: string;
        /**
         * 资源组ID
         * @example `ha-cn-pl32rf0****`
         */
        resourceGroupId: string;
        /**
         * 到期时间
         * @example `2019-01-06T16:00:00.0`
         */
        expiredTime: string;
        /**
         * 商品code
         * @example `opensearch_ha3post_public_cn`
         */
        commodityCode: string;
        /**
         * 状态
         * @example `READY`
         */
        status: string;
        /**
         * 资源一级ID
         * @example `ha-cn-pl32rf0****`
         */
        instanceId: string;
        /**
         * 创建时间
         * @example `2018-12-06T11:17:49.0`
         */
        createTime: string;
        /**
         * 锁定状态
         * @example `Unlock`
         */
        lockMode: string;
        /**
         * 付费类型
         * @example `POSTPAY`
         */
        chargeType: string;
        /**
         * 更新时间
         * @example `2018-12-06T11:17:49.0`
         */
        updateTime: string;
        /**
         * 是否欠费
         * @example `false`
         */
        inDebt: boolean;
    };
    /**
     * 请求ID
     * @example `90D6B8F5-FE97-4509-9AAB-367836C51818`
     */
    requestId: string;
}
