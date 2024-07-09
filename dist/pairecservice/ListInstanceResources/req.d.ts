export interface ListInstanceResourcesRequest {
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
    /**
     * 资源类别
     * - DataManagement
     * - Engine
     * - Monitor
     * @example `DataManagement`
     */
    "Category"?: string;
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
    "Group"?: string;
    /**
     * 资源类型过滤。
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
    "Type"?: string;
}
