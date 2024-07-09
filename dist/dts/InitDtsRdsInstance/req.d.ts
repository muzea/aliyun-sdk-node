export interface InitDtsRdsInstanceRequest {
    /**
     * 全球数据多活集群所属的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 单元节点的实例类型，取值：
     * - **RDS**：RDS MySQL实例。
     * - **CEN**：通过云企业网CEN接入的自建MySQL数据库。
     * @example `RDS`
     */
    "EndpointInstanceType"?: string;
    /**
     * 如单元节点为RDS MySQL实例，则您需要传入RDS MySQL实例所属地域。
     * > - 您还需要传入参数**EndpointInstanceId**。
     * - 本参数与**EndpointCenId**，两者必须传入其一。
     * @example `cn-hangzhou`
     */
    "EndpointRegion"?: string;
    /**
     * 如单元节点为RDS MySQL实例，则您需要传入RDS MySQL实例ID。
     * > - 您还需要传入参数**EndpointRegion**。
     * - 本参数与**EndpointCenId**，两者必须传入其一。
     * @example `rm-bp1162kryivb8****`
     */
    "EndpointInstanceId"?: string;
    /**
     * 如单元节点为云企业网CEN接入的自建MySQL，则您需要传入云企业网CEN的实例ID。
     * > 本参数与RDS MySQL相关参数（**EndpointRegion**、**EndpointInstanceId**），两组参数必须传入其中一组。
     * @example `cen-9kqshqum*******`
     */
    "EndpointCenId"?: string;
    /**
     * 同步任务实例ID。
     * @example `dtszvxa4qmot6p****`
     */
    "DtsInstanceId"?: string;
}
