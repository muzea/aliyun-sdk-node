export interface ListInstancesResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 实例描述
         * @example `应急测试`
         */
        description: string;
        /**
         * 资源组ID
         * @example `ha-cn-pl32rf0****`
         */
        resourceGroupId: string;
        /**
         * 到期时间
         * @example `1634885083`
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
         * @example `2022-06-04T02:03:21Z`
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
        /**
         * 网络搜索引擎实例信息
         */
        network: {
            /**
             * 虚拟交换机id
             * @example `vsw-bp11ldcf59q2n****`
             */
            vSwitchId: string;
            /**
             * vpc网络id
             * @example `vpc-wz9axk41d9vff****`
             */
            vpcId: string;
            /**
             * 网关接入点。
             * @example `ha-cn-35t3r****.ha.aliyuncs.com`
             */
            endpoint: string;
        };
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
    }[];
    /**
     * 总记录数。
     * @example `5`
     */
    totalCount: number;
    /**
     * 当前请求的RequestID
     * @example `89B968E6-1E41-58DF-BB25-5F98ECC759CE`
     */
    requestId: string;
}
