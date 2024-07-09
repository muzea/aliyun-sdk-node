export interface GetLayerResponse {
    /**
     * Id of the request
     * @example `EE97D06A-2AA0-5AD9-B6CF-8A267924D691`
     */
    RequestId: string;
    /**
     * 实验室ID。
     * @example `3`
     */
    LaboratoryId: string;
    /**
     * 场景ID。
     * @example `4`
     */
    SceneId: string;
    /**
     * 层名称。
     * @example `layer1`
     */
    Name: string;
    /**
     * 层描述。
     * @example `This is a test.`
     */
    Description: string;
    ResidualFlow: number;
    GmtCreateTime: string;
}
