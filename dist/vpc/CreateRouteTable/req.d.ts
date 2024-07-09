export interface CreateRouteTableRequest {
    /**
     * 路由表所属的VPC的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-zhangjiakou`
     */
    "RegionId": string;
    /**
     * 自定义路由表所属的VPC ID。
     * 自定义路由表属于VPC高级功能。当所属VPC不支持该高级功能（不支持创建自定义路由表）时，您需要联系阿里云工程师处理。
     * @example `vpc-bp1qpo0kug3a20qqe****`
     */
    "VpcId": string;
    /**
     * 路由表的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `myRouteTable`
     */
    "RouteTableName"?: string;
    /**
     * 路由表的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "Description"?: string;
    /**
     * 创建的路由表的类型。取值：
     * - **VSwitch**（默认值）：交换机路由表。
     * - **Gateway**：网关路由表。
     * @example `VSwitch`
     */
    "AssociateType"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04`
     */
    "ClientToken"?: string;
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
