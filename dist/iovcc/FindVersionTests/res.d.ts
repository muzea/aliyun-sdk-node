export interface FindVersionTestsResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 版本测试的查询结果
     */
    VersionTestList: {
        /**
         * 返回记录列表
         */
        Items: {
            /**
             * 创建时间戳
             * @example `1685450000`
             */
            GmtCreateTimestamp: number;
            /**
             * 修改时间
             * @example `2018-01-01 00:01:00`
             */
            GmtModify: string;
            /**
             * 版本ID
             * @example `1`
             */
            VersionId: string;
            /**
             * 修改时间戳
             * @example `1685450000`
             */
            GmtModifyTimestamp: number;
            /**
             * 发送消息失败数
             * @example `0`
             */
            FailedCount: string;
            /**
             * 测试设备分组ID
             * @example `1`
             */
            DeviceGroupId: string;
            /**
             * 跳过消息数
             * @example `0`
             */
            SkippedCount: string;
            /**
             * 测试描述
             * @example `测试描述`
             */
            Description: string;
            /**
             * 发送消息成功数
             * @example `100`
             */
            SucceededCount: string;
            /**
             * 测试设备分组名称
             * @example `测试分组`
             */
            DeviceGroupName: string;
            /**
             * 创建时间
             * @example `2018-01-01 00:00:00`
             */
            GmtCreate: string;
            /**
             * 测试名
             * @example `第一次测试`
             */
            Name: string;
            /**
             * 测试ID
             * @example `1`
             */
            Id: number;
            /**
             * 版本类型，取值有： FOTA 系统版本， APP 应用版本
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
