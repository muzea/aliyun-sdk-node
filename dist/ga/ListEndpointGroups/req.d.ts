export interface ListEndpointGroupsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**，默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 监听实例ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId"?: string;
    /**
     * 终端节点组类型。取值：
     * - **default**：默认终端节点组。
     * - **virtual**：虚拟终端节点组。
     * - 空值：表示查询所有默认终端节点组和虚拟终端节点组。
     * @example `virtual`
     */
    "EndpointGroupType"?: string;
    /**
     * 是否开启访问日志。取值：
     * - **on**：开启访问日志。
     * - **off**（默认值）：关闭访问日志。
     * @example `on`
     */
    "AccessLogSwitch"?: string;
    /**
     * 终端节点组ID。
     * @example `epg-bp16jdc00bhe97sr5****`
     */
    "EndpointGroupId"?: string;
    /**
     * 终端节点组的标签。
     */
    "Tag"?: {
        /**
         * 终端节点组的标签键。
         * 一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签键。
         * @example `test-key`
         */
        Key: string;
        /**
         * 终端节点组的标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签值。
         * @example `test-value`
         */
        Value: string;
    }[];
}
