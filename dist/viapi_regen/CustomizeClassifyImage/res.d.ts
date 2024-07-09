export interface CustomizeClassifyImageResponse {
    /**
     * 请求ID。
     * @example `D6319603-9DD1-45ae-950E-FCA36EB6DFA7`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 根据数据集自学习训练得出的分类结果。
         * @example `black`
         */
        Category: string;
        /**
         * 置信度。
         * @example `0.8801174759864807`
         */
        Score: number;
    };
}
