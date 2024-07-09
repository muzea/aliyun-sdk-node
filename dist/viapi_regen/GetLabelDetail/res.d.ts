export interface GetLabelDetailResponse {
    /**
     * 请求ID。
     * @example `AC07015E-C8D6-1A03-AAA8-C023B09B917A`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回前台JSON串。
         * - dataVolume：标注的照片总数量。
         * - labelCount：标签分类详情。
         * - detectionFrameQuantity：检测框总数量。
         * - detectionFrameLabelCount：检测框分布数量。
         * @example `{\"dataVolume\":101,\"detectionFrameLabelCount\":{\"honglvdeng\":116},\"detectionFrameQuantity\":116}"`
         */
        LabelInfo: string;
    };
}
