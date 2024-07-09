export interface RecognizeSceneResponse {
    /**
     * 请求ID。
     * @example `AC79F887-5CCB-42BE-8AC3-4D455EFEDB94`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 标签名称。最多输出5个标签名称，如果某个类别标签未输出，则对应的`confidence`为零。
         */
        Tags: {
            /**
             * 标签名称。
             * @example `船`
             */
            Value: string;
            /**
             * 标签名称的置信度。取值范围0~100。
             * @example `79`
             */
            Confidence: number;
        }[];
    };
}
