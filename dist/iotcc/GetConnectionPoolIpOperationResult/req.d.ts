export interface GetConnectionPoolIpOperationResultRequest {
    /**
     * 云连接器实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 连接地址池ID。
     * @example `cp-0gd9qnmv8431rh****`
     */
    "ConnectionPoolId": string;
    /**
     * 查询请求ID，即调用[AssociateIpWithConnectionPool](~~313334~~)或[DissociateIpFromConnectionPool](~~313335~~)接口，操作成功后返回的**RequestId**。
     * @example `CFA63CEB-15B6-4AE8-B203-F855FF7BA962`
     */
    "QueryRequestId": string;
}
