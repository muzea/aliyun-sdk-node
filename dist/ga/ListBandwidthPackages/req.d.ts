export interface ListBandwidthPackagesRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**100**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 带宽包的状态，取值：
     * - **init**：初始化。
     * - **active**：可用。
     * - **binded**：已绑定。
     * - **binding**：绑定中。
     * - **unbinding**：解绑中。
     * - **updating**：更新中。
     * - **finacialLocked**：欠费锁定。
     * - **locked**：已锁定。
     * @example `active`
     */
    "State"?: string;
    /**
     * 带宽包的类型，取值：
     * - **Basic**：基础带宽包。
     * - **CrossDomain**：跨地域加速包。
     * 中国站仅支持取值**Basic**。
     * @example `Basic`
     */
    "Type"?: string;
    /**
     * 带宽包ID。
     * @example `gbwp-bp1sgzldyj6b4q7cx****`
     */
    "BandwidthPackageId"?: string;
    /**
     * 资源组ID。
     * @example `rg-aek2ry6mp2c****`
     */
    "ResourceGroupId"?: string;
    /**
     * 带宽包的标签。
     */
    "Tag"?: {
        /**
         * 带宽包的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 带宽包的标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
