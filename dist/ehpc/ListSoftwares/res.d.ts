export interface ListSoftwaresResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE7****`
     */
    RequestId: string;
    Softwares: {
        /**
         * 软件信息列表。
         */
        SoftwareInfo: {
            /**
             * 调度器类型。可能值：
             * - pbs
             * - pbs19
             * - slurm
             * - slurm19
             * - slurm20
             * - opengridscheduler
             * - deadline
             * - gridengine
             * - cube
             * - custom
             * @example `pbs`
             */
            SchedulerType: string;
            /**
             * 镜像标签。
             * @example `CentOS_7.2_64`
             */
            OsTag: string;
            /**
             * 调度器软件版本。
             * @example `18.1.1`
             */
            SchedulerVersion: string;
            /**
             * 域账号服务版本。
             * @example `2.31`
             */
            AccountVersion: string;
            /**
             * 域账号服务类型。可能值：
             * - nis
             * - ldap
             * @example `nis`
             */
            AccountType: string;
            /**
             * E-HPC版本。
             * @example `1.0.0`
             */
            EhpcVersion: string;
            Applications: {
                /**
                 * 集群应用软件列表。
                 */
                ApplicationInfo: {
                    /**
                     * 是否必选软件。可能值：
                     * - false：非必选
                     * - true：必选
                     * @example `true`
                     */
                    Required: boolean;
                    /**
                     * 软件标签。
                     * @example `CUDNN_9.0`
                     */
                    Tag: string;
                    /**
                     * 软件名称。
                     * @example `cudnnt`
                     */
                    Name: string;
                    /**
                     * 软件版本。
                     * @example `9.0`
                     */
                    Version: string;
                }[];
            };
        }[];
    };
}
