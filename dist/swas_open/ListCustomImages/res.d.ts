export interface ListCustomImagesResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * 对象数组。
     */
    CustomImages: {
        /**
         * 快照创建时间。时间格式以ISO8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2022-10-09T02:28:06Z`
         */
        CreationTime: string;
        /**
         * 数据盘快照名称。
         * @example `数据盘快照`
         */
        DataSnapshotName: string;
        /**
         * 系统盘快照ID。
         * @example `s-bp1h173hj21puxb***`
         */
        SystemSnapshotId: string;
        /**
         * 自定义镜像是否共享至ECS。
         * @example `false`
         */
        InShare: boolean;
        InShareUser: boolean;
        /**
         * 指定的轻量应用服务器的实例ID。
         * @example `2d06ee0520b44de1ae88d4be****`
         */
        InstanceId: string;
        /**
         * 数据盘快照ID。
         * @example `s-bp19rn9u8eqzlfb***`
         */
        DataSnapshotId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 系统盘快照名称。
         * @example `系统盘快照`
         */
        SystemSnapshotName: string;
        /**
         * 描述信息。
         * @example `自定义镜像-1`
         */
        Description: string;
        /**
         * 自定义镜像名称。
         * @example `test`
         */
        Name: string;
        /**
         * 自定义镜像ID。
         * @example `m-bp1e79zktg26n2b***`
         */
        ImageId: string;
        /**
         * 自定义镜像状态。
         * @example `1`
         */
        Status: string;
        /**
         * 自定义镜像的标签列表。
         */
        Tags: {
            /**
             * 自定义镜像的标签键。
             * @example `TestKey`
             */
            Key: string;
            /**
             * 自定义镜像的标签值。
             * @example `TestValue`
             */
            Value: string;
        }[];
        /**
         * 轻量应用服务器实例名称。
         * @example `swas-asdf23***`
         */
        InstanceName: string;
        /**
         * 资源组ID。
         * @example `rg-acfm2h2lvp3ublq`
         */
        ResourceGroupId: string;
        CreateInstances: string[];
        UserId: number;
        OsType: string;
    }[];
    /**
     * 总条数。
     * @example `4`
     */
    TotalCount: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
}
