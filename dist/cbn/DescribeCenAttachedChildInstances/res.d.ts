export interface DescribeCenAttachedChildInstancesResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B2063B16-852B-5B66-B73D-4ED4D1A5E5C2`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    ChildInstances: {
        /**
         * 云企业网实例加载的网络实例信息列表。
         */
        ChildInstance: {
            /**
             * 网络实例的类型，取值：
             * - **VPC**：专有网络实例。
             * - **VBR**：边界路由器实例。
             * - **CCN**：云连接网实例。
             * @example `VPC`
             */
            ChildInstanceType: string;
            /**
             * 网络实例的状态，取值：
             * - **Attaching**：加载中。
             * - **Attached**：已加载。
             * - **Detaching**：卸载中。
             * @example `Attached`
             */
            Status: string;
            /**
             * 网络实例所属地域ID。
             * @example `cn-zhangjiakou`
             */
            ChildInstanceRegionId: string;
            /**
             * 网络实例所属阿里云账号（主账号）ID。
             * @example `1688000000000000`
             */
            ChildInstanceOwnerId: number;
            /**
             * 网络实例ID。
             * @example `vpc-8vb1lu55yt9rlwgxl****`
             */
            ChildInstanceId: string;
            /**
             * 云企业网实例ID。
             * @example `cen-j3jzhw1zpau2km****`
             */
            CenId: string;
            /**
             * 网络实例的加载时间。
             * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
             * @example `2021-08-10T06:27Z`
             */
            ChildInstanceAttachTime: string;
        }[];
    };
}
