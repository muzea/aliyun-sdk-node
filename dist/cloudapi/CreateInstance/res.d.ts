export interface CreateInstanceResponse {
    /**
     * 标签是否存在，取值为：-**true**：存在-**false**：不存在
     * @example `True`
     */
    TagStatus: boolean;
    /**
     * 实例ID
     * @example `apigateway-hz-b3c5dadd5***`
     */
    InstanceId: string;
    /**
     * 请求ID
     * @example `CEB6EC62-B6C7-5082-A45A-45A204724AC2`
     */
    RequestId: string;
}
