export interface HandPostureResponse {
    /**
     * 请求ID。
     * @example `99CE0601-FA61-4A41-BBF0-72D3E1FF5139`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 手势检测结果。
         */
        Outputs: {
            /**
             * 手掌的个数。
             * @example `1`
             */
            HandCount: number;
            /**
             * 手势类别。
             */
            Results: {
                /**
                 * 手势关键点信息。
                 */
                Hands: {
                    /**
                     * 关键点坐标，是相对坐标，即相对于图像尺寸的坐标。
                     */
                    KeyPoints: {
                        /**
                         * 相对于图像尺寸的关键点坐标。
                         */
                        Positions: {
                            Points: number[];
                        }[];
                        /**
                         * 关键点的标签。
                         * @example `thumb`
                         */
                        Label: string;
                    }[];
                    /**
                     * 置信度。
                     * @example `0.555`
                     */
                    Confident: number;
                };
                /**
                 * 手势的检测框信息。
                 */
                Box: {
                    /**
                     * 手的检测框信息。格式为` [左上, 右上, 右下, 左下]` 。
                     */
                    Positions: {
                        Points: number[];
                    }[];
                    /**
                     * 手势检测框的置信度。
                     * @example `0.555`
                     */
                    Confident: number;
                };
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
             * @example `600`
             */
            Height: number;
        };
    };
}
