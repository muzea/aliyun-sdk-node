export interface GetVpnGatewayDiagnoseResultRequest {
    /**
     * VPN网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 诊断ID。
     * 在您[DiagnoseVpnGateway](~~469751~~)调用接口时，系统会返回对应的诊断ID。
     * @example `vpndgn-uf6kuxbe3iv028k3s****`
     */
    "DiagnoseId"?: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-uf6fzwp0ck3frwtbk****`
     */
    "VpnGatewayId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
}
