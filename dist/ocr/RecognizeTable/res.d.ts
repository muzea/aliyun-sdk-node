export interface RecognizeTableResponse {
    /**
     * 请求ID。
     * @example `CBC36BE6-2A18-5256-82BD-8B5477E5D058`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 请求参数`html`和`xlsx`已废弃，默认输出JSON格式的数据。
         * @example `UEsDBBQAAAAIAAAAIQBukMk4WAIAA****`
         */
        FileContent: string;
        /**
         * JSON格式的数据。仅在请求参数OutputFormat为`json`时显示。
         */
        Tables: {
            Head: string[];
            Tail: string[];
            /**
             * JSON格式的表格数据。
             */
            TableRows: {
                /**
                 * JSON格式的表格数据。
                 */
                TableColumns: {
                    /**
                     * 单元格所占的行数（rowspan）为ey-sy。
                     * @example `1`
                     */
                    EndRow: number;
                    /**
                     * 单元格所占的列数（colspan）为ex-sx。
                     * @example `4`
                     */
                    EndColumn: number;
                    /**
                     * 图片上单元格的宽度。
                     * @example `0`
                     */
                    Width: number;
                    /**
                     * 图片上单元格的高度。
                     * @example `0`
                     */
                    Height: number;
                    Texts: string[];
                    /**
                     * 单元格的起始行ID。
                     * @example `0`
                     */
                    StartRow: number;
                    /**
                     * 单元格的起始列ID。
                     * @example `1`
                     */
                    StartColumn: number;
                }[];
            }[];
        }[];
    };
}
