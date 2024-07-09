export interface CreateWmExtractTaskResponse {
    /**
     * 本次请求的ID。
     * @example `D6707286-A50E-57B1-B2CF-EFAC59E850D8`
     */
    RequestId: string;
    /**
     * 水印提取任务信息。
     */
    Data: {
        /**
         * 任务ID，用于查询任务结果。
         * @example `wmt-9648c22d2eb2cb57bb855dcae7898464********`
         */
        TaskId: string;
    };
}
