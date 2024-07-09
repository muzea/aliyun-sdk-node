export interface CreateGreyTagRouteRequest {
    /**
     * 应用ID。
     * @example `7802c49a-67bc-4167-8369-9a9c003c****`
     */
    "AppId": string;
    /**
     * 规则名称。支持以小写字母开头，以数字或小写字母结尾，仅可包含小写字母、中文字符、数字及短划线（-）。不超过64个字符。
     * @example `dubbo-echo`
     */
    "Name": string;
    /**
     * 规则描述。不超过64个字符。
     * @example `灰度发布-地域灰度`
     */
    "Description"?: string;
    /**
     * 为Spring Cloud应用创建的灰度规则。当您的应用为Spring Cloud框架时必填，且无需填写**DubboRules**参数。
     * @example `[{"condition":"OR","items":[{"cond":"==","name":"grey","operator":"rawvalue","type":"param","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"cookie","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"header","value":"true"}],"path":"/post-echo/hi"}]`
     */
    "ScRules"?: string;
    /**
     * 为Dubbo应用创建的灰度规则。当您的应用为Dubbo框架时必填，且无需填写**ScRules**参数。
     * @example `[{"condition":"OR","group":"DUBBO","items":[{"cond":"==","expr":".key1","index":0,"operator":"rawvalue","value":"value1"},{"cond":"==","expr":".key2","index":0,"operator":"rawvalue","value":"value2"}],"methodName":"echo","serviceName":"com.alibaba.edas.boot.EchoService","version":"1.0.0"}]`
     */
    "DubboRules"?: string;
    /**
     * 为配置好ALB网关路由的应用创建的灰度规则。
     * @example `[{"condition":"AND","items":[{"cond":"==","name":"grey","operator":"rawvalue","type":"sourceIp","value":"127.0.0.1"},{"cond":"==","name":"grey","operator":"rawvalue","type":"cookie","value":"true"},{"cond":"==","name":"grey","operator":"rawvalue","type":"header","value":"true"}],"path":"/post-echo/hi"}]`
     */
    "AlbRules"?: string;
}
