export interface ListTagOptionsResponse {
    /**
     * 请求ID。
     * @example `37C9C1DF-EFFC-5D8A-80D0-8657B1F3****`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 标签选项详情列表。
     */
    TagOptionDetails: {
        /**
         * 是否启用。取值：
         * - true：启用。
         * - false：禁用。
         * @example `true`
         */
        Active: boolean;
        /**
         * 标签选项ID。
         * @example `tag-bp1r3mxq3t****`
         */
        TagOptionId: string;
        /**
         * 标签选项键。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签选项值。
         * @example `v1`
         */
        Value: string;
        /**
         * 标签选项归属人云账号ID。
         * @example `133413081827****
        `
         */
        Owner: string;
    }[];
}
