export interface GetSourcePackStatusResponse {
    /**
     * 请求ID
     * @example `A8CD0AD9-8A92-455A-A984-A7E4B76****`
     */
    RequestId: string;
    /**
     * 200：成功，其他：失败
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `xxxxx`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 状态：处理中 : processing 失败 :failed 完成 :succeed
         * @example `succeed`
         */
        Status: string;
        /**
         * 进度百分比
         * @example `100`
         */
        Progress: number;
    };
    /**
     * 压缩包的地址
     * @example `www.example.com/preview/24714a7****​/****.zip`
     */
    Url: string;
}
