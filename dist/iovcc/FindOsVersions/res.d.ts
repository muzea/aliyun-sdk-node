export interface FindOsVersionsResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 版本列表信息，包括当前页的版本列表以及总共符合条件的版本个数
     */
    OsVersionList: {
        /**
         * 符合条件的当前页的版本列表
         */
        Items: {
            /**
             * 版本状态
             * @example `PUBLISHED`
             */
            Status: string;
            /**
             * 版本创建时间戳
             * @example `16754300000`
             */
            GmtCreateTimestamp: number;
            /**
             * 设备型号ID
             * @example `123`
             */
            DeviceModelId: string;
            /**
             * 版本更新时间
             * @example `2018-04-24 12:23:45`
             */
            GmtModify: string;
            /**
             * 是否里程碑
             * @example `Y`
             */
            IsMilestone: string;
            /**
             * 版本备注
             * @example `测试`
             */
            Remark: string;
            /**
             * 系统版本号
             * @example `2.0.1-R-20180506.0824`
             */
            SystemVersion: string;
            /**
             * 状态名
             * @example `已发布`
             */
            StatusName: string;
            /**
             * 是否强制重启
             * @example `N`
             */
            IsForceReboot: string;
            /**
             * 机型名
             * @example `DM1`
             */
            DeviceModelName: string;
            /**
             * 是否静默升级
             * @example `N`
             */
            IsSilentUpgrade: string;
            /**
             * 版本更新时间戳
             * @example `16754300000`
             */
            GmtModifyTimestamp: number;
            /**
             * 是否夜间强制升级
             * @example `N`
             */
            IsForceNightUpgrade: string;
            /**
             * 版本创建时间
             * @example `2018-04-24 12:23:45`
             */
            GmtCreate: string;
            /**
             * 是否强制升级
             * @example `N`
             */
            IsForceUpgrade: string;
            /**
             * 版本ID
             * @example `12004`
             */
            Id: number;
        }[];
        /**
         * 符合条件的总记录数，方便调用方计算总页数
         * @example `1000`
         */
        TotalCount: number;
    };
}
