export interface GetFunctionOnDemandConfigResponse {
    /**
     * 资源描述。
     * @example `12345#servierName#qualifier#functionName`
     */
    resource: string;
    /**
     * 最大实例数量。
     * @example `10`
     */
    maximumInstanceCount: number;
}
