export interface DescribeVpcAttributeRequest {
    /**
     * 要查询的VPC的ID。
     * @example `vpc-bp18sth14qii3pnv****`
     */
    "VpcId": string;
    /**
     * VPC所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并直接查询资源状况。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否为默认VPC，取值：
     * - **false**（默认值）：不是默认VPC。
     * - **true**：是默认VPC。
     * @example `false`
     */
    "IsDefault"?: boolean;
}
