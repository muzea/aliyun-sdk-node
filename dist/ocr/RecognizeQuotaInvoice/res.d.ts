export interface RecognizeQuotaInvoiceResponse {
    /**
     * 请求ID。
     * @example `BC4C12D0-7FD3-419A-B997-A91212DF6D82`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 票据被旋转的角度。范围为0~360，0表示向上，90表示向右，180表示向下，270度表示向左。
         * @example `1`
         */
        Angle: number;
        /**
         * 票据旋转后的高度。
         * @example `624`
         */
        Height: number;
        /**
         * 票据旋转后的宽度。
         * @example `865`
         */
        Width: number;
        /**
         * 原图高度。
         * @example `610`
         */
        OrgHeight: number;
        /**
         * 原图宽度。
         * @example `855`
         */
        OrgWidth: number;
        /**
         * 识别内容。
         */
        Content: {
            /**
             * 大写金额。
             * @example `壹拾元整`
             */
            SumAmount: string;
            /**
             * 发票代码。
             * @example `144031800103`
             */
            InvoiceCode: string;
            /**
             * 发票号码。
             * @example `40637706`
             */
            InvoiceNo: string;
            /**
             * 小写金额。
             * @example `10`
             */
            InvoiceAmount: string;
            /**
             * 发票代码解析。
             * @example `税务局代码：国税，行政区划代码：深圳市，年份：2018，发票行业代码：None，发票类别代码：None，金额版：万元版，批次号：03`
             */
            InvoiceDetails: string;
        };
        /**
         * 位置信息。
         */
        KeyValueInfos: {
            /**
             * 被识别字段名称。
             * @example `大写金额`
             */
            Key: string;
            /**
             * 被识别字段的值。
             * @example `壹拾元整`
             */
            Value: string;
            /**
             * 被识别字段位置信息。四个角的坐标顺时针排列。
             */
            ValuePositions: {
                /**
                 * 矩形框X坐标。
                 * @example `544`
                 */
                X: number;
                /**
                 * 矩形框Y坐标。
                 * @example `387`
                 */
                Y: number;
            }[];
            /**
             * 被识别字段**Value**值置信度，范围0~100。
             * @example `100`
             */
            ValueScore: number;
        }[];
    };
}
