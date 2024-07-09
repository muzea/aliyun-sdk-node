export interface DescribeImageSharePermissionResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 查询结果显示的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页的信息条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 记录总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 自定义镜像ID。
     * @example `m-bp1caf3yicx5jlfl****`
     */
    ImageId: string;
    /**
     * 镜像所属地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    ShareGroups: {
        /**
         * 共享组。
         */
        ShareGroup: {
            /**
             * 共享分组。
             * @example `all`
             */
            Group: string;
        }[];
    };
    Accounts: {
        /**
         * 阿里云注册用户。
         */
        Account: {
            /**
             * 阿里云账号ID。
             * @example `123456****`
             */
            AliyunId: string;
            /**
             * 镜像共享开始时间。时间格式按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC时间。 格式为：yyyy-MM-ddTHH:mm:ssZ。
             * @example `2023-01-01T12:05:00Z`
             */
            SharedTime: string;
        }[];
    };
}
