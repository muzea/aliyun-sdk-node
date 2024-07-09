export interface DescribeGrantRulesToCenRequest {
    /**
     * 网络实例所属地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-nye53d7p3hzyu4****`
     */
    "CenId": string;
    /**
     * 网络实例的类型，取值：
     * - **VPC**：专有网络实例。
     * - **VBR**：边界路由器实例。
     * - **CCN**：云连接网实例。
     * - **VPN**：IPsec连接。
     * - **ECR**：专线网关实例。
     * @example `VPC`
     */
    "ProductType": string;
    /**
     * - 如果您不指定**MaxResults**参数的值，则表示您不需要分批次查询。调用接口后返回参数**MaxResults**的值表示列表条目总数。
     * - 如果您指定**MaxResults**参数的值，则表示您需要分批次查询，**MaxResults**的值表示分批次查询时每次显示的条目数。取值范围：**1**~**100**。调用接口后返回参数**MaxResults**的值表示当前查询批次下列表条目的数量。建议指定**MaxResults**参数的值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 要查询的网络实例ID。
     * @example `vpc-rj9gt5nll27onu7****`
     */
    "ChildInstanceId"?: string;
    /**
     * 网络实例所属阿里云账号（主账号）ID。
     * @example `1250123456123456`
     */
    "ChildInstanceOwnerId"?: number;
}
