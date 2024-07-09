export interface ListSamplesRequest {
    /**
     * 指定的实例ID
     * @example `airec-cn-shdjkgkeog`
     */
    "instanceId": string;
    /**
     * 样本id
     * @example `Sample1`
     */
    "sampleId"?: string;
    /**
     * 分页，页码
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页，大小
     * @example `10`
     */
    "size"?: number;
}
