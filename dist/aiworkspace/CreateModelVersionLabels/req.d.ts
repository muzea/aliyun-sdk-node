export interface CreateModelVersionLabelsRequest {
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 标签列表。
         */
        Labels: any[];
    };
    /**
     * 模型ID。如何获取模型ID，请参见[ListModels](~~461944~~)。
     * @example `model-rbvg5wzljz****ks92`
     */
    "ModelId": string;
    /**
     * 模型版本。
     * @example `0.1.1`
     */
    "VersionName": string;
}
