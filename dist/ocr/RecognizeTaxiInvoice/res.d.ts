export interface RecognizeTaxiInvoiceResponse {
    /**
     * 请求ID。
     * @example `B2BBBD26-1D3E-4CFA-A80B-6A9266B8D125`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 发票列表详细信息。
         */
        Invoices: {
            /**
             * 每张发票的文字列表。
             */
            Items: {
                /**
                 * 发票每个字段对应位置信息。
                 */
                ItemRoi: {
                    /**
                     * 位置框长宽。
                     */
                    Size: {
                        /**
                         * 位置框宽度。
                         * @example `887.9998779296875`
                         */
                        W: number;
                        /**
                         * 位置框高度。
                         * @example `81.999984741210938`
                         */
                        H: number;
                    };
                    /**
                     * 角度信息。坐标的原点在左上角，与X轴平行的方向角度为0。逆时针旋转角度为负，顺时针旋转角度为正。角度是水平轴（X轴）顺时针旋转，与碰到的第一个边的夹角度数。角度范围-180°~180°。
                     * @example `-90`
                     */
                    Angle: number;
                    /**
                     * 位置框中心点。
                     */
                    Center: {
                        /**
                         * 位置框中心点Y坐标。
                         * @example `1360`
                         */
                        Y: number;
                        /**
                         * 位置框中心点X坐标。
                         * @example `1593`
                         */
                        X: number;
                    };
                };
                /**
                 * 发票每个字段信息。
                 * @example `86655664`
                 */
                Text: string;
            }[];
            /**
             * 发票旋转角度。
             * - 0：不需要旋转。
             * - 1：顺时针旋转90。
             * - 2：顺时针旋转180。
             * - 3：顺时针旋转270。
             * @example `0`
             */
            RotateType: number;
            /**
             * 发票位置。
             */
            InvoiceRoi: {
                /**
                 * 发票宽度。
                 * @example `1773`
                 */
                W: number;
                /**
                 * 发票高度。
                 * @example `3625`
                 */
                H: number;
                /**
                 * 发票左上角Y坐标。
                 * @example `302`
                 */
                Y: number;
                /**
                 * 发票左上角X坐标。
                 * @example `513`
                 */
                X: number;
            };
        }[];
    };
}
