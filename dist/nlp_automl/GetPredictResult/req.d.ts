export interface GetPredictResultRequest {
    /**
     * 模型id。
     * @example `1818`
     */
    "ModelId": number;
    /**
     * 预测文本。
     * @example `中华人民共和国人民解放军`
     */
    "Content": string;
    /**
     * 模型版本。
     * @example `V1`
     */
    "ModelVersion"?: string;
    /**
     * **文本实体抽取**模型预测是否返回详细结果，取值true或者false。
     * @example `true`
     */
    "DetailTag"?: string;
    /**
     * **关键短语抽取**模型，设置返回top结果数量。
     * @example `3`
     */
    "TopK"?: number;
}
