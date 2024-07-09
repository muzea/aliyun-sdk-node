export interface DescribeUpgradeMajorVersionTasksResponse {
    /**
     * 请求ID。
     * @example `152E0C6D-B9C3-4468-9F2C-FEF9D9E8417B`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页可显示的记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 大版本升级任务列表。
     */
    Items: {
        /**
         * 升级后的大版本号。返回值：
         * * **10.0**
         * * **11.0**
         * * **12.0**
         * * **13.0**
         * * **14.0**
         * * **15.0**
         * @example `12.0`
         */
        TargetMajorVersion: string;
        /**
         * 展示任务最终是否成功。
         * * **Success**：成功。
         * * **Failed**：失败。
         * * **Running**：迁移中。
         * @example `Success`
         */
        Result: string;
        /**
         * 大版本升级结束时间。
         * 以Unix时间戳表示。单位：毫秒。
         * @example `1614237779000`
         */
        EndTime: string;
        /**
         * 大版本升级开始时间。
         * 以Unix时间戳表示。单位：毫秒。
         * @example `1614236007000`
         */
        StartTime: string;
        /**
         * 升级前原实例的版本号。
         * @example `11.0`
         */
        SourceMajorVersion: string;
        /**
         * 升级模式。
         * 取值范围：
         * - **clone**：不割接
         * - **switch**：割接
         * @example `switch`
         */
        UpgradeMode: string;
        /**
         * 统计信息收集模式。
         * 取值范围：
         * - **After**：割接后升级。
         * - **Before**：割接前升级。
         * @example `After`
         */
        CollectStatMode: string;
        /**
         * 升级前原实例的ID。
         * @example `pgm-bp1i3kkq7321****`
         */
        SourceInsName: string;
        /**
         * 任务ID。
         * @example `342900000`
         */
        TaskId: number;
        /**
         * 升级后新实例的ID。
         * @example `pgm-bp1c0v6d8092****`
         */
        TargetInsName: string;
        /**
         * 业务从原实例切换至新实例的时间。
         * 以Unix时间戳表示。单位：毫秒。
         * @example `1614237539000`
         */
        SwitchTime: string;
        /**
         * 任务的详细信息。
         * @example `2021-10-27 15:03:05 --- do upgrade precheck on slave succcess.\n2021-10-27 15:03:11 --- begin to upgrade major version, source instance will locked in readonly mode.\n2021-10-27 15:03:21 --- upgrade master success.\n2021-10-27 15:06:10 --- exchange source and target instance dns success.\n`
         */
        Detail: string;
    }[];
}
