export interface InitComputingResourceRequest {
    /**
     * 实例id
     * @example `airec-test`
     */
    "instanceId"?: string;
    /**
     * 资源类型，本期固定为：MAX_COMPUTE
     * @example `是`
     */
    "type"?: string;
    /**
     * type=MAX_COMPUTE则为mc工作空间名称
     * @example `MAX_COMPUTE`
     */
    "key"?: string;
}
