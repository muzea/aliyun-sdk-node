export interface DescribeAppResponse {
    /**
     * 请求ID
     * @example `33477D76-C380-1D84-A4AD-043F52876CB1`
     */
    requestId: string;
    /**
     * 版本信息
     * @example `{}`
     */
    result: {
        /**
         * 版本创建时间戳
         * @example `1590977140`
         */
        created: number;
        /**
         * 集群名称
         * @example `-`
         */
        clusterName: string;
        /**
         * 是否自动切换
         * @example `true`
         */
        autoSwitch: boolean;
        /**
         * 粗排部署 ID
         * @example `0`
         */
        algoDeploymentId: number;
        /**
         * 版本类型
         * - standard 标准版
         * - advance 老高级版（新应用不支持此类型）
         * - enhanced 新高级版
         * @example `enhanced`
         */
        type: string;
        /**
         * 版本描述
         * @example `-`
         */
        description: string;
        /**
         * 版本状态
         * - ok 正常
         * - stopped 暂停
         * - frozen 已冻结
         * - initializing 版本初始化中
         * - unavailable 版本已失效
         * - data_waiting 等待数据初始化
         * - data_preparing 数据初始化中
         * @example `ok`
         */
        status: string;
        /**
         * 应用结构
         * @example `{}`
         */
        schema: any;
        /**
         * 数据导入进度百分比（如83代表83%）
         * @example `100`
         */
        progressPercent: number;
        /**
         * 版本ID
         * @example `100303063`
         */
        id: string;
        /**
         * 默认展示字段
         * @example `[]`
         */
        fetchFields: string[];
        /**
         * 配额信息
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
             * 搜索请求（单位：次/秒）（老计费模型使用）
             * @example `5`
             */
            qps: number;
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
         * 行业类型
         * - GENERAL 通用
         * - ECOMMERCE 电商
         * - IT_CONTENT IT内容
         * @example `GENERAL`
         */
        domain: {
            /**
             * 类型-standard标准版-advance老高级版（新应用不支持此类型）-enhanced新高级版
             * @example `-`
             */
            category: string;
            /**
             * 英文名称
             * @example `test`
             */
            name: string;
            /**
             * 搜索结果
             * @example `{}`
             */
            functions: {
                /**
                 * 各个功能说明
                 * @example `[]`
                 */
                service: string[];
                /**
                 * 布局信息
                 * @example `[]`
                 */
                qp: string[];
                /**
                 * 算法结构
                 * @example `[]`
                 */
                algo: string[];
            };
        };
    };
}
