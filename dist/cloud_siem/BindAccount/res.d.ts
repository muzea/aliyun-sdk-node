export interface BindAccountResponse {
    /**
     * 威胁分析服务返回的具体内容。
     */
    Data: {
        /**
         * 添加账号绑定的数量。
         * @example `1`
         */
        Count: number;
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
