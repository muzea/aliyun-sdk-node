export interface CreateTransitRouteTableAggregationRequest {
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-iq8qgruq1ry8jc7vt****`
     */
    "TransitRouteTableId": string;
    /**
     * 聚合路由的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TransitRouteTableAggregationName"?: string;
    /**
     * 聚合路由的目标网段。
     * > 不支持添加以下网段：
     * - 以“0”或者“100.64”开头的网段
     * - 组播地址（224.0.0.1~239.255.255.254）
     * @example `192.168.10.0/24`
     */
    "TransitRouteTableAggregationCidr": string;
    /**
     * 聚合路由的传播范围。
     * 仅取值：**VPC**，表示向已与当前企业版转发路由器路由表创建关联转发关系并已开启路由同步功能的所有VPC实例传播聚合路由。
     * @example `VPC`
     */
    "TransitRouteTableAggregationScope": string;
    /**
     * 聚合路由的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "TransitRouteTableAggregationDescription"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否对此次创建请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认）：发送正常请求，通过检查后直接创建聚合路由。
     * - **true**：发送检查请求，只进行校验，不会创建聚合路由。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * @example `false`
     */
    "DryRun"?: boolean;
}
