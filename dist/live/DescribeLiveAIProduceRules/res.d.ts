export interface DescribeLiveAIProduceRulesResponse {
    /**
     * 请求ID。
     * @example `5c6a2a0df228-4a64- af62-20e91b96****`
     */
    RequestId: string;
    RuleInfoList: {
        /**
         * 字幕规则列表。
         */
        RuleInfo: {
            /**
             * 播流域名。
             * @example `demo.aliyundoc.com`
             */
            Domain: string;
            /**
             * 播流所属应用名称。
             * @example `App Name`
             */
            App: string;
            /**
             * 字幕模板名称。
             * @example `sub1`
             */
            SubtitleName: string;
            /**
             * 是否拉流触发。
             * @example `true`
             */
            IsLazy: boolean;
            /**
             * 字幕规则ID。
             * @example `72fba656-2cc2-40fd-923c-2a10c3b9****`
             */
            RulesId: string;
            /**
             * 字幕输出规格。
             * @example `lp_ld`
             */
            LiveTemplate: string;
            /**
             * 最近修改时间（时间戳）。
             * @example `1715594344000`
             */
            GmtModifyTime: string;
            /**
             * 字幕后缀。
             * @example `test0506`
             */
            SuffixName: string;
            /**
             * 规则描述。
             * @example `live AI subtitle template`
             */
            Description: string;
        }[];
    };
}
