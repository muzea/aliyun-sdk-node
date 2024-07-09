export interface PageQuerySharedSpeechOpenResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `String	iot.system.SystemException	`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功，返回的结果。
     */
    Data: {
        /**
         * 每页显示数据条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 当前页码。
         * @example `1`
         */
        PageId: number;
        /**
         * 数据记录总数量。
         * @example `100`
         */
        Total: number;
        ResultData: {
            /**
             * 返回的共享语料信息。
             */
            Data: {
                /**
                 * 语料状态。返回值：
                 * - **1**：等待审核。
                 * - **2**：审核通过。
                 * - **3**：审核拒绝。
                 * @example `1`
                 */
                Status: number;
                /**
                 * 语料播报声音。
                 * @example `Siyue`
                 */
                Voice: string;
                /**
                 * 语料标识。项目下唯一。
                 * @example `identifying`
                 */
                BizCode: string;
                /**
                 * 模版唯一标识。
                 * @example `ws****`
                 */
                Code: string;
                /**
                 * 语料内容。
                 * @example `test`
                 */
                Text: string;
                /**
                 * 播报速度，取值范围：-500~500。
                 * @example `50`
                 */
                SpeechRate: number;
                /**
                 * 音量大小，取值范围：0~100。
                 * @example `50`
                 */
                Volume: number;
                /**
                 * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
                 * @example `wav`
                 */
                AudioFormat: string;
            }[];
        };
    };
}
