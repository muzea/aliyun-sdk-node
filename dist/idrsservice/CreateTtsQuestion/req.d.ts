export interface CreateTtsQuestionRequest {
    /**
     * 请求参数
     */
    "Request": {
        /**
         * TTS问题组ID
         * @example `47584ba4-9781-496b-8e6f-c8525a213***
        `
         */
        QuestionGroupId: string;
        /**
         * 问题
         * @example `您可以根据自己需求填写`
         */
        Question: string;
        /**
         * 回复
         * @example `您可以根据自己需求填写`
         */
        Answer: string;
    };
}
