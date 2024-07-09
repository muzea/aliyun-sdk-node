export interface DescribeDBInstanceTopologyResponse {
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 拓扑信息。
         */
        LogicInstanceTopology: {
            /**
             * 实例名称。
             * @example `pxc-sprcym7g7w****`
             */
            DBInstanceName: string;
            /**
             * 实例创建时间，格式为yyyy-MM-dd HH:mm:ss。
             * @example `2021-10-21T10:30:45Z 04:00:00`
             */
            DBInstanceCreateTime: string;
            /**
             * 运维开始时间，格式为HH:mm:ss。
             * @example `04:00:00`
             */
            MaintainStartTime: string;
            /**
             * 运维结束时间，格式为HH:mm:ss。
             * @example `05:00:00`
             */
            MaintainEndTime: string;
            /**
             * 锁定原因。
             * @example `欠费`
             */
            LockReason: string;
            /**
             * 实例状态。
             * @example `8`
             */
            DBInstanceStatus: number;
            /**
             * 锁定状态 ：
             * - **0**：未锁定；
             * - **1**：锁定。
             * @example `0`
             */
            LockMode: number;
            /**
             * 引擎版本，默认2.0。
             * @example `2.0`
             */
            EngineVersion: string;
            /**
             * 存储节点个数。
             * @example `1`
             */
            DBInstanceStorage: number;
            /**
             * 表示用lvs做负载均衡。
             * @example `lvs`
             */
            DBInstanceConnType: string;
            /**
             * 实例ID。
             * @example `304726047`
             */
            DBInstanceId: string;
            /**
             * 引擎， 默认：polarx。
             * @example `polarx`
             */
            Engine: string;
            /**
             * 实例描述。
             * @example `pxc-sprcym7******`
             */
            DBInstanceDescription: string;
            /**
             * 实例状态描述。
             * @example `TDE_MODIFYING`
             */
            DBInstanceStatusDescription: string;
            /**
             * 节点列表。
             */
            Items: {
                /**
                 * 实例创建时间。
                 * @example `2021-10-21T10:30:45Z`
                 */
                DBInstanceCreateTime: string;
                /**
                 * 实例名称。
                 * @example `pxc-i-tk6t4z****`
                 */
                DBInstanceName: string;
                /**
                 * 节点属性，取值如下：
                 * - **polarx_cn**：计算节点；
                 * - **polarx_store**：数据节点；
                 * - **polarx_gms**：GMS节点。
                 * @example `节点角色`
                 */
                CharacterType: string;
                /**
                 * 运维开始时间。
                 * @example `不展示`
                 */
                MaintainStartTime: string;
                /**
                 * 磁盘大小。
                 * @example `3145728`
                 */
                DiskSize: number;
                /**
                 * 运维结束时间。
                 * @example `不展示`
                 */
                MaintainEndTime: string;
                /**
                 * 锁定原因。
                 * @example `不展示`
                 */
                LockReason: string;
                /**
                 * 实例状态。
                 * @example `8`
                 */
                DBInstanceStatus: number;
                /**
                 * 是否锁定，取值如下：
                 * - **0**：未锁定；
                 * - **1**：锁定。
                 * @example `0`
                 */
                LockMode: number;
                /**
                 * 引擎版本，默认2.0。
                 * @example `5.7`
                 */
                EngineVersion: string;
                /**
                 * 连接类型。
                 * @example `不展示`
                 */
                DBInstanceConnType: number;
                /**
                 * 最大连接数。
                 * @example `4000`
                 */
                MaxConnections: number;
                /**
                 * 实例ID。
                 * @example `304726049`
                 */
                DBInstanceId: string;
                /**
                 * 引擎版本，取值如下：
                 * - **mysql **
                 * - **polarx_cdc**
                 * - **polarx_dn**
                 * @example `mysql`
                 */
                Engine: string;
                /**
                 * 最大Iops。
                 * @example `7000`
                 */
                MaxIops: number;
                /**
                 * 实例描述。
                 * @example `不展示`
                 */
                DBInstanceDescription: string;
                /**
                 * 实例状态描述。
                 * @example `不展示`
                 */
                DBInstanceStatusDescription: string;
                /**
                 * 数据结构体。
                 */
                ConnectionIp: {
                    /**
                     * 端口。
                     * @example `3306`
                     */
                    Port: string;
                    /**
                     * 内部连接的方式，固定取值为1，表示经典网络。
                     * @example `1`
                     */
                    DBInstanceNetType: number;
                    /**
                     * 连接信息。
                     * @example `pxc-xdb-m-pxcdym7g7w********.mysql.singapore.rds.aliyuncs.com`
                     */
                    ConnectionString: string;
                }[];
                /**
                 * 节点所属地域，如果为RDS节点，多个子节点的地域以 ';' 分割。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 节点所属可用区，如果为RDS节点，多个子节点的可用区以';'分割。
                 * @example `cn-hangzhou-a`
                 */
                Azone: string;
                /**
                 * 节点角色，取值如下：
                 * - **master**：主节点
                 * - **standby**：备节点
                 * @example `master`
                 */
                Role: string;
                /**
                 * 节点是否启用，计算层仅启用主可用区节点，在实例执行主备切换后计算层备用节点会切换为主节点，所有存储层节点均启用。
                 * @example `true`
                 */
                Activated: boolean;
                /**
                 * RDS三节点的数据信息列表。
                 */
                AzoneRoleList: {
                    /**
                     * RDS三节点中某个节点所属可用区。
                     * @example `cn-hangzhou-a`
                     */
                    Azone: string;
                    /**
                     * RDS三节点中某个节点的角色，取值如下：
                     * - **leader**：主节点
                     * - **follower**：从节点
                     * - **logger**：日志节点
                     * @example `leader`
                     */
                    Role: string;
                }[];
                /**
                 * 节点状态：
                 * - **0**：运行中
                 * - **1**：创建中
                 * - **2**：异常
                 * - **3**：已过期
                 * - **4**：释放中
                 * - **5**：已释放
                 * - **6**：锁定
                 * @example `0`
                 */
                Status: string;
                /**
                 * 节点规格：
                 * - **polarx.x4.medium.2e**：2核8 GB
                 * - **polarx.x4.large.2e**：4核16 GB
                 * - **polarx.x8.large.2e**：4核32 GB
                 * - **polarx.x4.xlarge.2e**：8核32 GB
                 * - **polarx.x8.xlarge.2e**：8核64 GB
                 * - **polarx.x4.2xlarge.2e**：16核64 GB
                 * - **polarx.x8.2xlarge.2e**：16核128 GB
                 * - **polarx.x4.4xlarge.2e**：32核128 GB
                 * - **polarx.x8.4xlarge.2e**：32核256 GB
                 * - **polarx.st.8xlarge.2e**：60核470 GB
                 * - **polarx.st.12xlarge.2e**：90核720 GB
                 * @example `polarx.x4.large.2e`
                 */
                NodeClass: string;
                /**
                 * 日志节点版本。
                 * @example `polarx-cdc-kernel-2.0.0-3985896`
                 */
                Version: string;
                /**
                 * 物理实例名
                 * @example `pxc-unrbk8oyz**********`
                 */
                PhyInstanceName: string;
                StorageUsed: string;
            }[];
            /**
             * 历史节点列表。
             */
            HistoryItems: {
                /**
                 * 节点属性，取值如下：
                 * - **polarx_cn**：计算节点；
                 * - **polarx_store**：数据节点；
                 * - **polarx_gms**：GMS节点。
                 * @example `节点角色`
                 */
                CharacterType: string;
                /**
                 * 节点角色，取值如下：
                 * - **master**：主节点
                 * - **standby**：备节点
                 * @example `master`
                 */
                Role: string;
                /**
                 * 实例名称。
                 * @example `pxc-sprcym7g7w****`
                 */
                DBInstanceName: string;
                /**
                 * 实例ID。
                 * @example `304726049`
                 */
                DBInstanceId: string;
                /**
                 * 节点所属地域，如果为RDS节点，多个子节点的地域以 ';' 分割。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 节点所属可用区，如果为RDS节点，多个子节点的可用区以';'分割。
                 * @example `cn-hangzhou-a`
                 */
                Azone: string;
                /**
                 * 节点是否启用，计算层仅启用主可用区节点，在实例执行主备切换后计算层备用节点会切换为主节点，所有存储层节点均启用。
                 * @example `true`
                 */
                Activated: boolean;
                /**
                 * 物理实例名。
                 * @example `pxc-unrbk8oyz**********`
                 */
                PhyInstanceName: string;
            }[];
        };
    };
}
