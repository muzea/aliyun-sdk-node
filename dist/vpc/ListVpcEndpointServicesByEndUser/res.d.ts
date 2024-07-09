export interface ListVpcEndpointServicesByEndUserResponse {
    /**
     * 请求ID。
     * @example `0AB1129F-32C1-5E4D-9E22-E4A859CA46EB`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 查询到可使用的终端节点服务列表信息。
     */
    Services: {
        /**
         * 终端节点服务的实例ID。
         * @example `vpces-m5enwdmilo210aibo9****`
         */
        ServiceId: string;
        /**
         * 终端节点服务的名称。
         * @example `com.aliyun.cn-hangzhou.oss`
         */
        ServiceName: string;
        /**
         * 默认访问策略。
         * @example `{   \"Version\" : \"1\",   \"Statement\" : [ {     \"Effect\" : \"Allow\",     \"Action\" : \"*\",     \"Principal\" : \"*\",     \"Resource\" : \"*\"   } ] }`
         */
        DefaultPolicyDocument: string;
        /**
         * 终端节点服务是否支持设置访问策略。取值：
         * - **false**：不支持设置访问策略。
         * - **true**：支持设置访问策略。
         * @example `true`
         */
        SupportPolicy: boolean;
        /**
         * 终端节点服务所属云产品在查询地域的域名。
         * @example `oss-admin.aliyuncs.com`
         */
        ServiceDomain: string;
    }[];
    /**
     * 列表条目数。
     * @example `2`
     */
    TotalCount: string;
}
