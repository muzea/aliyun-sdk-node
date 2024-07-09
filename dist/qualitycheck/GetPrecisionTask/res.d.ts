export interface GetPrecisionTaskResponse {
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
     * 任务详情。
     */
    Data: {
        /**
         * 任务状态，可能值：0转写中；1转写完成。
         * @example `1`
         */
        Status: number;
        /**
         * 最后更新时间。
         * @example `2020-03-10 20:26:29`
         */
        UpdateTime: string;
        /**
         * 转写错误的字数。
         * @example `23`
         */
        IncorrectWords: number;
        /**
         * 如果是来自数据集，则表示数据集ID。
         * @example `1212`
         */
        DataSetId: number;
        /**
         * 已校验过的文件总数。
         * @example `2`
         */
        VerifiedCount: number;
        /**
         * 录音总时长。
         * @example `3423`
         */
        Duration: number;
        /**
         * 如果是来自数据集，则表示数据集名称。
         * @example `数据集名称`
         */
        DataSetName: string;
        /**
         * 该任务下文件总数。
         * @example `3`
         */
        TotalCount: number;
        /**
         * 文件来源，可能值：3数据集；0呼叫中心。
         * @example `3`
         */
        Source: number;
        /**
         * 任务名称。
         * @example `任务名称`
         */
        Name: string;
        /**
         * 任务ID。
         * @example `7C1DEF5F-2C18-4D36-99C6-8C27*****`
         */
        TaskId: string;
        Precisions: {
            /**
             * 各个语言模型执行任务的列表。
             */
            Precision: {
                /**
                 * 任务状态，可能值：0转写中；1转写完成。
                 * @example `1`
                 */
                Status: number;
                /**
                 * 模型名称。
                 * @example `模型名称`
                 */
                ModelName: string;
                /**
                 * 任务ID。
                 * @example `593A04C0-E6E9-4CDC-8C99-B120C******`
                 */
                TaskId: string;
                /**
                 * 准确率，比如0.98。
                 * @example `0.98`
                 */
                Precision: number;
                /**
                 * 模型id。
                 * @example `2311`
                 */
                ModelId: number;
            }[];
        };
    };
}
