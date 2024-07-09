export interface CreateModelLabelsRequest {
    /**
     * 模型ID。如何获取模型ID，请参见[ListModels](~~461944~~)。
     * @example `model-1dkasjfhds23dft`
     */
    "ModelId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 标签列表。
         */
        Labels: any[];
    };
}
