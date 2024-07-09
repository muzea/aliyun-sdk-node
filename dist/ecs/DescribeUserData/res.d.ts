export interface DescribeUserDataResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `i-bp14bnftyqhxg9ij****`
     */
    InstanceId: string;
    /**
     * 实例的自定义数据。
     * @example `ZWNobyBoZWxsbyBlY321ABC`
     */
    UserData: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
