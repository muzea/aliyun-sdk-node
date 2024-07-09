export interface BatchKillProcessListResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回结果数组。
     */
    Data: {
        /**
         * 是否调用成功。
         * @example `true`
         */
        Success: boolean;
    }[];
}
