export interface GrantInstanceToVbrRequest {
    /**
     * 要授权的VPC实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 接受授权的VBR实例所属阿里云账号（主账号）ID。
     * @example `1210123456123456`
     */
    "VbrOwnerUid": number;
    /**
     * 接受授权的VBR实例的列表信息。
     */
    "VbrInstanceIds"?: string[];
    /**
     * 要授权的VPC实例ID。
     * @example `vpc-bp1lqhq93q8evjpky****`
     */
    "InstanceId": string;
    /**
     * 接受授权的VBR实例的范围。取值：
     * - **All**：将VPC实例授权给指定地域和阿里云账号（主账号）下所有的VBR实例，此时**VbrInstanceIds**参数可以为空。
     * - **Specify**：将VPC实例授权给指定VBR实例，此时**VbrInstanceIds**参数需要配置。
     * @example `All`
     */
    "GrantType": string;
    /**
     * 接受授权的VBR实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "VbrRegionNo": string;
}
