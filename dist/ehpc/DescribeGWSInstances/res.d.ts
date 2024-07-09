export interface DescribeGWSInstancesResponse {
    /**
     * 显示每页条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `2777461A-E45E-42F8-8E67-0EBF132E93E0`
     */
    RequestId: string;
    /**
     * 显示当前页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表信息总数。
     * @example `1`
     */
    TotalCount: number;
    Instances: {
        /**
         * 可视化实例信息列表。
         */
        InstanceInfo: {
            /**
             * 可视化实例的状态。可能值：
             * - Creating：创建中
             * - Starting：启动中
             * - Stopping：停止中
             * - Stopped：已停止
             * - Initializing：初始化
             * - Unregistered：未注册
             * - Registered：已注册
             * - InUse：使用中
             * - Missing：丢失
             * - Cloning：镜像制作中
             * @example `Creating`
             */
            Status: string;
            /**
             * 可视化实例工作模式。可能值：
             * - Desktop：桌面模式
             * - Application：应用模式
             * @example `Desktop`
             */
            WorkMode: string;
            /**
             * 可视化实例到期时间。
             * @example `2099-12-31T15:59Z`
             */
            ExpireTime: string;
            /**
             * 可视化实例创建时间。
             * @example `2020-02-03T14:03Z`
             */
            CreateTime: string;
            /**
             * 可视化实例ID。
             * @example `i-bp1bzqq1ddeemuddn****`
             */
            InstanceId: string;
            /**
             * 可视化实例名称。
             * @example `c0-i01-1-g6-2c8g`
             */
            Name: string;
            /**
             * 可视化实例类型。
             * @example `ecs.g6.large`
             */
            InstanceType: string;
            /**
             * 可视化实例分配的用户名。
             * >实例未分配给指定用户时，此值为空。
             * @example `user-****`
             */
            UserName: string;
            /**
             * 可视化集群ID。
             * @example `gws-rhz99q8rc****`
             */
            ClusterId: string;
            AppList: {
                /**
                 * 应用程序列表信息。
                 * >工作模式为桌面模式时，此列表为空。
                 */
                AppInfo: {
                    /**
                     * 应用程序名称。
                     * @example `notepad`
                     */
                    AppName: string;
                    /**
                     * 应用运行参数。
                     * @example `temp.txt`
                     */
                    AppArgs: string;
                    /**
                     * 应用程序运行路径。
                     * @example `/home/test/notepad.exe`
                     */
                    AppPath: string;
                }[];
            };
        }[];
    };
}
