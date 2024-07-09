export interface InvokeFlowRequest {
    /**
     * 需要运行的工作流ID
     * @example `lc-uf65sg10vjws7o`
     */
    "FlowId": string;
    /**
     * 该模板所需要的参数，为 JSON 字符串。
     * @example `{"ParamA": "test"}`
     */
    "Parameters"?: string;
    /**
     * 该工作流的触发器所需要的入参，为 JSON 字符串。
     * @example `{"body": {"test": true}}`
     */
    "Data"?: string;
    /**
     * 用于幂等，避免重复运行。
     * @example `abcdefghijklmn`
     */
    "ClientToken"?: string;
}
