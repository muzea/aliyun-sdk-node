export interface SendDocumentAskQuestionResponse {
    /**
     * 请求ID
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E
    `
     */
    requestId: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 问答结果
         * @example `2023年碳排468.1万吨`
         */
        answer: string;
        /**
         * 对应query返回的回答关联的文档
         */
        document: string[];
    };
}
