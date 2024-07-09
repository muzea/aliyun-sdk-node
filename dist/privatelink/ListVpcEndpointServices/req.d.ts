export interface ListVpcEndpointServicesRequest {
    /**
     * 终端节点服务所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**50**，默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 终端节点服务的ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceId"?: string;
    /**
     * 终端节点服务的名称。
     * @example `com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceName"?: string;
    /**
     * 服务资源ID。
     * @example `lb-hp32z1wp5peaoox2q****`
     */
    "ResourceId"?: string;
    /**
     * 服务资源类型，取值：
     * - **slb**：表示服务资源类型为传统型负载均衡CLB（Classic Load Balancer）。
     * - **alb**：表示服务资源类型为应用型负载均衡ALB（Application Load Balancer）。
     * - **nlb** ：表示服务资源类型为网络型负载均衡NLB（Network Load Balancer ）。
     * @example `slb`
     */
    "ServiceResourceType"?: string;
    /**
     * 是否自动接受终端节点连接，取值：
     * - **true**：自动接受终端节点连接。
     * - **false**（默认值）：不自动接受终端节点连接。
     * @example `false`
     */
    "AutoAcceptEnabled"?: boolean;
    /**
     * 终端节点服务的状态，取值：
     * - **Creating**：创建中。
     * - **Pending**：修改中。
     * - **Active**：可用。
     * - **Deleting**：删除中。
     * @example `Active`
     */
    "ServiceStatus"?: string;
    /**
     * 终端节点服务的业务状态，取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * @example `Normal`
     */
    "ServiceBusinessStatus"?: string;
    /**
     * 是否支持连接服务的终端节点域名就近解析。取值：
     * - **true**（默认值）：是。
     * - **false**：否。
     * @example `true`
     */
    "ZoneAffinityEnabled"?: boolean;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。最多支持20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 实例的标签值。最多支持20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
