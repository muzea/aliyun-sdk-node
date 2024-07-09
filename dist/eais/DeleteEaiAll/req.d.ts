export interface DeleteEaiAllRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * EAIS实例ID。
     * @example `eais-hza1ahi0uuw0re33****`
     */
    "ElasticAcceleratedInstanceId": string;
    /**
     * 与EAIS实例绑定的ECS或ECI实例ID。
     * @example `i-bp1fvhi60e1zizsp****`
     */
    "ClientInstanceId"?: string;
}
