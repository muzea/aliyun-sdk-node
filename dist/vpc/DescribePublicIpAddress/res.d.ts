export interface DescribePublicIpAddressResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 是否查询成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `test`
     */
    Message: string;
    /**
     * 分页查询时每页的行数。
     * @example `100`
     */
    PageSize: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 公网IP所属地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 指定地域中位于专有网络的公网IP地址的范围。
     * @example `110.11.1.0/24`
     */
    PublicIpAddress: string[];
}
