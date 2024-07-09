export interface GetScenePackUrlResponse {
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
         * 打包文件地址
         * @example `www.example.com/preview/24714a7****​/****.zip`
         */
        Url: string;
        /**
         * 失效日期
         * @example `2022-05-17 11:00:17`
         */
        Expire: string;
        /**
         * 是否有效
         * @example `true`
         */
        Valid: boolean;
    };
}
