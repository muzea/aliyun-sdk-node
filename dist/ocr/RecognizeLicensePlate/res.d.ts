export interface RecognizeLicensePlateResponse {
    /**
     * 请求ID。
     * @example `3F10DAC3-CF4A-487C-BF33-3B8EB9AA12F2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 车牌面板详细信息。
         */
        Plates: {
            /**
             * 车牌类型的置信度，取值范围0~1。
             * @example `1`
             */
            PlateTypeConfidence: number;
            /**
             * 车牌类型。包括：小型汽车、新能源车、大型汽车、挂车、教练车、警车、军车、使领馆车、港澳车。
             * @example `小型汽车`
             */
            PlateType: string;
            /**
             * 车牌号码的置信度，取值范围0~1。
             * @example `0.99745339155197144`
             */
            Confidence: number;
            /**
             * 车牌号码。
             * @example `粤BP57E7`
             */
            PlateNumber: string;
            /**
             * 车牌位置。
             */
            Roi: {
                /**
                 * 车牌号宽度。
                 * @example `141`
                 */
                W: number;
                /**
                 * 车牌号高度。
                 * @example `53`
                 */
                H: number;
                /**
                 * 车牌号左上角y坐标。
                 * @example `256`
                 */
                Y: number;
                /**
                 * 车牌号左上角x坐标。
                 * @example `294`
                 */
                X: number;
            };
            /**
             * 车牌识别框位置信息。识别矩形框四个角的坐标顺时针排列，分别为左上XY坐标、右上XY坐标、右下XY坐标、左下XY坐标。
             */
            Positions: {
                /**
                 * 矩形框X坐标。
                 * @example `466`
                 */
                X: number;
                /**
                 * 矩形框Y坐标。
                 * @example `293`
                 */
                Y: number;
            }[];
        }[];
    };
}
