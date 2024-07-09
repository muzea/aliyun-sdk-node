export interface ListSentinelBlockFallbackDefinitionsResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4E9FDCFE-0738-493B-B801-82BDFBCB****`
     */
    RequestId: string;
    /**
     * 行为信息。
     */
    Data: {
        /**
         * 行为ID。
         * @example `12`
         */
        Id: string;
        /**
         * 应用所属的微服务命空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 应用名称。
         * @example `spring-cloud-a`
         */
        AppName: string;
        /**
         * 行为名称。
         * @example `defaultFallback`
         */
        Name: string;
        /**
         * 行为类型。
         * @example `1`
         */
        ResourceClassification: string;
        /**
         * 行为详情。
         * @example `{"webRespStatusCode":429,"webRespMessage":"test","webFallbackMode":0,"webRespContentType":0}`
         */
        FallbackBehavior: any;
        /**
         * 与该行为绑定的资源信息。
         * @example `{"/params/{hot}":[1]}`
         */
        TargetMap: any;
    }[];
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
}
