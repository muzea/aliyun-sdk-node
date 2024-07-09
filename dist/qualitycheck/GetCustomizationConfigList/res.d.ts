export interface GetCustomizationConfigListResponse {
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
    Data: {
        /**
         * 详细返回数据。
         */
        ModelCustomizationDataSetPo: {
            /**
             * 弃用字段，请忽略。
             * @example `1`
             */
            TaskType: number;
            /**
             * 创建时间。
             * @example `2019-01-08`
             */
            CreateTime: string;
            /**
             * 模型状态，可能值：1训练中；5正常；3训练失败。
             * @example `5`
             */
            ModelStatus: number;
            /**
             * 模型名称。
             * @example `自定义模型`
             */
            ModelName: string;
            /**
             * 弃用字段，请忽略。
             * @example `1`
             */
            ModelId: number;
            /**
             * 语言模型ID。
             * @example `cdae396590bb479a9ec40f3476e274fc`
             */
            ModeCustomizationId: string;
        }[];
    };
}
