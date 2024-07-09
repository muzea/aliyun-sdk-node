export interface PageQuerySpeechBroadcastHourResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
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
        /**
         * 下一页标识。可在下次请求时传入，来获取下一页数据。
         * 如果**PageToken**值为空，表示没有下一页数据。
         * @example `TGlzdFJlc291cm****`
         */
        PageToken: string;
        ResultData: {
            /**
             * 返回的共享播报数据。
             */
            Data: {
                /**
                 * 播报结果信息。
                 * @example `播报成功。`
                 */
                Msg: string;
                /**
                 * 播报开始时间戳，单位为毫秒。
                 * @example `1663210172207`
                 */
                StartTime: number;
                /**
                 * 设备所属产品的**ProductKey**。
                 * @example `sd34****`
                 */
                ProductKey: string;
                /**
                 * 设备名称。
                 * @example `device1`
                 */
                DeviceName: string;
                /**
                 * 共享码。
                 * @example `ebed9280_ba25_48df_80c2_****`
                 */
                ShareTaskCode: string;
                /**
                 * 播报ID。
                 * @example `42000011392021112380****`
                 */
                SpeechId: string;
                /**
                 * 播报结果码。返回值：
                 * - **0**：语料播报成功。
                 * - **1**：语料已播报，重复播报。
                 * - **2**：语料不存在。
                 * @example `0`
                 */
                Code: number;
                /**
                 * 播报语料。JSON数组格式。
                 * @example `["ANC","CDF"]`
                 */
                Speechs: string;
            }[];
        };
    };
}
