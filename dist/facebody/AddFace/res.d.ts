export interface AddFaceResponse {
    /**
     * 请求ID。
     * @example `2B93C43A-F824-40C8-AF79-844342B0F43A`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输出人脸ID。
         * @example `5`
         */
        FaceId: string;
        /**
         * 输入图像中的人脸质量分。
         * @example `99.79581`
         */
        QualitieScore: number;
    };
}
