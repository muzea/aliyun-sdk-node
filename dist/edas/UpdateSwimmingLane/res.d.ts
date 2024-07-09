export interface UpdateSwimmingLaneResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     *  请求ID。
     * @example `6CB46AEA-309C-5041-9EC7-FCF4478F****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 命名空间ID。
         * @example `cn-beijing:qa`
         */
        NamespaceId: string;
        /**
         * 泳道组ID。
         * @example `171`
         */
        GroupId: number;
        /**
         * 泳道规则。
         * @example `[{\"condition\":\"AND\",\"enable\":true,\"path\":\"/traffictest\",\"priority\":1,\"restItems\":[{\"cond\":\"==\",\"datum\":\"testheadervalue\",\"name\":\"testheader\",\"operator\":\"rawvalue\",\"type\":\"header\",\"value\":\"testheadervalue\"}]}]"`
         */
        EntryRule: string;
        /**
         * 泳道标签。
         * @example `2cb6b8a`
         */
        Tag: string;
        /**
         * 泳道名称。
         * @example `test-swimlane`
         */
        Name: string;
        /**
         * 泳道ID。
         * @example `321`
         */
        Id: number;
        /**
         * 流控泳道涉及应用关联关系列表。
         */
        SwimmingLaneAppRelationShipList: {
            /**
             * 应用名称。
             * @example `test-app`
             */
            AppName: string;
            /**
             * 关联规则。
             * @example `dubbo`
             */
            Rules: string;
            /**
             * 泳道ID。
             * @example `321`
             */
            LaneId: number;
            /**
             * 应用ID。
             * @example `476d26d9-b54c-40b8-8af9-d898cdc2****`
             */
            AppId: string;
        }[];
    };
}
