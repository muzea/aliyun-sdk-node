export interface DescribeCustomizedFilterResponse {
    /**
     * 自定义过滤条件详情
     */
    CustomizedFilter: {
        /**
         * 创建时间的时间戳。
         * @example `123543500000`
         */
        GmtCreateTimestamp: number;
        /**
         * 修改时间
         * @example `2018-01-01 00:01:00`
         */
        GmtModify: string;
        /**
         * 值的比较类型。其中，
         * - **NUMBER**：按数字比较
         * - **STRING**：按字符串比较
         * @example `NUMBER`
         */
        ValueCompareType: string;
        /**
         * 所属版本ID
         * @example `1`
         */
        VersionId: number;
        /**
         * 修改时间的时间戳。
         * @example `123543500000`
         */
        GmtModifyTimestamp: number;
        /**
         * 过滤条件值
         * @example `1,5`
         */
        Value: string;
        /**
         * 过滤条件的输入类型，目前仅支持**WRITE**，表示手写输入。
         * @example `WRITE`
         */
        ValueType: string;
        /**
         * 创建时间
         * @example `2018-01-01 00:00:00`
         */
        GmtCreate: string;
        /**
         * 比较的黑白名单类型。BLACK：黑名单，WHITE：白名单。
         * @example `BLACK`
         */
        BlackWhiteType: string;
        /**
         * 过滤条件名
         * @example `AnotherFilter`
         */
        Name: string;
        /**
         * 所属版本类型：FOTA | APP。
         * @example `FOTA`
         */
        VersionType: string;
        /**
         * 自定义过滤条件ID
         * @example `1`
         */
        Id: number;
    };
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
}
