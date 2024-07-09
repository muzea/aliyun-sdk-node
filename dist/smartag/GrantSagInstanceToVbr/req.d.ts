export interface GrantSagInstanceToVbrRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 边界路由器实例所属账号UID。
     * @example `1231212121121212112`
     */
    "VbrUid": number;
    /**
     * 边界路由器实例ID。
     * @example `vbr-bp13gtbhdp0pfqg6s****`
     */
    "VbrInstanceId": string;
    /**
     * 边界路由器实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "VbrRegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-0nnteglltw6z4b****`
     */
    "SmartAGId": string;
}
