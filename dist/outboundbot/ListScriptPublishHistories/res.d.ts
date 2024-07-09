export interface ListScriptPublishHistoriesResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 历史列表
     */
    ScriptPublishHistories: {
        /**
         * 页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 个数
         * @example `10`
         */
        PageSize: number;
        /**
         * 总计个数
         * @example `100`
         */
        TotalCount: number;
        /**
         * 数据数组
         */
        List: {
            /**
             * 发布时间
             * @example `1578965079000`
             */
            PublishTime: number;
            /**
             * 实例id
             * @example `af81a389-91f0-4157-8d82-720edd02b66a`
             */
            InstanceId: string;
            /**
             * 话术id
             * @example `29420f65-8f1f-4009-b2f8-f4f7b5d59090`
             */
            ScriptId: string;
            /**
             * 发布描述
             * @example `第一次发布`
             */
            Description: string;
            /**
             * 话术版本
             * @example `1578965079000`
             */
            ScriptVersion: string;
        }[];
    };
}
