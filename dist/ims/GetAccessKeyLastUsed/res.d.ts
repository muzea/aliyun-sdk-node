export interface GetAccessKeyLastUsedResponse {
    /**
     * 访问密钥的最后使用信息。
     */
    AccessKeyLastUsed: {
        /**
         * 最后使用时间。
         * @example `2020-10-16T01:37:37Z`
         */
        LastUsedDate: string;
        /**
         * 最后使用的云服务。
         * @example `Ram`
         */
        ServiceName: string;
    };
    /**
     * 请求ID。
     * @example `B29C79F6-354B-4297-A994-1338CC22A2EC`
     */
    RequestId: string;
}
