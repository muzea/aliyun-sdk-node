export interface AddFaceImageTemplateResponse {
    /**
     * 请求ID。
     * @example `798A721D-7C7F-4D87-A125-1D04B3055C2C`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 模板ID。
         * @example `6cd509ea-54fa-4730-8e9d-c94cadcda048`
         */
        TemplateId: string;
        /**
         * 用户输入图为多个人脸时，返回各人脸ID和位置信息。
         * > 只有在多人脸场景中，才会返回**FaceInfos**参数。
         */
        FaceInfos: {
            /**
             * 人脸对应的子模板ID。
             * @example `string 6cd509ea-54fa-4730-8e9d-c94cadcda048_0`
             */
            TemplateFaceID: string;
            /**
             * 人脸对应的位置信息。
             */
            FaceRect: {
                /**
                 * 人脸框左上角横坐标。
                 * @example `254`
                 */
                X: string;
                /**
                 * 人脸框左上角纵坐标。
                 * @example `318`
                 */
                Y: string;
                /**
                 * 人脸框高度。
                 * @example `94`
                 */
                Height: string;
                /**
                 * 人脸框宽度。
                 * @example `89`
                 */
                Width: string;
            };
        }[];
    };
}
