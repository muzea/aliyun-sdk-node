export interface DescribeCensResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `2BFA6822-240E-4E27-B4C8-AA400EF7474D`
     */
    RequestId: string;
    /**
     * 查询的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    Cens: {
        /**
         * 云企业网实例信息列表。
         */
        Cen: {
            /**
             * 云企业网实例的状态。
             * - **Creating**：创建中。
             * - **Active**：运行中。
             * - **Deleting**：删除中。
             * @example `Active`
             */
            Status: string;
            /**
             * 云企业网实例的创建时间。
             * 时间按照ISO8601标准表示，并使用UTC时间。格式为：`YYYY-MM-DDThh:mmZ`。
             * @example `2019-10-22T07:44Z`
             */
            CreationTime: string;
            /**
             * 云企业网实例是否已开启IPv6功能。
             * - **ENABLE**：已开启。
             * - **DISABLED**：未开启。
             * @example `DISABLED`
             */
            Ipv6Level: string;
            /**
             * 云企业网实例的描述信息。
             * @example `desctest`
             */
            Description: string;
            /**
             * 云企业网实例所属的资源组ID。
             * @example `rg-acfm3unpnuw****`
             */
            ResourceGroupId: string;
            /**
             * 云企业网实例的ID。
             * @example `cen-0xyeagctz5sfg9****`
             */
            CenId: string;
            /**
             * 网段重叠的级别。
             * **REDUCED**：表示网段可以有重叠，但是不能完全相同。
             * @example `REDUCED`
             */
            ProtectionLevel: string;
            /**
             * 云企业网实例的名称。
             * @example `nametest`
             */
            Name: string;
            Tags: {
                /**
                 * 云企业网实例绑定的标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `tagtest`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `tagtest`
                     */
                    Value: string;
                }[];
            };
            CenBandwidthPackageIds: {
                /**
                 * 云企业网实例绑定的带宽包的列表。
                 */
                CenBandwidthPackageId: string[];
            };
        }[];
    };
}
