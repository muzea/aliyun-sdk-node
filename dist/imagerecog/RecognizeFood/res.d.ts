export interface RecognizeFoodResponse {
    /**
     * 请求ID。
     * @example `4C2369C5-54E0-4B9F-8ACB-80C4F50AD2DB`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 识别出TOP5可能性高的类别，按照置信度从大到小排列。
         * > 可能不足5个，最多显示5个。
         */
        TopFives: {
            /**
             * 类别。
             * @example `清蒸鲈鱼`
             */
            Category: string;
            /**
             * 识别菜品类别的置信度，取值范围为0~1。
             * @example `0.2083740234375`
             */
            Score: number;
            /**
             * 每百克卡路里数值。例如被识别为三菌汤的数值为208，则表示每100克三菌汤卡路里为208大卡。
             * > 由于有些菜品很少见，没有比较统一的卡路里数值，故标注`UNKNOWN`，表示未知。
             * @example `208`
             */
            Calorie: string;
        }[];
    };
}
