export interface RestartK8sApplicationRequest {
    /**
     * 应用ID，可通过调用ListApplication接口来获取，详情请参见[ListApplication](~~149390~~)。
     * @example `93fdd228-********ed2ae98de18d`
     */
    "AppId": string;
    /**
     * 变更记录超时时间，单位：秒。
     * @example `60`
     */
    "Timeout"?: number;
}
