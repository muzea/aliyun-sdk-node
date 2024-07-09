export interface ListQuotasResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 资源配额列表。
     */
    Quotas: {
        /**
         * 资源配额类型，可能值：
         * - PAI：表示MaxCompute的GPU资源组集群。
         * @example `PAI`
         */
        QuotaType: string;
        /**
         * 付费模式，可能值：
         * - isolate：预付费。
         * - share：后付费。
         * @example `isolate`
         */
        Mode: string;
        /**
         * 产品名，可能值：
         * - PAI_isolate：pai预付费资源组（pai cpu）。
         * - PAI_share：pai后付费资源组（pai gpu）。
         * @example `PAI_share`
         */
        ProductCode: string;
        /**
         * 配额名称。
         * @example `quota-name`
         */
        Name: string;
        /**
         * 规格描述列表。
         * @example `{\"cu\":\"11500\",\"minCu\":\"2300\",\"parentId\":\"0\"}`
         */
        Specs: {
            /**
             * 规格名。
             * @example `cu`
             */
            Name: string;
            /**
             * 规格值。
             * @example `11500`
             */
            Value: string;
            /**
             * 类型，可为空。
             * @example `string`
             */
            Type: string;
        }[];
        /**
         * 配额的ID。
         * @example `1828233`
         */
        Id: string;
        /**
         * 资源配额别名。
         * @example `默认Quota。`
         */
        DisplayName: string;
    }[];
    /**
     * 符合过滤条件的资源配额数量。
     * @example `1`
     */
    TotalCount: number;
}
