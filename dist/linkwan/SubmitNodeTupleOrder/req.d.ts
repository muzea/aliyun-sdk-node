export interface SubmitNodeTupleOrderRequest {
    /**
     * LoRaWAN协议版本。
     * @example `1.0.2`
     */
    "LoraVersion": string;
    /**
     * 要申请的节点密钥数量。
     * @example `10`
     */
    "RequiredCount": number;
    /**
     * 申请的密钥类型
     * noncontractual：专业版密钥
     * standard：标准版密钥
     * relay：中继密钥
     * @example `standard`
     */
    "TupleType": string;
}
