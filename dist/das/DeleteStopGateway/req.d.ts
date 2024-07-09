export interface DeleteStopGatewayRequest {
    /**
     * DBGateway的ID，是DBGateway的唯一标识。可通过[DescribeCloudbenchTask](~~230669~~)接口获取，返回的**ClientGatewayId**字段值即为DBGateway的ID。
     * @example `22938c83fcfbced4b4869b9695e3****`
     */
    "GatewayId": string;
}
