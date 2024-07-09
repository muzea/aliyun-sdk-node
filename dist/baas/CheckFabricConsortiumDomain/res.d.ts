export interface CheckFabricConsortiumDomainResponse {
    /**
     * 请求ID
     * @example `8F80A214-89FC-4348-9B3F-15446B3DC1FA`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 处理结果
     */
    Result: {
        /**
         * 域名
         * @example `bank`
         */
        Domain: string;
        /**
         * 是否合法
         * @example `true`
         */
        Valid: boolean;
        /**
         * 提示
         * @example `OK`
         */
        Prompt: string;
    };
}
