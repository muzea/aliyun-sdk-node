export interface BodyPostureResponse {
    /**
     * 请求ID。
     * @example `B854094B-9231-4A54-89AB-C377CB0D237D`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 检测结果。
         */
        Outputs: {
            /**
             * 人体的个数。
             * @example `1`
             */
            HumanCount: number;
            /**
             * 检测结果。
             */
            Results: {
                /**
                 * 检测到的人体关键点信息。
                 */
                Bodies: {
                    /**
                     * 关键点坐标，为相对坐标，即相对于图像尺寸的坐标。
                     */
                    Positions: {
                        Points: number[];
                    }[];
                    /**
                     * 关键点置信度。
                     * @example `0.91309475898742676`
                     */
                    Confident: number;
                    /**
                     * 关键点的标签。包括如下类型：`nose、neck、right_shoulder、right_elbow、right_wrist、left_shoulder、left_elbow、left_wrist、right_hip、right_knee、right_ankle、left_hip、left_knee、left_ankle、right_eye、left_eye、right_ear、left_ear`。
                     * @example `nose`
                     */
                    Label: string;
                }[];
            }[];
        }[];
        /**
         * 图像基本信息。
         */
        MetaObject: {
            /**
             * 图像宽度，单位像素。
             * @example `500`
             */
            Width: number;
            /**
             * 图像高度，单位像素。
             * @example `500`
             */
            Height: number;
        };
    };
}
