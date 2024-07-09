export interface CreateCustomerGatewayResponse {
    /**
     * 请求ID。
     * @example `D32B3C26-6C6C-4988-93E9-D2A6444CE6AE`
     */
    RequestId: string;
    /**
     * 本地数据中心网关设备的公网IP地址。
     * @example `101.12.XX.XX`
     */
    IpAddress: string;
    /**
     * 用户网关的描述信息。
     * @example `desctest`
     */
    Description: string;
    /**
     * 用户网关的实例ID。
     * @example `cgw-bp1jrawp82av6bws9****`
     */
    CustomerGatewayId: string;
    /**
     * 创建用户网关的时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建用户网关时的总时长。
     * @example `1493363486000`
     */
    CreateTime: number;
    /**
     * 用户网关的名称。
     * @example `nametest`
     */
    Name: string;
}
