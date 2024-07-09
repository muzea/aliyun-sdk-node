export interface DescribeUnBlockCountResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 总共可用的近源流量压制次数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 剩余可用的近源流量压制次数。
     * @example `7`
     */
    RemainCount: number;
}
