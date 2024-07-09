export interface BindVbrRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-eoqbp1fmrsgbrn****`
     */
    "SmartAGId": string;
    /**
     * 要绑定的边界路由器实例ID。
     * @example `vbr-gc7ccdvtp3l4fec0j****`
     */
    "VbrId": string;
    /**
     * 要绑定的边界路由器实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "VbrRegionId": string;
    /**
     * 智能接入网关实例所属阿里云账号（主账号）ID。
     * @example `1250123456123456`
     */
    "SmartAGUid"?: number;
}
