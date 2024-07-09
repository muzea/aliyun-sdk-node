export interface SubmitGatewayTupleOrderRequest {
    /**
     * 要申请的网关安全密钥的数量。
     * @example `2`
     */
    "RequiredCount": number;
    /**
     * 网关密钥类型。
     * - singlechannel：低速版（单通道型）。
     * - standard：标准版。
     * - hybrid：高速版（Hybrid型）。
     * - noncontractual：高速版。
     * @example `noncontractual`
     */
    "TupleType": string;
}
