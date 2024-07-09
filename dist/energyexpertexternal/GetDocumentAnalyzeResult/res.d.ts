export interface GetDocumentAnalyzeResultResponse {
    /**
     * 请求ID
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 文档解析结果
         */
        kvListInfo: {
            /**
             * 字段Key名称
             * @example `租户`
             */
            keyName: string;
            /**
             * 字段key值
             * @example `阿里云xxx有限公司`
             */
            keyValue: string;
            /**
             * 召回内容
             */
            context: {
                /**
                 * key的召回信息
                 */
                key: any[];
                /**
                 * value的召回信息
                 */
                value: any[];
                /**
                 * 置信度
                 */
                confidence: {
                    /**
                     * key的置信度
                     * @example `0.9994202852249146`
                     */
                    keyConfidence: number;
                    /**
                     * value的置信度
                     * @example `0.9794202852249146`
                     */
                    valueConfidence: number;
                };
            };
        }[];
    };
}
