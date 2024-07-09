export interface DeleteModelVersionLabelsRequest {
    /**
     * 模型ID。如何获取模型ID，请参见[ListModels](~~461944~~)。
     * @example `model-d8dfd****sjfd`
     */
    "ModelId": string;
    /**
     * 模型版本。
     * @example `0.1.1`
     */
    "VersionName": string;
    /**
     * 需要删除的标签键。多项之间使用半角逗号（,）分隔。
     * @example `key1,key2`
     */
    "LabelKeys"?: string;
}
