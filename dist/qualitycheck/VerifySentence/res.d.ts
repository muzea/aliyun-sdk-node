export interface VerifySentenceResponse {
    /**
     * 请求ID。
     * @example `106C6CA0-282D-4AF7-85F0-D2D24F4CE647`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本句错误字数。
     * @example `2`
     */
    IncorrectWords: number;
    /**
     * 转写角色，可能值：0客服；1客户。
     * @example `1`
     */
    TargetRole: number;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 人工校验后的正确角色，可能值：0客服；1客户。
     * @example `0`
     */
    SourceRole: number;
    Data: {
        /**
         * 若转写不正确，返回不同之处；否则为空。
         */
        Delta: {
            /**
             * 错误的不同类型，可能值：CHANGE错误，INSERT多字，DELETE少字。
             * @example `CHANGE`
             */
            Type: string;
            /**
             *  人工校验后正确的对话内容。
             */
            Source: {
                /**
                 *  字所处的位置。
                 * @example `1`
                 */
                Position: number;
                Line: {
                    /**
                     * 具体的字。
                     */
                    Line: string[];
                };
            };
            /**
             * 转写对话内容。
             */
            Target: {
                /**
                 *  字所处的位置。
                 * @example `1`
                 */
                Position: number;
                Line: {
                    /**
                     * 具体的字。
                     */
                    Line: string[];
                };
            };
        }[];
    };
}
