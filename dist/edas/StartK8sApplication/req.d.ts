export interface StartK8sApplicationRequest {
    /**
     * 启动的应用实例数。
     * @example `2`
     */
    "Replicas"?: number;
    /**
     * 变更流程超时时间，单位秒，取值范围1~1800秒，不填默认值为600秒。
     * @example `60`
     */
    "Timeout"?: number;
    /**
     * 应用ID，可通过调用ListApplication接口来获取，详情请参见[ListApplication](~~149390~~)。
     * @example `93fdd228-*******-ed2ae98de18d`
     */
    "AppId": string;
}
