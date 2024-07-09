export interface UpdateGreyTagRouteRequest {
    /**
     * 规则描述。
     * @example `灰度发布-地域灰度`
     */
    "Description"?: string;
    /**
     * Spring Cloud应用的灰度规则。
     * @example `[{"condition":"OR","items":[{"cond":"==","name":"grey","operator":"rawvalue","type":"param","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"cookie","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"header","value":"true"}],"path":"/post-echo/hi"}]`
     */
    "ScRules"?: string;
    /**
     * Dubbo应用的灰度规则。
     * @example `[{"condition":"OR","group":"DUBBO","items":[{"cond":"==","expr":".key1","index":0,"operator":"rawvalue","value":"value1"},{"cond":"==","expr":".key2","index":0,"operator":"rawvalue","value":"value2"}],"methodName":"echo","serviceName":"com.alibaba.edas.boot.EchoService","version":"1.0.0"}]`
     */
    "DubboRules"?: string;
    /**
     * 灰度规则ID。
     * @example `1`
     */
    "GreyTagRouteId": number;
    /**
     * Alb网关路由的灰度规则。
     * @example `[{"condition":"AND","items":[{"cond":"==","name":"grey","operator":"rawvalue","type":"sourceIp","value":"127.0.0.1"},{"cond":"==","name":"grey","operator":"rawvalue","type":"cookie","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"header","value":"true"}],"path":"/post-echo/hi"}]`
     */
    "AlbRules"?: string;
}
