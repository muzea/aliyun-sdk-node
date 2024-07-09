export interface InsertSwimmingLaneResponse {
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
     * 请求ID。
     * @example `75972A87-5682-5277-ADA7-DA2A01BE****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 命名空间ID。
         * @example `cn-beijing:test`
         */
        NamespaceId: string;
        /**
         * 泳道组ID。
         * @example `95`
         */
        GroupId: number;
        /**
         * 泳道流控规则。
         * priority：泳道规则优先级，取值范围：1～100。
         * path：泳道规则匹配的路径。
         * restItems：条件匹配规则列表。
         * condition：条件匹配类型。
         *  - AND：同时满足条件。
         *  - OR：满足任一条件。
         * restItems.type：规则类型。
         * 可选值范围：
         * - header：按请求Header进行匹配。
         * - cookie：按请求cookie进行匹配。
         * - param：按请求参数进行匹配。
         * restItems.name：规则匹配的键。
         * restItems.value：规则匹配的值。
         * restItems.cond：规则匹配的条件。
         * 可取值范围：
         * - "=="：等于。
         * - "!="：不等于。
         * - ">"：大于。
         * - "<"：小于。
         * - ">="：大于等于。
         * - "<="：小于等于。
         * - "in"：在可选值内。
         * restItems.operator：值的类型。
         * 可取值范围：
         * - rawvalue：取原值。
         * - mod：取模。
         * - list：列表取值。
         * @example `[{\"condition\":\"AND\",\"enable\":false,\"path\":\"/traffic\",\"priority\":1,\"restItems\":[{\"cond\":\"==\",\"datum\":\"testvalue\",\"name\":\"testheader\",\"operator\":\"rawvalue\",\"type\":\"header\",\"value\":\"testvalue\"}]}]`
         */
        EntryRule: string;
        /**
         * 泳道关联应用列表。
         * @example `[{"appId":"9dcba109-ee9f-4e67-8916-41
        *******"}]`
         */
        AppInfos: string;
        /**
         * 流控泳道标签。
         * @example `8202e09`
         */
        Tag: string;
        /**
         * 泳道名称。
         * @example `test1`
         */
        Name: string;
        /**
         * 泳道ID。
         * @example `88`
         */
        Id: number;
        /**
         * 泳道涉及应用关联关系列表。
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
             * @example `88`
             */
            LaneId: number;
            /**
             * 应用ID。
             * @example `bd170895-096c-4944-9007-d4582c77****`
             */
            AppId: string;
        }[];
    };
}
