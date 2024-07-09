export interface DeleteInterceptionTargetRequest {
    /**
     * 待删除的网络对象id列表，可通过接口进行查询: [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~)。
     * @example `1,11,111`
     */
    "TargetIds": string;
}
