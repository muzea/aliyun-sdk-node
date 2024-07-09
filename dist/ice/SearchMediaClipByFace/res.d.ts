export interface SearchMediaClipByFaceResponse {
    /**
     * 请求ID。
     * @example `E44FFACD-9E90-555A-A09A-6FD3B7335E39`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 符合要求的媒资片段集合。
     */
    MediaClipList: {
        /**
         * 匹配片段得分，Float类型，范围为[0，1]。
         * @example `0.99041677`
         */
        Score: number;
        /**
         * 实体ID，对应标签分析结果里的实体ID。
         * @example `1031025****`
         */
        EntityId: string;
        /**
         * 实体名称。
         * @example `张三`
         */
        LabelName: string;
        /**
         * 人物片段聚类信息
         */
        OccurrencesInfos: {
            /**
             * 匹配片段的起始时间，单位为秒，Float类型。
             * @example `61.066353`
             */
            StartTime: number;
            /**
             * 匹配片段的结束时间，单位为秒，Float类型。
             * @example `69.06635`
             */
            EndTime: number;
            /**
             * 人脸在片段中的具体信息。
             */
            TrackData: {
                /**
                 * 人脸在媒资中出现的时间戳，单位为秒，Float类型。
                 * @example `62.03302`
                 */
                Timestamp: number;
                /**
                 * 人脸坐标信息。
                 */
                BoxPosition: {
                    /**
                     * 左上顶点x轴坐标，单位为像素。
                     * @example `517`
                     */
                    X: number;
                    /**
                     * 左上顶点y轴坐标，单位为像素。
                     * @example `409`
                     */
                    Y: number;
                    /**
                     * 矩形框宽度，单位为像素。
                     * @example `128`
                     */
                    W: number;
                    /**
                     * 矩形框高度，单位为像素。
                     * @example `168`
                     */
                    H: number;
                };
            }[];
        }[];
        /**
         * 人物类型。
         * 取值：
         * celebrity——名人
         * sensitive——敏感人物
         * politician——政治人物
         * custom——自定义人物
         * unknown——未知人物
         * @example `celebrity`
         */
        Category: string;
    }[];
    /**
     * 符合条件的媒资片段总数。
     * @example `5`
     */
    Total: number;
}
