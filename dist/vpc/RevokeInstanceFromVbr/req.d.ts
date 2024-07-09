export interface RevokeInstanceFromVbrRequest {
    /**
     * 要取消授权的VPC实例所在地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 取消接受授权的VBR实例所属阿里云账号（主账号）ID。
     * @example `1210123456123456`
     */
    "VbrOwnerUid": string;
    /**
     * 取消接受VPC实例授权的VBR实例ID列表。
     */
    "VbrInstanceIds"?: string[];
    /**
     * 要取消授权的VPC实例ID。
     * @example `vpc-bp1brjuegjc88v3u9****`
     */
    "InstanceId": string;
    /**
     * 取消接受VPC实例授权的VBR实例范围。取值：
     * - **ALL**：表示取消指定地域内的所有VBR实例的VPC实例授权关系，此时**VbrInstanceIds**参数可以为空。
     * - **Specify**：表示取消指定VBR实例的VPC实例授权关系，此时**VbrInstanceIds**参数需要配置。
     * @example `ALL`
     */
    "GrantType": string;
    /**
     * 要取消接受VPC实例授权的VBR实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "VbrRegionNo": string;
}
