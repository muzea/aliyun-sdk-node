export interface ReplaceAppGroupCommodityCodeResponse {
    /**
     * 请求id
     * @example `AC5F78BA-66B9-545B-9CF1-8F542E682E1F`
     */
    requestId: string;
    /**
     * 返回详情结果
     * @example `{}`
     */
    result: {
        /**
         * 创建时间戳
         * @example `1588054131`
         */
        created: number;
        /**
         * 当前在线版本
         * @example `100302903`
         */
        currentVersion: string;
        /**
         * 部署中的精排部署ID
         * @example `0`
         */
        pendingSecondRankAlgoDeploymentId: number;
        /**
         * 类型
         * @example `-`
         */
        type: string;
        /**
         * 计费类型
         *  - 1: 计算资源
         *  - 2：qps
         * @example `1`
         */
        chargingWay: number;
        /**
         * 锁定状态
         * - Unlock 正常
         * - LockByExpiration 实例过期自动锁定
         * - ManualLock 手动触发锁定
         * @example `Unlock`
         */
        lockMode: string;
        /**
         * 状态
         * @example `normal`
         */
        status: string;
        /**
         * 更新时间戳
         * @example `1581065904`
         */
        updated: number;
        /**
         * 付费类型
         * - POSTPAY 后付费（按量付费）
         * - PREPAY 预付费（包年包月）
         * @example `POSTPAY`
         */
        chargeType: string;
        /**
         * 应用ID
         * @example `-`
         */
        id: string;
        /**
         * 是否配额审批中
         * - 0：正常
         * - 1：配额审批中
         * @example `0`
         */
        hasPendingQuotaReviewTask: number;
        /**
         * abtest project 名称
         * @example `-`
         */
        projectId: string;
        /**
         * 精排部署ID
         * @example `0`
         */
        secondRankAlgoDeploymentId: number;
        /**
         * 商品CODE
         * @example `opensearch`
         */
        commodityCode: string;
        /**
         * 在线版本切换时间戳
         * @example `1590486386`
         */
        switchedTime: number;
        /**
         * 过期时间
         * @example `-`
         */
        expireOn: string;
        /**
         * 描述
         * @example `""`
         */
        description: string;
        /**
         * 粗排部署id
         * @example `0`
         */
        firstRankAlgoDeploymentId: number;
        /**
         * 实例是否过期自动锁定
         * - 0：否
         * - 1：是
         * @example `0`
         */
        lockedByExpiration: number;
        /**
         * 是否生产
         * @example `0`
         */
        produced: number;
        /**
         * 名称
         * @example `-`
         */
        name: string;
        /**
         * 处理中的
         * @example `-`
         */
        processingOrderId: string;
        /**
         * 请求的实例id
         * @example `-`
         */
        instanceId: string;
        /**
         * 版本信息
         */
        versions: string[];
        /**
         * 配置信息
         */
        quota: {
            /**
             * 配置型号
             * @example `-`
             */
            spec: string;
            /**
             * 适用于定制应用
             * @example `1`
             */
            docSize: number;
            /**
             * 配置数量
             * @example `20`
             */
            computeResource: number;
        };
    };
}
