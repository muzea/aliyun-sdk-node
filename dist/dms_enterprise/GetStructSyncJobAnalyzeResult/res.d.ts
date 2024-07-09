export interface GetStructSyncJobAnalyzeResultResponse {
    /**
     * 请求ID。
     * @example `1810E635-A2D7-428B-BAA9-85DAEB9B1A77`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 结构同步任务分析结果。
     */
    StructSyncJobAnalyzeResult: {
        /**
         * 统计结果列表。
         */
        SummaryList: {
            /**
             * 比较类型，取值：
             * - **CREATE_TABLE**：创建表
             * - **ALTER_TABLE**：修改表
             * - **EQUAL_TABLE**：相同的表
             * - **PASS_TABLE**：跳过的表
             * - **NOT_COMPARE**：待分析的表
             * @example `CREATE_TABLE`
             */
            CompareType: string;
            /**
             * 表的数量。
             * @example `1`
             */
            Count: number;
        }[];
        /**
         * 分析结果详情列表。
         */
        ResultList: {
            /**
             * 源表表名。
             * @example `helloz_bak`
             */
            SourceTableName: string;
            /**
             * 目标表表名。
             * @example `helloz_bak`
             */
            TargetTableName: string;
            /**
             * SQL脚本。
             * @example `/* origin table[helloz_bak] exist, target table[helloz_bak] not exist *​/\n/* generate [helloz_bak] create table sql *​/\ncreate table `helloz_bak`(\n\t`id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',\n\t`gmt_create` datetime NOT NULL COMMENT '创建时间',\n\t`gmt_modified` datetime NOT NULL COMMENT '修改时间',\n\t`num` int(11) NOT NULL COMMENT '编号',\n\t`addr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '地址',\n\tPRIMARY KEY (`id`)\n)\nDEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci\nCOMMENT='test'\n\n;`
             */
            Script: string;
        }[];
    };
}
