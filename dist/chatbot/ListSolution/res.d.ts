export interface ListSolutionResponse {
    /**
     * 答案列表
     */
    Solutions: {
        /**
         * 答案ID
         * @example `496`
         */
        SolutionId: number;
        /**
         * 修改时间（UTC 时间）
         * @example `2022-03-29T06:23:53Z`
         */
        ModifyTime: string;
        /**
         * 创建时间（UTC 时间）
         * @example `2022-03-29T03:55:04Z`
         */
        CreateTime: string;
        /**
         * 答案内容
         * @example `答案内容`
         */
        Content: string;
        /**
         * 答案类型：0-纯文本，1-富文本
         * @example `1`
         */
        ContentType: number;
        /**
         * 答案纯文本内容
         * @example `答案内容`
         */
        PlainText: string;
        /**
         * 视角code列表
         */
        PerspectiveCodes: string[];
    }[];
    /**
     * 请求ID
     * @example `5B29DB5E-251D-5A73-84B5-A12DF795F231`
     */
    RequestId: string;
}
