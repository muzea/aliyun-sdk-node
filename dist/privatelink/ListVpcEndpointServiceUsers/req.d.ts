export interface ListVpcEndpointServiceUsersRequest {
    /**
     * 要查询的终端节点服务所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页大小，取值范围：**1~50**，默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 终端节点服务的ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceId": string;
    /**
     * 服务白名单阿里云账号ID。
     * @example `12345678`
     */
    "UserId"?: number;
    /**
     * 服务白名单用户列表类型：
     * - Users
     * - UserARNs
     * @example `Users`
     */
    "UserListType"?: string;
}
