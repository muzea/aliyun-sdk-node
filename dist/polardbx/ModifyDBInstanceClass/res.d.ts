export interface ModifyDBInstanceClassResponse {
    /**
     * 交易订单ID，实例升配或降配，变更实例规格，会产生交易订单。
     * @example `20211103105558`
     */
    OrderId: string;
    /**
     * 请求ID。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    RequestId: string;
}
