export interface ClearSagCipherRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-0nnteglltw6z4b****`
     */
    "SagId": string;
    /**
     * 智能接入网关（VCPE）设备序列号。
     * @example `sag42c3****`
     */
    "SnNumber": string;
}
