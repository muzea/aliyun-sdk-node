export interface AttachEaiRequest {
    /**
     * 实例所属的地域ID。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * EAIS实例ID。
     * @example `eais-sz8t15a7gt7z7j7i****`
     */
    "ElasticAcceleratedInstanceId": string;
    /**
     * 待绑定的ECS或ECI实例ID。
     * @example `i-wz93g6pyat2g7t7o****`
     */
    "ClientInstanceId": string;
}
