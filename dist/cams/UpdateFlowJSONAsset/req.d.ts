export interface UpdateFlowJSONAssetRequest {
    /**
     * Flow ID。
     * @example `92675332812643****`
     */
    "FlowId": string;
    /**
     * 按照facebook flow规则生成的JSON文件。
     * @example `https://aliyun/json.json`
     */
    "FilePath": string;
    /**
     * ISV子客户的SpaceId/实例ID。
     * @example `9399393`
     */
    "CustSpaceId"?: string;
}
