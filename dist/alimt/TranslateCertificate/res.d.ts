export interface TranslateCertificateResponse {
    /**
     * 请求Id
     * @example `6640DE48-201C-4110-AE87-FB8FA34412B9`
     */
    RequestId: string;
    /**
     * 翻译结果
     */
    Data: {
        /**
         * 译文结果列表
         */
        TranslatedValues: {
            /**
             * key对应的译文
             * @example `name`
             */
            KeyTranslation: string;
            /**
             * 证件内容标题，如身份证中的姓名，性别
             * @example `姓名`
             */
            Key: string;
            /**
             * 原文
             * @example `庄严`
             */
            Value: string;
            /**
             * 译文
             * @example `Solemn`
             */
            ValueTranslation: string;
        }[];
    };
}
