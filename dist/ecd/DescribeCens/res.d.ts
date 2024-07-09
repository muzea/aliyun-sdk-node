export interface DescribeCensResponse {
    /**
     * 每页行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的云企业网实例总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 云企业网实例的详细信息。
     */
    Cens: {
        /**
         * 云企业网实例的状态。
         * @example `Active`
         */
        Status: string;
        /**
         * 云企业网实例的创建时间。
         * @example `2021-06-16T08:46Z`
         */
        CreationTime: string;
        /**
         * IPv6等级。
         * > 目前均不支持IPv6。
         * @example `DISABLED`
         */
        Ipv6Level: string;
        /**
         * 云企业网实例的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 云企业网实例ID。
         * @example `cen-3gwy16dojz1m65****`
         */
        CenId: string;
        /**
         * 网段重叠冲突的级别。
         * @example `REDUCED`
         */
        ProtectionLevel: string;
        /**
         * 云企业网实例名称。
         * @example `testCen`
         */
        Name: string;
        /**
         * 云企业网实例的标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `testKey`
             */
            Key: string;
            /**
             * 标签值。
             * @example `testValue`
             */
            Value: string;
        }[];
        /**
         * 云企业网实例绑定的带宽包列表。
         */
        PackageIds: {
            /**
             * 云企业网实例绑定的带宽包ID。
             * @example `cenbwp-4c2zaavbvh5f42****`
             */
            PackageId: string;
        }[];
    }[];
}
