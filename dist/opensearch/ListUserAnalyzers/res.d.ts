export interface ListUserAnalyzersResponse {
    /**
     * 总数
     * @example `1`
     */
    totalCount: number;
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    /**
     * 自定义分析器
     * 参考：[UserAnalyzer](~~178934~~)
     */
    result: {
        /**
         * 创建时间戳
         * @example `1588054131`
         */
        created: number;
        /**
         * 是否可用
         * @example `false`
         */
        available: boolean;
        /**
         * 名称
         * @example `kevin_test2`
         */
        name: string;
        /**
         * 更新时间戳
         * @example `1588054131`
         */
        updated: number;
        /**
         * 自定义分析器ID
         * @example `1234`
         */
        id: string;
        /**
         * 基础分词器
         * - chn_standard [中文-通用分析](~~179424~~)
         * - chn_scene_name 中文－人名分析
         * - chn_ecommerce [中文-电商分析](~~179424~~)
         * - chn_it_content[ IT-内容分析](~~179424~~)
         * - en_min 英文－小粒度分析
         * - th_standard 泰语－通用分析
         * - th_ecommerce 泰语－电商分析
         * - vn_standard 越南语－通用分析
         * - chn_community_it 行业－内容IT分析
         * - chn_ecommerce_general 行业－电商通用分析
         * - chn_esports_general 行业－游戏通用分析
         * - chn_edu_question 行业－教育搜题
         * @example `chn_standard`
         */
        business: string;
        /**
         * 自定义分词词典
         * 参考：[UserDict](~~178933~~)
         */
        dicts: {
            /**
             * 创建时间戳
             * @example `1588054131`
             */
            created: number;
            /**
             * 词条数量
             * @example `-1`
             */
            entriesCount: number;
            /**
             * 类型
             * - segment 拆分
             * @example `segment`
             */
            type: string;
            /**
             * 词条数量限制
             * @example `4`
             */
            entriesLimit: number;
            /**
             * 是否可用
             * @example `false`
             */
            available: boolean;
            /**
             * 更新时间戳
             * @example `1588054131`
             */
            updated: number;
            /**
             * 词典ID
             * @example `123`
             */
            id: string;
        }[];
    }[];
}
