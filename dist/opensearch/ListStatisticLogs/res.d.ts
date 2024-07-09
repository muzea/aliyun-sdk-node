export interface ListStatisticLogsResponse {
    /**
     * 数据总条数
     * @example `1`
     */
    totalCount: number;
    /**
     * 请求ID
     * @example `F76ACE3D-E510-EE2C-B7B1-39B3136A61EE`
     */
    requestId: string;
    /**
     * 结果数据，参考：
     * - [热词榜单](~~421248~~)
     * @example `[]`
     */
    result: any[];
}
