export interface GetWmExtractTaskResponse {
    /**
     * 本次请求的ID。
     * @example `102350E7-1A20-58F5-9D63-ABEA820AE6E1`
     */
    RequestId: string;
    /**
     * 任务结果。
     */
    Data: {
        /**
         * 任务创建时间
         * @example `2024-01-01 11:22:33`
         */
        CreateTime: string;
        /**
         * 任务ID。
         * @example `wmt-9648c22d2eb2cb57bb855dcae7898464********`
         */
        TaskId: string;
        /**
         * 任务状态。取值：
         * - **Running**：运行中。
         * - **Success**：成功。
         * - **Failed**：失败。
         * @example `Success`
         */
        Status: string;
        /**
         * 创建提取任务时传入的文件名。
         * @example `test-****.pdf`
         */
        Filename: string;
        /**
         * 创建提取任务时传入的水印类型。
         * @example `PureDocument`
         */
        WmType: string;
        /**
         * 创建提取任务时传入的参数。
         * @example `32`
         */
        WmInfoSize: number;
        /**
         * 提取得到的10进制数字格式的水印信息。
         * @example `123**`
         */
        WmInfoUint: number;
        /**
         * 提取得到的base64编码字符串格式的水印信息。
         * @example `aGVsbG8gc2Fz****`
         */
        WmInfoBytesB64: string;
    };
}
