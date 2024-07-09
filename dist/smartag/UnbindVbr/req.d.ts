export interface UnbindVbrRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-pek29fu47tmpj0****`
     */
    "SmartAGId": string;
    /**
     * 待解绑的边界路由器实例ID。
     * @example `vbr-wz90rs6ef1m2fq0yn****`
     */
    "VbrId": string;
    /**
     * 边界路由器实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "VbrRegionId": string;
    /**
     * 智能接入网关实例所属阿里云账号（主账号）ID。
     * @example `253460731706911258`
     */
    "SmartAGUid"?: number;
}
