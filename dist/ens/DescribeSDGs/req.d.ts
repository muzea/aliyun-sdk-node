export interface DescribeSDGsRequest {
    /**
     * 指定查询若干SDG，默认查询全部。
     */
    "SDGIds"?: string[];
    /**
     * 指定查询若干Instance，默认查询全部。
     * > 若指定了**SDGIds**，同时指定了**InstanceIds**，则查询结果为上述两个条件的交集。
     */
    "InstanceIds"?: string[];
}
