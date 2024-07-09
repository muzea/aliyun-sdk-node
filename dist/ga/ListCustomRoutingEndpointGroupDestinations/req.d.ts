export interface ListCustomRoutingEndpointGroupDestinationsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 待查询终端节点组映射信息配置的全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 待查询终端节点组映射信息配置的监听ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId"?: string;
    /**
     * 待查询映射信息配置的终端节点组ID。
     * @example `epg-bp16jdc00bhe97sr5****`
     */
    "EndpointGroupId"?: string;
    /**
     * 终端节点组后端服务的协议类型。取值：
     * - **TCP**：TCP协议。
     * - **UDP**：UDP协议。
     * - **TCP,UDP**：TCP和UDP协议。
     * 为空时查询所有协议类型。
     * 您最多可输入10个协议信息。
     */
    "Protocols"?: string[];
    /**
     * 终端节点组后端服务起始端口。
     * 取值范围：**1**~**65499**，且需满足**FromPort**≤**ToPort**，即终端节点组后端服务起始端口需小于等于终端节点组后端服务结束端口。
     * @example `80`
     */
    "FromPort"?: number;
    /**
     * 终端节点组后端服务结束端口。
     * 取值范围：**1**~**65499**，且需满足**FromPort**≤**ToPort**，即终端节点组后端服务起始端口需小于等于终端节点组后端服务结束端口。
     * @example `80`
     */
    "ToPort"?: number;
}
