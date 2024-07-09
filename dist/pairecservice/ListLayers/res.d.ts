export interface ListLayersResponse {
    /**
     * Id of the request
     * @example `518C64F6-DFF7-11ED-85B0-00163E14B3D1`
     */
    RequestId: string;
    /**
     * 列表内元素总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 层列表。
     */
    Layers: {
        /**
         * 层ID。
         * @example `3`
         */
        LayerId: string;
        /**
         * 实验室ID。
         * @example `3`
         */
        LaboratoryId: string;
        /**
         * 场景ID。
         * @example `3`
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
    }[];
}
