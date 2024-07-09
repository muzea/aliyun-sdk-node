export interface ListPrecisionTaskResponse {
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
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `22`
     */
    Count: number;
    Data: {
        /**
         * 任务列表数据。
         */
        PrecisionTask: {
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
             * @example `32`
             */
            IncorrectWords: number;
            /**
             * 任务创建时间。
             * @example `2020-03-10 20:26:29`
             */
            CreateTime: string;
            /**
             * 如果是来自数据集，则表示数据集ID。
             * @example `1212`
             */
            DataSetId: number;
            /**
             * 已校验过的文件总数。
             * @example `3`
             */
            VerifiedCount: number;
            /**
             * 文件来源，可能值：3数据集；0呼叫中心。
             * @example `3`
             */
            Source: number;
            /**
             * 该任务下文件总数。
             * @example `21`
             */
            TotalCount: number;
            /**
             * 如果是来自数据集，则表示数据集名称。
             * @example `数据集名称`
             */
            DataSetName: string;
            /**
             * 录音总时长，单位：**秒**。
             * @example `331311`
             */
            Duration: number;
            /**
             * 任务名称。
             * @example `任务名称`
             */
            Name: string;
            /**
             * 任务ID。
             * @example `7C1DEF5F-2C18-4D36-99C6-8C276F781796`
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
                     * 模型对比任务创建时间。
                     * @example `2020-03-10 20:26:29`
                     */
                    CreateTime: string;
                    /**
                     * 模型名称。
                     * @example `自定义模型`
                     */
                    ModelName: string;
                    /**
                     * 任务ID。
                     * @example `7C1DEF5F-2C18-4D36-99C6-8C276F781796`
                     */
                    TaskId: string;
                    /**
                     * 模型ID。
                     * @example `2321`
                     */
                    ModelId: number;
                    /**
                     * 准确率，比如0.98。
                     * @example `0.98`
                     */
                    Precision: number;
                }[];
            };
        }[];
    };
}
