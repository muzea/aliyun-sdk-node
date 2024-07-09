export interface ListPluginsResponse {
    /**
     * 请求ID。
     * @example `5A5D8E74-565C-43DC-B031-29289FA9****`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 返回的总记录数。
         * @example `2`
         */
        X-Total-Count: number;
    };
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 插件描述。
         * @example `IK analysis plug-in for Elasticsearch.`
         */
        description: string;
        /**
         * 插件说明文档的地址。
         * @example `https://xxxx.html`
         */
        specificationUrl: string;
        /**
         * 插件状态。
         * @example `INSTALLED`
         */
        state: string;
        /**
         * 插件来源类型。
         * @example `SYSTEM`
         */
        source: string;
        /**
         * 插件名称。
         * @example `analysis-ik`
         */
        name: string;
    }[];
}
