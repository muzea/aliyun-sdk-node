export interface ResolveAndRouteServiceInCenRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4****`
     */
    "ClientToken"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-ckwa2hhmuislse****`
     */
    "CenId": string;
    /**
     * 云服务IP地址或地址段。
     * > 通常云服务会使用多个地址或地址段，建议您重复调用本接口，添加该云服务所有地址或地址段。
     * @example `100.118.28.0/24`
     */
    "Host": string;
    /**
     * 云服务所在的地域ID。
     * @example `cn-hangzhou`
     */
    "HostRegionId": string;
    /**
     * 云服务关联的VPC实例ID。
     * @example `vpc-o6woh5s494zueq40v****`
     */
    "HostVpcId": string;
    /**
     * 云服务的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `descname`
     */
    "Description"?: string;
    /**
     * 访问云服务的地域ID列表。
     * @example `cn-hangzhou`
     */
    "AccessRegionIds": string[];
}
