export interface RevokeInstanceFromVbrRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-0nnteglltw6z4b****`
     */
    "SmartAGId": string;
    /**
     * 边界路由器实例ID。
     * @example `vbr-bp13gtbhdp0pfqg6s****`
     */
    "VbrInstanceId": string;
}
