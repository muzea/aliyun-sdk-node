export interface DisableCenVbrHealthCheckRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-sjfoejfghhjgghjghkg****`
     */
    "CenId": string;
    /**
     * VBR实例所在的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "VbrInstanceRegionId": string;
    /**
     * VBR实例ID。
     * @example `vbr-wz95o9aylj181n5****`
     */
    "VbrInstanceId": string;
    /**
     * VBR实例所属的阿里云账号（主账号）ID。
     * > 如果VBR实例和云企业网实例不属于同一个账号，本参数必填。
     * @example `1250123456123456`
     */
    "VbrInstanceOwnerId"?: number;
}
