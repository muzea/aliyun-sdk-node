export interface ListAppGroupsResponse {
    /**
     * 总条数
     * @example `1`
     */
    totalCount: number;
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    /**
     * 应用信息
     * 参考：[AppGroup](~~170000~~)
     * @example `[]`
     */
    result: {
        /**
         * 创建时间戳
         * @example `1575442875`
         */
        created: number;
        /**
         * 当前在线版本
         * @example `110116134`
         */
        currentVersion: string;
        /**
         * 部署中的精排部署ID
         * @example `0`
         */
        pendingSecondRankAlgoDeploymentId: number;
        /**
         * 锁定状态
         * - Unlock 正常
         * - LockByExpiration 实例过期自动锁定
         * - ManualLock 手动触发锁定
         * @example `Unlock`
         */
        lockMode: string;
        /**
         * 更新时间戳
         * @example `1578916076`
         */
        updated: number;
        /**
         * 应用ID
         * @example `110116134`
         */
        id: string;
        /**
         * 付费类型
         * - POSTPAY 后付费（按量付费）
         * - PREPAY 预付费（包年包月）
         * @example `POSTPAY`
         */
        chargeType: string;
        /**
         * 是否配额审批中
         * - 0：正常
         * - 1：配额审批中
         * @example `0`
         */
        hasPendingQuotaReviewTask: number;
        /**
         * 精排部署ID
         * @example `0`
         */
        secondRankAlgoDeploymentId: number;
        /**
         * 应用名称
         * @example `os_function_test_v1`
         */
        name: string;
        /**
         * 实例ID
         * @example `"xxx"`
         */
        instanceId: string;
        /**
         * 未结束订单号
         * @example `"xxx"`
         */
        processingOrderId: string;
        /**
         * 计费类型
         * - 1：计算资源
         * - 2：qps
         * @example `1`
         */
        chargingWay: number;
        /**
         * 应用类型
         * - standard 标准版
         * - advance 老高级版（新应用不支持此类型）
         * - enhanced 新高级版
         * @example `enhanced`
         */
        type: string;
        /**
         * 应用状态
         * - producing 生产中
         * - review_pending 生产审批中
         * - config_pending 待配置
         * - normal 正常
         * - frozen 已冻结
         * @example `normal`
         */
        status: string;
        /**
         * abtest project 名称
         * @example `"xxx"`
         */
        projectId: string;
        /**
         * 在线版本切换时间戳
         * @example `0`
         */
        switchedTime: number;
        /**
         * 商品CODE
         * @example `opensearch`
         */
        commodityCode: string;
        /**
         * 过期时间
         * @example `"xxx"`
         */
        expireOn: string;
        /**
         * domain
         * @example `""`
         */
        domain: string;
        /**
         * 应用描述
         * @example `"xxx"`
         */
        description: string;
        /**
         * 粗排部署ID
         * @example `0`
         */
        firstRankAlgoDeploymentId: number;
        /**
         * 是否生产完成
         * - 0：生产中
         * - 1：生产完成
         * @example `1`
         */
        produced: number;
        /**
         * 实例过期自动锁定
         * @example `0`
         */
        lockedByExpiration: number;
        /**
         * 应用配额信息
         * 参考：[Quota](~~170001~~)
         * @example `{}`
         */
        quota: {
            /**
             * 规格
             * - opensearch.share.junior 入门型
             * - opensearch.share.common 共享通用型
             * - opensearch.share.compute 共享计算型
             * - opensearch.share.storage 共享存储型
             * - opensearch.private.common 独享通用型
             * - opensearch.private.compute 独享计算型
             * - opensearch.private.storage 独享存储型
             * @example `opensearch.share.common`
             */
            spec: string;
            /**
             * 存储容量（单位：GB）
             * @example `1`
             */
            docSize: number;
            /**
             * 计算资源（单位：LCU）
             * @example `20`
             */
            computeResource: number;
        };
        /**
         * 应用标签
         */
        tags: {
            /**
             * 标签键
             * @example `foo`
             */
            key: string;
            /**
             * 标签值
             * @example `bar`
             */
            value: string;
        }[];
    }[];
}
