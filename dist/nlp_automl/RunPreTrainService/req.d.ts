export interface RunPreTrainServiceRequest {
    /**
     * 服务名称。
     * @example `ReviewAnalysis`
     */
    "ServiceName": string;
    /**
     * 服务版本。
     * @example `V1`
     */
    "ServiceVersion"?: string;
    /**
     * 预测输入。
     * @example `{"input":{"content": "这件衣服真好看", "domain": "clothing"}}`
     */
    "PredictContent": string;
}
