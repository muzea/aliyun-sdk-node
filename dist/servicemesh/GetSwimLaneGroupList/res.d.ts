export interface GetSwimLaneGroupListResponse {
    /**
     * 请求ID。
     * @example `yyyy`
     */
    RequestId: string;
    /**
     * 泳道组信息列表
     */
    SwimLaneGroupList: {
        /**
         * 泳道组名称。
         * @example `test`
         */
        GroupName: string;
        /**
         * 泳道组关联的服务列表。
         * @example `["sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc"]`
         */
        ServiceList: string;
        /**
         * 引流规则目前仅支持在ASM网关下进行配置。
         * @example `ASM`
         */
        IngressType: string;
        /**
         * ASM网关名称。
         * @example `ingressgateway`
         */
        IngressGatewayName: string;
        /**
         * 流量泳道组是否是宽松模式。
         * @example `false`
         */
        IsPermissive: boolean;
        /**
         * 宽松模式泳道组的基线泳道名称。仅在泳道组为宽松模式时，设置此参数有效。
         * @example `s1`
         */
        FallbackTarget: string;
        /**
         * 宽松模式泳道组的链路透传请求头。
         * @example `my-request-id`
         */
        TraceHeader: string;
        /**
         * 宽松模式流量泳道组的引流请求头。
         * @example `x-asm-prefer-tag`
         */
        RouteHeader: string;
        /**
         * 一个序列化后的JSON字符串，其中JSON对象的键为泳道组中所有服务都拥有的标签的键，JSON对象的值为该标签下泳道组内服务的所有可能的标签值数组。
         * @example `{"ASM_TRAFFIC_TAG":["v2","v3","v1"],"version":["v3","v1","v2"]}`
         */
        SwimLaneLabels: string;
        /**
         * 为泳道组内的多个泳道进行请求引流的策略，有两种可能取值：
         * * weighted：基于权重的引流策略，即首先以统一的规则对请求进行匹配，对匹配到的请求进行引流，引流时，按照给定的比例将所有请求发往不同的泳道。
         * * rule-based：基于规则的引流策略，即泳道组中的每条泳道都拥有自己的匹配规则，只有匹配到泳道对应的引流规则的请求才会被转发到对应的泳道。
         * @example `weighted`
         */
        IngressRoutingStrategy: string;
        /**
         * 当泳道组的引流策略为weighted时可以设定。作用于整个泳道组的引流规则，
         * @example `{"Domains":["*"],"MatchRequests":[{"URI":{"MatchingMode":"exact","MatchingContent":"/mock"},"Headers":[{"Name":"test","MatchingMode":"exact","MatchingContent":"yes"}]}]}`
         */
        WeightedIngressRule: string;
    }[];
}
