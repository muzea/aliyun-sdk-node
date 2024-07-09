export interface DescribeARMServerInstancesResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 由服务器和AIC实例信息组成的数组。
     */
    Servers: {
        /**
         * 实例创建时间。
         * @example `2022-05-07 11:59:09`
         */
        CreationTime: string;
        /**
         * 实例过期时间。
         * @example `2027-05-07 11:59:09`
         */
        ExpiredTime: string;
        /**
         * AIC实例信息组成的数组。
         */
        AICInstances: {
            /**
             * AIC实例刷新率，单位Hz。
             * @example `120`
             */
            Frequency: number;
            /**
             * AIC镜像ID。
             * @example `m-****`
             */
            ImageId: string;
            /**
             * AIC实例ID。
             * @example `aic-instance****`
             */
            InstanceId: string;
            /**
             * 网络属性。
             */
            NetworkAttributes: {
                /**
                 * AIC实例IP地址。
                 * @example `192.168.1.1`
                 */
                IpAddress: string;
                /**
                 * AIC实例网络ID。
                 * @example `n-*****`
                 */
                NetworkId: string;
                /**
                 * AIC实例交换机ID。
                 * @example `vsw-****`
                 */
                VSwitchId: string;
            };
            /**
             * 实例上部署的共享数据集（SDG）信息。
             */
            SdgDeployInfo: {
                /**
                 * SDG的ID。
                 * @example `sdg-xxxxx`
                 */
                SDGId: string;
                /**
                 * SDG的部署状态，取值：
                 * - **sdg_deploying**：部署中。
                 * - **failed**：部署失败。
                 * - **success**：部署成功。
                 * @example `success`
                 */
                Status: string;
            };
            /**
             * AIC实例分辨率。
             * @example `1920*1080`
             */
            Resolution: string;
            /**
             * AIC实例规格。
             * @example `aic.cf53r.c2.np`
             */
            Spec: string;
            /**
             * AIC实例操作状态。
             * - **success**：成功。
             * - **failed**：失败。
             * - **creating**：创建中。
             * - **releasing**：释放中。
             * - **rebooting**：重启中。
             * - **reseting**：重置中。
             * @example `success`
             */
            State: string;
            /**
             * AIC实例运行状态。
             * - **running**：运行中。
             * - **pending**：等待中。
             * - **terminating**：终止中。
             * @example `running`
             */
            Status: string;
            /**
             * 容器名称。
             * @example `AIC-Name`
             */
            Name: string;
            /**
             * 最近一次操作。
             * @example `ServerCreate`
             */
            LatestAction: string;
        }[];
        /**
         * ENS节点ID。
         * @example `cn-hanghzou-27`
         */
        EnsRegionId: string;
        /**
         * 服务器ID。
         * @example `cas-******`
         */
        ServerId: string;
        /**
         * 服务器规格。
         * @example `cas.cf53r`
         */
        SpecName: string;
        /**
         * 服务器操作状态。
         * - **success**：成功。
         * - **failed**：失败。
         * - **creating**：创建中。
         * - **releasing**：释放中。
         * - **rebooting**：重启中。
         * - **upgrading**：升级中。
         * @example `success`
         */
        State: string;
        /**
         * 服务器运行状态。
         * - **running**：运行中。
         * - **stopping**：停止中。
         * - **down**：关机。
         * - **starting**：启动中。
         * @example `running`
         */
        Status: string;
        /**
         * 板卡所属集群Namespace名称。
         * @example `default`
         */
        Namespace: string;
        /**
         * 服务器名称。
         * @example `Server-Name`
         */
        Name: string;
        /**
         * 付费方式。
         * @example `prepay`
         */
        PayType: string;
        /**
         * 最近一次操作。
         * @example `ServerCreate`
         */
        LatestAction: string;
    }[];
    /**
     * 实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的实例总数。
     * @example `2`
     */
    TotalCount: number;
}
