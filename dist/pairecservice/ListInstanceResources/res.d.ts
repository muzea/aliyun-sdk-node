export interface ListInstanceResourcesResponse {
    /**
     * 请求ID。
     * @example `9763624B-5FBB-5E3A-9193-B1ADB554CEAE`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 资源对象的列表。
     */
    Resources: {
        /**
         * 资源ID。
         * @example `reso-2s416t***
        `
         */
        ResourceId: string;
        /**
         * 资源类别
         * - DataManagement
         * - Engine
         * - Monitor
         * @example `DataManagement`
         */
        Category: string;
        /**
         * 资源分组。
         * 当资源类别为DataManagement时，资源分组有：
         * - storage
         * - modelpipeline
         * - datastorage
         * - modeltrain
         * 当资源类别为Engine时，资源分组有：
         * - feature
         * - predict
         * - recall
         * - recengine
         * 当资源类别为Monitor时，资源分组有：
         * - logs
         * - logsback
         * - coldstart
         * - deploy
         * @example `storage`
         */
        Group: string;
        /**
         * 资源类型
         * - Hologres
         * - EAS
         * - BE
         * - Rec
         * - Platform
         * - SLS
         * - DataHub
         * - Kafka
         * - Flinkvvp
         * - ACR
         * - OSS
         * - DataWorks
         * - PAI
         * - MaxCompute
         * - GraphCompute
         * - Redis
         * @example `OSS`
         */
        Type: string;
        /**
         * 资源地址。
         * @example `bucket-test-123`
         */
        Uri: string;
        /**
         * 资源的配置信息。
         * @example `{}`
         */
        Config: string;
        /**
         * 创建时间。
         * @example `2020-10-13 17:34:52
        `
         */
        GmtCreateAt: string;
        /**
         * 更新时间。
         * @example `2020-10-13 17:34:52
        `
         */
        GmtModifiedAt: string;
    }[];
}
