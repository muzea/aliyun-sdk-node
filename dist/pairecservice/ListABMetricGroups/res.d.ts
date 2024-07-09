export interface ListABMetricGroupsResponse {
    /**
     * 请求ID。
     * @example `E15A1443-7917-5BE0-AE70-25538ECF398D`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * AB指标组列表。
     */
    ABMetricGroups: {
        /**
         * 指标组ID。
         * @example `1`
         */
        ABMetricGroupId: string;
        /**
         * 指标组名称。
         * @example `visits`
         */
        Name: string;
        /**
         * 场景ID。
         * @example `1`
         */
        SceneId: string;
        /**
         * 指标组描述。
         * @example `访问量相关指标`
         */
        Description: string;
        /**
         * 负责人。
         * @example `2799614***`
         */
        Owner: string;
        /**
         * AB实验指标ID列表，逗号分隔。
         * @example `1,2`
         */
        ABMetricIds: string;
        /**
         * AB实验指标名称列表，逗号分隔。
         * @example `pv,uv`
         */
        ABMetricNames: string;
        /**
         * 是否为实时指标组。
         * @example `false`
         */
        Realtime: boolean;
    }[];
}
