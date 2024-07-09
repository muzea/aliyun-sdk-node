export interface ListInterventionDictionaryEntriesResponse {
    /**
     * 总条数
     * @example `8`
     */
    totalCount: number;
    /**
     * 请求ID
     * @example `516A02B7-2167-8D92-12D0-B639A2A0F3C5`
     */
    requestId: string;
    /**
     * 干预词条详情
     * 参考：[InterventionDictionaryEntry](~~173606~~)
     */
    result: {
        /**
         * 操作命令
         * - add 新增
         * - delete 删除
         * @example `add`
         */
        cmd: string;
        /**
         * 创建时间戳
         * @example `1536690285`
         */
        created: number;
        /**
         * 词条
         * @example `\u8fc7\u513f`
         */
        word: string;
        /**
         * 干预内容
         * 键为类目预测ID，值为相关度（0：不相关；1：略相关；2：相关）
         * 例：{“2”:1,”100”:0}
         * @example ` {                 "100": "0",                 "200": "2"             }`
         */
        relevance: any;
        /**
         * 状态
         * - ACTIVE 已生效
         * @example `ACTIVE`
         */
        status: string;
        /**
         * 更新时间戳
         * @example `1537348987`
         */
        updated: number;
        /**
         * 词权重内容
         */
        tokens: {
            /**
             * 识别结果的英文名
             * - brand 品牌
             * - category 品类
             * - material 材质
             * - element 款式元素
             * - style 风格
             * - color 颜色
             * - function 功能功效
             * - scenario 场景
             * - people 人群
             * - season 时间季节
             * - model 型号
             * - region 地点地域
             * - name 人名
             * - adjective 修饰
             * - category-modifier 品类修饰词
             * - size 尺寸规格
             * - quality 品质成色
             * - suit 套装
             * - new-release 新品
             * - series 系列
             * - marketing 营销服务
             * - entertainment 文娱书文曲
             * - organization 机构实体
             * - movie 影视名称
             * - game 游戏名称
             * - number 数字
             * - unit 单位
             * - common 普通词
             * - new-word 新词
             * - proper-noun 专有名词
             * - symbol 符号
             * - prefix 前缀
             * - suffix 后缀
             * - gift 赠送
             * - negative 否定
             * - agent 代理
             * @example `category`
             */
            tag: string;
            /**
             * 实体词
             * @example `本`
             */
            token: string;
            /**
             * 序号
             * @example `1`
             */
            order: number;
            /**
             * 识别结果的中文名，同上
             * @example `品类`
             */
            tagLabel: string;
        }[];
    }[];
}
