export interface ListClusterMembersResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    /**
     * 集群中包含的ECS实例页面。
     */
    ClusterMemberPage: {
        /**
         * 分页查询时，当前显示的页面数，不设置的情况下默认显示第1页。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 所有实例分页显示的页面数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 所有的ECS实例按照PageSize的大小进行分页显示时，总的显示页数。
         * @example `5`
         */
        TotalSize: number;
        ClusterMemberList: {
            /**
             * 集群中包含的实例列表。
             */
            ClusterMember: {
                /**
                 * 实例状态：
                 * - 1：表示运行中。
                 * - 0：表示转化中。
                 * - -1：表示转化失败。
                 * - -2：表示离线。
                 * @example `1`
                 */
                Status: number;
                /**
                 * 更新时间的时间戳。
                 * @example `1573281041113`
                 */
                UpdateTime: number;
                /**
                 * 这台ECU的唯一标示ID，可以通过在ECS上执行`dmidecode`获取。
                 * @example `70ed3f59-b476-49aa-be09-9e6c375d****`
                 */
                EcuId: string;
                /**
                 * ECS ID。
                 * @example `i-2zej4i2jdf3ntwhj****`
                 */
                EcsId: string;
                /**
                 * 创建时间的时间戳。
                 * @example `1573281038175`
                 */
                CreateTime: number;
                /**
                 * 实例集群ID。
                 * @example `adb03eeb-3adf-4d7e-afe1-03d1ad45****`
                 */
                ClusterMemberId: string;
                /**
                 * 集群ID。
                 * @example `52984524-6d48-4bbd-85f2-a34b0e5b****`
                 */
                ClusterId: string;
                /**
                 * ECS私网IP
                 * @example `172.16.XXX.XXX`
                 */
                PrivateIp: string;
            }[];
        };
    };
}
