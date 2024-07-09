export interface ModifyHaVipAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e0****`
     */
    "ClientToken"?: string;
    /**
     * HaVip实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 要修改的HaVip实例ID。
     * @example `havip-2zeo05qre24nhrqp****`
     */
    "HaVipId": string;
    /**
     * HaVip实例的描述。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my HaVip.`
     */
    "Description"?: string;
    /**
     * HaVip实例的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Name"?: string;
}
