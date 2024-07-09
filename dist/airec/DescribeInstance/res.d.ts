export interface DescribeInstanceResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 实例所在的区域。
         * @example `cn-beijing`
         */
        regionId: string;
        /**
         * 实例类型。
         * 取值：
         * - **Algorithm_configuration**：算法配置版。
         * - **Industry_operation**：行业运营版。
         * - **Cold_start**：冷启动版。
         * @example `Standard`
         */
        type: string;
        /**
         * 实例锁定状态。
         * 取值：
         * - **Unlock**：未锁定。
         * - **ManualLock**：手动锁定。
         * - **LockByExpiration**：欠费锁定。
         * @example `Unlock`
         */
        lockMode: string;
        /**
         * 实例过期时间，单位为UTC时间。
         * @example `2019-01-06T16:00:00.000Z`
         */
        expiredTime: string;
        /**
         * 场景名称。
         * 取值：
         * - **gul**：猜你喜欢。
         * - **rr**：相关推荐。
         * - **hot**：热门推荐。
         * - **focus**：焦点图推荐。
         * @example `gul`
         */
        scene: string;
        /**
         * 实例运行状态。
         * 取值：
         * - **Initializing**：初始化中。
         * - **Ready**：待数据导入。
         * - **Running**：运行中。
         * @example `Running`
         */
        status: string;
        /**
         * 实例创建时间，单位为UTC时间。
         * @example `2018-12-06T06:14:01.000Z`
         */
        gmtCreate: string;
        /**
         * 实例付费类型。
         * 取值：
         * - **PREPAY**：预付费（包年包月）。
         * - **POSTPAY**：后付费（按量付费）。
         * @example `PrePaid`
         */
        chargeType: string;
        /**
         * 实例行业类型。
         * 取值：
         * - **content**：内容型。
         * - **item**：商品型。
         * - **news**：新闻型。
         * @example `news`
         */
        industry: string;
        /**
         * Airec商品代码。
         * @example `airecpre`
         */
        commodityCode: string;
        /**
         * 实例最后更新时间，单位为UTC时间。
         * @example `2018-12-06T11:17:49.000Z`
         */
        gmtModified: string;
        /**
         * 当前在线服务的数据集版本。
         * @example `20181206170353`
         */
        dataSetVersion: string;
        /**
         * 实例名称。
         * @example `实例1`
         */
        name: string;
        /**
         * 实例ID。
         * @example `airec-cn-****`
         */
        instanceId: string;
    };
    /**
     * 错误码。
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误信息。
     * @example `An internal server error occurred`
     */
    message: string;
}
