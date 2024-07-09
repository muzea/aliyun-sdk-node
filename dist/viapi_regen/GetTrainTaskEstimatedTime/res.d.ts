export interface GetTrainTaskEstimatedTimeResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `AD721805-2A34-090D-9C24-E4F5110A980D`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 训练耗时。
         * @example `2:23:34`
         */
        EstimatedTime: string;
    };
}
