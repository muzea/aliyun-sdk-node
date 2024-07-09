export interface RecognizeTicketInvoiceResponse {
    /**
     * 请求ID。
     * @example `063C0178-7EA3-4754-96FB-C0C9AE6B9AAE`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 票据数量。
         * @example `1`
         */
        Count: number;
        /**
         * 票据旋转后的高度。
         * @example `594`
         */
        Height: number;
        /**
         * 票据旋转后的宽度。
         * @example `594`
         */
        Width: number;
        /**
         * 原图高度。
         * @example `1417`
         */
        OrgHeight: number;
        /**
         * 原图宽度。
         * @example `1417`
         */
        OrgWidth: number;
        /**
         * 识别结果。
         */
        Results: {
            /**
             * 票据在图像中的索引。
             * @example `1`
             */
            Index: number;
            /**
             * 识别内容。
             */
            Content: {
                /**
                 * 发票代码。
                 * @example `044031860107`
                 */
                InvoiceCode: string;
                /**
                 * 发票号码。
                 * @example `09267581`
                 */
                InvoiceNumber: string;
                /**
                 * 开票日期。
                 * @example `2018-09-20`
                 */
                InvoiceDate: string;
                /**
                 * 校验码。
                 * @example `81931914902643039780`
                 */
                AntiFakeCode: string;
                /**
                 * 销售方名称。
                 * @example `深圳市xxxx有限公司`
                 */
                PayeeName: string;
                /**
                 * 销售方税号。
                 * @example `914403002794492693`
                 */
                PayeeRegisterNo: string;
                /**
                 * 购买方名称。
                 * @example `深圳市xxxx有限公司`
                 */
                PayerName: string;
                /**
                 * 购买方税号。
                 * @example `91440300MA5EXWHW6F`
                 */
                PayerRegisterNo: string;
                /**
                 * 总价。
                 * @example `￥220.00`
                 */
                SumAmount: string;
            };
            /**
             * 票据类型。支持识别以下几种：
             * - 增值税发票
             * - 出租车票
             * - 定额发票
             * - 机动车销售发票
             * - 卷票
             * @example `卷票`
             */
            Type: string;
            /**
             * 位置信息。
             */
            KeyValueInfos: {
                /**
                 * 被识别字段名称。
                 * @example `发票代码`
                 */
                Key: string;
                /**
                 * 被识别字段的值。
                 * @example `044031860107`
                 */
                Value: string;
                /**
                 * 被识别字段位置信息。四个角的坐标顺时针排列。
                 */
                ValuePositions: {
                    /**
                     * 矩形框X坐标。
                     * @example `586`
                     */
                    X: number;
                    /**
                     * 矩形框Y坐标。
                     * @example `16`
                     */
                    Y: number;
                }[];
                /**
                 * 被识别字段**Value**值置信度，范围0~100。
                 * @example `100`
                 */
                ValueScore: number;
            }[];
            /**
             * 票据识别矩形框四个角的坐标顺时针排列。
             */
            SliceRectangle: {
                /**
                 * 矩形框X坐标。
                 * @example `586`
                 */
                X: number;
                /**
                 * 矩形框Y坐标。
                 * @example `16`
                 */
                Y: number;
            }[];
        }[];
    };
}
