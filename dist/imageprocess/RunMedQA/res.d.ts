export interface RunMedQAResponse {
    /**
     * 请求ID。
     * @example `BFF7EEC3-F6B5-4387-AC1D-BB095A1A02E4`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 会话ID。
         * @example `d1f6a6c2444f4c01adfadd413938e5c7`
         */
        SessionId: string;
        /**
         * 问题类型。
         * @example `age`
         */
        QuestionType: string;
        /**
         * 补充追问问题。当**QuestionType**为`images`时，无返回值。
         * @example `你好，还需要你补充些其他信息，年龄多大了？`
         */
        Question: string;
        /**
         * 选项类型。默认为text。
         * - text：文本
         * - single：单选
         * - multiple：多选
         * @example `text`
         */
        AnswerType: string;
        /**
         * 单选和多选问题的选项。当**AnswerType**为`single`或`multiple`时有返回值，为`text`时无返回值。
         */
        Options: string[];
        /**
         * 预问诊信息结构化报表。当**QuestionType**为`images`时（即问诊流程最后一步），才有返回值。
         */
        Reports: any;
    };
}
