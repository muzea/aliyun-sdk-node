export interface GetInstanceResourceResponse {
    /**
     * 请求ID。
     * @example `D75C43DC-3D3A-5CC8-9AAC-8C77306C433B`
     */
    RequestId: string;
    /**
     * 资源ID。
     * @example `reso-2s416t***`
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
     * @example `2020-10-13 17:34:52`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2020-10-13 17:34:52`
     */
    GmtModifiedTime: string;
}
