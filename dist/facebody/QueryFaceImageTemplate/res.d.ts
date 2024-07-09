export interface QueryFaceImageTemplateResponse {
    /**
     * 请求ID。
     * @example `7C29675C-751F-4D2F-86FB-2BD8D69AC860`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 当前账号下的可用模板总数量。
         * @example `20`
         */
        Total: number;
        /**
         * 模板列表。
         */
        Elements: {
            /**
             * 模板创建时间。
             * @example `2021-01-29 10:19:05`
             */
            CreateTime: string;
            /**
             * 模板更新时间。
             * @example `2021-01-29 10:19:05`
             */
            UpdateTime: string;
            /**
             * 用户ID。
             * @example `zhangsan`
             */
            UserId: string;
            /**
             * 模板ID。
             * @example `6cd509ea-54fa-4730-8e9d-c94cadcda048`
             */
            TemplateId: string;
            /**
             * 新增模板时设置的人脸模板图像地址。
             * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/MergeImageFace/MergeImageFace-1.png`
             */
            TemplateURL: string;
            /**
             * 用户输入图为多个人脸时，返回各人脸ID和位置信息。
             */
            FaceInfos: {
                /**
                 * 人脸对应的子模板ID。
                 * @example `6cd509ea-54fa-4730-8e9d-c94cadcda048`
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
        }[];
    };
}
