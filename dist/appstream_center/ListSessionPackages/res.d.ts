export interface ListSessionPackagesResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5Fxxxxxxxx
    `
     */
    RequestId: string;
    /**
     * 每页展示数据。
     * @example `100`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前用户项目总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 用户会话包数据集。
     */
    Data: {
        /**
         * 云Flow项目ID。
         * @example `p-xxxxxxxxxxxx`
         */
        ProjectId: string;
        /**
         * 云flow项目名称
         * @example `wuying-project-npp-test`
         */
        ProjectName: string;
        /**
         * 会话包ID。
         * @example `tp-xxxxxxxxx`
         */
        SessionPackageId: string;
        /**
         * 会话包类型ID。
         * @example `0`
         */
        SessionPackageTypeId: string;
        /**
         * 会话包名称。
         * @example `测试会话包`
         */
        SessionPackageName: string;
        /**
         * 付费方式。
         * @example `PostPaid`
         */
        ChargeType: string;
        /**
         * 会话包对应的会话规格。
         * @example `appstreaming.general.entry`
         */
        SessionSpec: string;
        /**
         * 会话包时长最大值。
         * @example `1000`
         */
        MaxHours: number;
        /**
         * 可用会话时长，剩余可用小时数。
         * @example `500`
         */
        AvailableHours: number;
        /**
         * 最大连接数。
         * @example `100`
         */
        MaxSessions: number;
        /**
         * 使用中的会话数量。
         * @example `60`
         */
        SessionUsageRate: number;
        /**
         * 租户ID。
         * @example `156xxxxxxxxxx`
         */
        UserIdentification: number;
        /**
         * 会话包所属的地域ID。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 数据库删除标记。
         * @example `0`
         */
        DeleteStatus: number;
        /**
         * 会话包创建时间。
         * @example `1701170196000`
         */
        GmtCreate: string;
        /**
         * 会话包修改时间。
         * @example `1701170203000`
         */
        GmtModifiedTime: string;
        /**
         * 实例对象。
         */
        InstanceObject: {
            /**
             * 到期时间。
             * @example `2024-05-28T16:00:00Z`
             */
            ExpiredTime: string;
            /**
             * 会话包ID。
             * @example `tp-xxxxxxxxxxx`
             */
            InstanceId: string;
            /**
             * 会话包类型。
             * @example `appstreaming.general.entry
            `
             */
            InstanceType: string;
            /**
             * 会话包项目ID。
             * @example `p-xxxxxxxxxx`
             */
            ResourceId: string;
            /**
             * 会话包付费类型。
             * @example `AppSessionPackage`
             */
            ResourceType: string;
            /**
             * 会话包开始时间。
             * @example `2023-11-28T04:14:07Z`
             */
            StartTime: string;
            /**
             * 会话包时长。单位：秒。
             * @example `3600000`
             */
            TotalTime: number;
            /**
             * 会话包已使用时间。单位：秒。
             * @example `1021`
             */
            UsedTime: number;
        };
        /**
         * 会话包状态。
         * @example `4`
         */
        State: number;
    }[];
}
