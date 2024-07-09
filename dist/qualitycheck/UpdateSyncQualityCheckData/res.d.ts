export interface UpdateSyncQualityCheckDataResponse {
    /**
     * 结果代码，200表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID，请求唯一标识。
     * @example `76DB5D8C-5BD9-42A7-B527-5AF3A5F8***	`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 完整返回内容。
     */
    Data: {
        /**
         * 任务ID。
         * @example `123123D8C-5BD9-42A7-B527-1235F8**`
         */
        TaskId: string;
        /**
         * 通话唯一标识。
         * @example `20210101-1212121***`
         */
        Tid: string;
    };
}
