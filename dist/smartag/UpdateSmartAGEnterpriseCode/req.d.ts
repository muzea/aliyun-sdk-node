export interface UpdateSmartAGEnterpriseCodeRequest {
    /**
     * 智能接入网关APP实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 要更换的目标企业码。
     * @example `12P**`
     */
    "EnterpriseCode": string;
    /**
     * 智能接入网关APP实例ID。
     * @example `sag-rz2e23c0e78ema****`
     */
    "SmartAGId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `02fb3da4-130e****`
     */
    "ClientToken"?: string;
}
