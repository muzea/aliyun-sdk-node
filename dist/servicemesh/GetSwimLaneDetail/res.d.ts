export interface GetSwimLaneDetailResponse {
    /**
     * 请求ID。
     * @example `yyyy`
     */
    RequestId: string;
    /**
     * 泳道关联的所有服务列表。
     * @example `["sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb","sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc"]`
     */
    ServicesList: string;
    /**
     * 固定为**ASM_TRAFFIC_TAG**。
     * @example `ASM_TRAFFIC_TAG`
     */
    LabelSelectorKey: string;
    /**
     * ASM_TRAFFIC_TAG Label的取值。
     * @example `v1`
     */
    LabelSelectorValue: string;
    /**
     * 该字段已废弃。
     * @example `mocka.default.svc.cluster.local`
     */
    IngressService: string;
    /**
     * 引流规则，对应在ASM网关下自定义的一条或者多条路由。
     * @example `[{"Domains":["*"],"RouteName":"r1","MatchRequest":{"Headers":[{"Name":"x-asm-prefer-tag","MatchingMode":"exact","MatchingContent":"s1"}],"URI":{"MatchingMode":"exact","MatchingContent":"/mock"}},"RouteDestinations":[{"Destination":{"Host":"mocka.default.svc.cluster.local","Subset":"s1"}}]},{"Domains":["*"],"RouteName":"hello","MatchRequest":{"Headers":[{"Name":"x-asm-prefer-tag","MatchingMode":"exact","MatchingContent":"s1"}],"URI":{"MatchingMode":"exact","MatchingContent":"/mocktest"}},"RouteDestinations":[{"Destination":{"Host":"mocka.default.svc.cluster.local","Subset":"s1"}}]}]`
     */
    IngressRule: string;
    /**
     * 当泳道对应的泳道组的引流策略为weighted时可以设定。此字段是一个JSON序列化的字符串，指定了在基于权重的路由策略下，每条泳道的入口服务域名以及对应的引流权重。
     * @example `{"RouteDestination":{"Host":"mocka.default.svc.cluster.local","Subset":"s1"},"Weight":40}`
     */
    WeightedIngressDestination: string;
}
