export interface QuerySoundCodeListResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.soundcodeservice.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `sound code service has not been signed`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `66FF51D3-***-49F1-B1A2-***`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 每页返回的语料条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询返回的语料总条数。
         * @example `100`
         */
        Total: number;
        /**
         * 当前页号。
         * @example `1`
         */
        PageId: number;
        List: {
            /**
             * 声码列表。
             */
            Items: {
                /**
                 * 排程开放类型。
                 * - 内部（默认）：取值为**INNER**，只允许排程所在实例下的设备请求声码解码。
                 * - 公开：取值为**OPEN**，可以发送邮件的方式配置白名单，允许跨实例的设备请求声码解码，跨实例解码的用量计算在声码所在的实例下。
                 * @example `OPEN`
                 */
                OpenType: string;
                /**
                 * 声码创建时间。
                 * @example `1620634297000`
                 */
                GmtCreate: number;
                /**
                 * 声码持续时长。
                 * @example `2`
                 */
                Duration: number;
                /**
                 * 声码营销内容。
                 * @example `www.taobao.com`
                 */
                SoundCodeContent: string;
                /**
                 * 声码名。
                 * @example `test1`
                 */
                Name: string;
                /**
                 * 声码的唯一标识。
                 * @example `Md3ZiTL888K9llXDy7890***********`
                 */
                SoundCode: string;
            }[];
        };
    };
}
