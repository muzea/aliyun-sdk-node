export interface FindPrepublishesByParentIdResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 查询预发布结果列表
     */
    PrepublishList: {
        /**
         * 返回记录列表
         */
        Items: {
            /**
             * 创建时间戳
             * @example `165465000000`
             */
            GmtCreateTimestamp: number;
            /**
             * 设备型号ID
             * @example `12`
             */
            DeviceModelId: string;
            /**
             * 修改时间
             * @example `2018-01-01 00:01:00`
             */
            GmtModify: string;
            /**
             * 预发布是否为启用状态
             * @example `Y`
             */
            IsActive: string;
            /**
             * 版本ID
             * @example `1`
             */
            VersionId: string;
            /**
             * 预发布允许设备数
             * @example `1000`
             */
            BarrierCount: string;
            /**
             * 是否为总量预发布
             * @example `N`
             */
            IsTotalPrepublish: string;
            /**
             * 更新时间戳
             * @example `165465000000`
             */
            GmtModifyTimestamp: number;
            /**
             * 父预发布ID，为0表示该预发布为父预发布。
             * @example `1`
             */
            ParentId: string;
            /**
             * 创建时间
             * @example `2018-01-01 00:00:00`
             */
            GmtCreate: string;
            /**
             * 预发布名
             * @example `第一次预发布`
             */
            Name: string;
            /**
             * ID
             * @example `2`
             */
            Id: number;
            /**
             * 版本类型，取值有：FOTA 系统版本，APP 应用版本。
             * @example `FOTA`
             */
            VersionType: string;
        }[];
        /**
         * 符合条件的记录总数
         * @example `30`
         */
        TotalCount: number;
    };
}
