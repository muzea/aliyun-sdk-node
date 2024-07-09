export interface ListAliasesResponse {
    /**
     * 别名列表。
     */
    aliases: {
        /**
         * 别名指向的灰度版本以及灰度权重。
         * - 灰度版本只在调用函数时生效。
         * - 由版本号和对应的权重组成，例如，2:0.05表明调用函数时，版本2为灰度版本，切5%的流量到灰度版本，95%的流量默认到主版本。
         */
        additionalVersionWeight: any;
        /**
         * 别名名称。
         * @example `test`
         */
        aliasName: string;
        /**
         * 创建时间。
         * @example `2016-08-15T16:06:05.000+0000`
         */
        createdTime: string;
        /**
         * 别名描述。
         * @example `这是一个示例别名`
         */
        description: string;
        /**
         * 上次更新时间。
         * @example `2016-08-15T16:06:05.000+0000`
         */
        lastModifiedTime: string;
        /**
         * 版本ID。
         * @example `1`
         */
        versionId: string;
        /**
         * 灰度方式。取值如下：
         * - **Random**：随机灰度，为默认值。
         * - **Content**：规则灰度。
         * @example `Random`
         */
        resolvePolicy: string;
        /**
         * 灰度规则。满足灰度规则条件的流量，会被路由至灰度实例。
         */
        routePolicy: any;
    }[];
    /**
     * 下次查询Token。
     * @example `8bj81uI8n****`
     */
    nextToken: string;
}
