export interface CreateAliasResponse {
    /**
     * 别名指向的灰度版本以及灰度权重。
     * - 灰度版本只在调用函数时生效。
     * - 由版本号和对应的权重组成，例如，2:0.05表明调用函数时，版本2为灰度版本，切5%的流量到灰度版本，95%的流量默认到主版本。
     */
    additionalVersionWeight: any;
    /**
     * 别名的名称。
     * @example `alias_test`
     */
    aliasName: string;
    /**
     * 别名的创建时间。
     * @example `2020-04-23T06:32:43Z`
     */
    createdTime: string;
    /**
     * 别名的描述。
     * @example `test_description`
     */
    description: string;
    /**
     * 别名上一次被更新的时间。
     * @example `2020-04-23T06:32:43Z`
     */
    lastModifiedTime: string;
    /**
     * 别名指向的版本ID。
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
     * 灰度规则：满足灰度规则条件的流量，打向灰度实例。
     */
    routePolicy: any;
}
