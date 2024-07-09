export interface GetDoctorComputeSummaryRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 其日期和时间信息以 ISO 8601 格式表示， 例如：2023年1月1日为 2023-01-01。
     * @example `2023-01-01`
     */
    "DateTime": string;
    /**
     * 资源信息，用于过滤结果。
     */
    "ComponentInfo"?: {
        /**
         * 过滤资源的类型。取值：
         * - engine：通过引擎类型来过滤结果。
         * - queue：通过队列来过滤结果。
         * - cluster：展示整个集群结果。
         * 如果不填写，默认展示整个集群信息。
         * @example `engine`
         */
        ComponentType: string;
        /**
         * 根据ComponentType来设置特定过滤条件，如ComponentType为queue，就可以指定特定队列名称来获取特定队列资源使用情况。
         * @example `MAPREDUCE`
         */
        ComponentName: string;
    };
}
