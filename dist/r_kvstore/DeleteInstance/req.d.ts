export interface DeleteInstanceRequest {
    /**
     * 待释放的实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 待释放的实例所属的分布式实例ID，本参数仅适用于中国站。
     * @example `gr-bp14rkqrhac****`
     */
    "GlobalInstanceId"?: string;
}
