export interface GetUserLangResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `23AD0BD2-8771-5647-819E-6BA51E21****`
     */
    RequestId: string;
    /**
     * 语言设置数据。
     */
    SasUserLang: {
        /**
         * 日志分析设置的语言。取值：
         * - zh：中文
         * - en：英文
         * @example `zh`
         */
        Lang: string;
    };
}
