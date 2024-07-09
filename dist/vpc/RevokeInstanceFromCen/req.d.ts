export interface RevokeInstanceFromCenRequest {
    /**
     * 网络实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 网络实例的ID。
     * @example `vpc-uf6o8d1dj8sjwxi6o****`
     */
    "InstanceId": string;
    /**
     * 网络实例的类型，取值：
     * - **VPC**：专有网络。
     * - **VBR**：边界路由器。
     * - **CCN**：云连接网。
     * @example `VPC`
     */
    "InstanceType": string;
    /**
     * 指定要撤销授权的云企业网实例的ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 指定要撤销授权的云企业网实例所属账号的UID。
     * @example `123456789`
     */
    "CenOwnerId": number;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
}
