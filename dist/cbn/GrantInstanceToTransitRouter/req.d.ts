export interface GrantInstanceToTransitRouterRequest {
    /**
     * 转发路由器实例所属的云企业网实例ID。
     * @example `cen-44m0p68spvlrqq****`
     */
    "CenId": string;
    /**
     * 网络实例ID。
     * @example `vpc-bp1h8vbrbcgohcju5****`
     */
    "InstanceId": string;
    /**
     * 网络实例的类型。取值：
     * - **VPC**：表示VPC实例。
     * - **ExpressConnect**：表示VBR实例。
     * - **VPN**：表示IPsec连接。
     * - **ECR**：表示ECR实例。
     * @example `VPC`
     */
    "InstanceType": string;
    /**
     * 网络实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 云企业网实例所属的阿里云账号（主账号）ID。
     * @example `1250123456123456`
     */
    "CenOwnerId": number;
    /**
     * 网络实例的付费方。取值：
     * - **PayByCenOwner**：表示网络实例产生的费用由云企业网实例所属的账号承担。
     * - **PayByResourceOwner**：表示网络实例产生的费用由网络实例所属的账号承担。
     * @example `PayByCenOwner`
     */
    "OrderType"?: string;
}
