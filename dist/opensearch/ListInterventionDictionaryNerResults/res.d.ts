export interface ListInterventionDictionaryNerResultsResponse {
    /**
     * 请求ID
     * @example `8F780CA8-D4D4-2FFE-B8AC-42040822C554`
     */
    requestId: string;
    /**
     * 实体识别内容
     * 参考：[ner 实体识别](~~173606~~)
     */
    result: {
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
         * @example `豆`
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
}
