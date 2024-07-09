export interface UpdateSwimLaneGroupRequest {
    /**
     * 服务网格ID。
     * @example `xxx`
     */
    "ServiceMeshId": string;
    /**
     * 泳道组关联的服务列表。
     * @example `["sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc"]`
     */
    "ServicesList"?: string;
    /**
     * 泳道组名称。
     * @example `test`
     */
    "GroupName"?: string;
    /**
     * 宽松模式泳道组的基线泳道名称。仅在泳道组为宽松模式时，设置此参数有效。
     * @example `s1`
     */
    "FallbackTarget"?: string;
    /**
     * 为泳道组内的多个泳道进行请求引流的策略，有两种可能取值：
     * * weighted：基于权重的引流策略，即首先以统一的规则对请求进行匹配，对匹配到的请求进行引流，引流时，按照给定的比例将所有请求发往不同的泳道。
     * * rule-based：基于规则的引流策略，即泳道组中的每条泳道都拥有自己的匹配规则，只有匹配到泳道对应的引流规则的请求才会被转发到对应的泳道。
     * @example `weighted`
     */
    "IngressRoutingStrategy"?: string;
    /**
     * 当泳道组的引流策略为weighted时可以设定。作用于整个泳道组的引流规则，
     * @example `{"Domains":["*"],"MatchRequests":[{"URI":{"MatchingMode":"exact","MatchingContent":"/mock"},"Headers":[{"Name":"test","MatchingMode":"exact","MatchingContent":"yes"}]}]}`
     */
    "WeightedIngressRule"?: string;
}
