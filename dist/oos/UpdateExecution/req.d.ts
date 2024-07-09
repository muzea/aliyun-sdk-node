export interface UpdateExecutionRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 执行ID。
     * @example `exec-c223xxxxxxxxxxxxxxxx`
     */
    "ExecutionId": string;
    /**
     * 参数信息
     * @example `{\"endDate\": \"2022-04-13T03:31:20Z\", \"Status\": \"Stopped\"}`
     */
    "Parameters"?: string;
    /**
     * 幂等token。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 执行的描述。
     * @example `Execution description`
     */
    "Description"?: string;
    /**
     * 标签。
     * @example `{"k1": "v1", "k2": "v2"}`
     */
    "Tags"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m*****`
     */
    "ResourceGroupId"?: string;
}
