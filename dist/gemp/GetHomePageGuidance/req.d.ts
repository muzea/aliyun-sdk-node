export interface GetHomePageGuidanceRequest {
    /**
     * 首页引导查询参数
     */
    "body"?: {
        /**
         * 幂等号
         * @example `xxxxxx`
         */
        clientToken: string;
    };
}
