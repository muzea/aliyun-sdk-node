export interface ListImageLabelsResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 镜像标签列表。
     */
    Labels: {
        /**
         * 标签的键。
         * @example `system.chipType`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `GPU`
         */
        Value: string;
    }[];
    /**
     * 符合过滤条件的镜像标签列表数量。
     * @example `2`
     */
    TotalCount: number;
}
