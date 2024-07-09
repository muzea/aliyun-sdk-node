export interface DescribeAvailableEslModelsRequest {
    /**
     * 设备模型id
     * @example `6cd23870539e43759e65eef5b6808a49`
     */
    "ModelId"?: string;
    /**
     * 模型名称
     * @example `aa_ssaaa`
     */
    "Name"?: string;
    /**
     * 分页号
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小
     * @example `10`
     */
    "PageSize"?: number;
}
