export interface ListKibanaPluginsResponse {
    /**
     * 请求ID。
     * @example `11234B4A-34CE-473B-8E61-AD95702E****`
     */
    RequestId: string;
    /**
     * 请求头。
     */
    Headers: {
        /**
         * 返回的数据条数。
         * @example `3`
         */
        X-Total-Count: number;
    };
    /**
     * 当前请求返回的插件信息。
     */
    Result: {
        /**
         * 插件描述。
         * @example `Customize DSL statements to query data.`
         */
        description: string;
        /**
         * 插件简介地址，支持null。
         * @example `https://xxxx`
         */
        specificationUrl: string;
        /**
         * 插件安装状态。
         * @example `INSTALLED`
         */
        state: string;
        /**
         * 插件来源。
         * @example `SYSTEM`
         */
        source: string;
        /**
         * 插件名称。
         * @example `bsearch_querybuilder	`
         */
        name: string;
    }[];
}
