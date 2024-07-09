export interface ListAsrVocabResponse {
    /**
     * 结果代码，**200**表示成功。若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID
     * @example `66E1ACB8-17B2-4BE8-8581-954A8EE1324B`
     */
    RequestId: string;
    /**
     * 请求是否成功。调用方可根据此字段来判断请求是否成功：**true**表示成功**false/null**表示失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 热词列表
         */
        AsrVocab: {
            /**
             * 热词组ID
             * @example `a01daaaxxxxxxxxx`
             */
            VocabularyId: string;
            /**
             * 更新时间
             * @example `2019-04-15T14:57Z`
             */
            UpdateTime: string;
            /**
             * 热词组名称
             * @example `测试`
             */
            Name: string;
            /**
             * 创建时间
             * @example `2019-04-15T14:57Z`
             */
            CreateTime: string;
            /**
             * 热词组ID
             * @example `18`
             */
            Id: string;
        }[];
    };
}
