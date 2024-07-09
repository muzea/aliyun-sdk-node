export interface ModifyDataSourceLogResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 修改日志的数量，等于1表示成功，小于等于0表示失败。
         * @example `1`
         */
        Count: number;
        /**
         * 日志的ID，由威胁分析根据具体参数计算md5生成。
         * @example `220ba97c9d1fdb0b9c7e8c7ca328d7ea`
         */
        LogInstanceId: string;
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
