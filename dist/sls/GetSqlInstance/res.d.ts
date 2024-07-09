export type GetSqlInstanceResponse = {
    /**
     * 统一为group1，内部参数，用户无需关注。
     * @example `group1`
     */
    name: string;
    /**
     * 独享sql能使用的最大CU。CU（ComputeUnit）是 SQL 独享版运行过程中可以并行使用的计算核数。
     * @example `2`
     */
    cu: number;
    /**
     * 创建SQL独享版配置的时间。Unix时间戳。
     * @example `1710230272。Unix时间戳。`
     */
    createTime: number;
    /**
     * 更新SQL独享版配置的时间。Unix时间戳。
     * @example `1710230272`
     */
    updateTime: number;
    /**
     * 是否为Project默认开启SQL独享版。 如果为true，当前Project下的所有查询和分析操作（包括告警、仪表盘等），都使用SQL独享版。
     * @example `true`
     */
    useAsDefault: boolean;
}[];
