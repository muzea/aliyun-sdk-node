export interface GetAnnotationMissionSummaryResponse {
    /**
     * 是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
     * @example `You are not authorized to perform this action. CDR:View privileges are required.`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 标注任务ID
         * @example `b3f2c931-5180-43ca-b4aa-2baee2d73c8b`
         */
        AnnotationMissionId: string;
        /**
         * 语义标注统计信息
         */
        IntentSummaryInfo: {
            /**
             * 对话次数
             * @example `1`
             */
            IntentUserSayCount: number;
            /**
             * 正确chat数
             * @example `1`
             */
            AnnotationCorrectCount: number;
            /**
             * 识别错误数
             * @example `1`
             */
            MatchErrorCount: number;
            /**
             * 无效数据
             * @example `1`
             */
            AnnotationInvalid: number;
            /**
             * 未标注
             * @example `1`
             */
            NoAnnotation: number;
            /**
             * chat总数
             * @example `1`
             */
            ChatTotalCount: number;
            /**
             * 转译未识别次数
             * @example `1`
             */
            TranslationUnrecognizedCount: number;
            /**
             * 未覆盖意图
             * @example `1`
             */
            IntentionNotCoveredCount: number;
        };
        /**
         * 语音标注统计信息
         */
        AsrSummaryInfo: {
            /**
             * 词错率，单位0.01%，一般用于英文
             * @example `1`
             */
            WordErrorRate: number;
            /**
             * 字错率，单位0.01%
             * @example `1`
             */
            CharacterErrorRate: number;
            /**
             * 句子错率，单位0.01%
             * @example `1`
             */
            SentenceErrorRate: number;
            /**
             * 无效数据
             * @example `1`
             */
            AnnotationInvalid: number;
            /**
             * 未标注
             * @example `1`
             */
            NoAnnotation: number;
            /**
             * chat总数
             * @example `1`
             */
            ChatTotalCount: number;
            /**
             * 添加热词次数
             * @example `1`
             */
            AddVocabularyDataCount: number;
            /**
             * 添加语言模型数据次数
             * @example `1`
             */
            AddCustomizationDataCount: number;
            /**
             * 字准率，单位0.01%
             * @example `1`
             */
            CharacterCorrectRate: number;
        };
        /**
         * 自定义标签及数量
         */
        TagSummaryInfo: {
            /**
             * 标签列表
             */
            TagSummaryInfoDetailList: {
                /**
                 * 标签名字
                 * @example `知晓率1_复制`
                 */
                Name: string;
                /**
                 * 标签数量
                 * @example `3`
                 */
                Count: number;
            }[];
        };
        /**
         * 是否调用成功。true：调用成功。                                 false：调用失败。
         * @example `true`
         */
        Success: boolean;
        /**
         * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
         * @example `You are not authorized to perform this action. CDR:View privileges are required.`
         */
        Message: string;
    };
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
}
