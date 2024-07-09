export interface ListScenesResponse {
    /**
     * Id of the request
     * @example `B8987BF7-6028-5B17-80E0-251B7BD67BBA`
     */
    RequestId: string;
    /**
     * 列表内元素数量总和。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 场景列表。
     */
    Scenes: {
        /**
         * 场景ID。
         * @example `3`
         */
        SceneId: string;
        /**
         * 场景名称。
         * @example `scene1`
         */
        Name: string;
        /**
         * 场景描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 流量列表。
         */
        Flows: {
            /**
             * 流量名称。
             * @example `流量1`
             */
            FlowName: string;
            /**
             * 流量编码。
             * @example `liuliang1`
             */
            FlowCode: string;
        }[];
    }[];
}
