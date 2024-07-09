export interface DeleteDataSourceLogResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 删除的日志的数量，等于1表示成功，小于等于0表示失败。
         * @example `1`
         */
        Count: number;
        /**
         * 日志ID，由威胁分析根据具体参数计算md5生成。
         * @example `ef33097c9d1fdb0b9c7e8c7ca320pkl1`
         */
        LogInstanceId: string;
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
