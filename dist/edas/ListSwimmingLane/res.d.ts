export interface ListSwimmingLaneResponse {
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
     * @example `C2CDBBF9-9C9A-5AA1-9F39-094ADEB3****`
     */
    RequestId: string;
    /**
     * 响应数据。
     */
    Data: {
        /**
         * 微服务空间。
         * @example `cn-hangzhou:pre2`
         */
        NamespaceId: string;
        /**
         * 泳道组ID。
         * @example `156`
         */
        GroupId: number;
        /**
         * 预期标签。
         * @example `d0ad1052`
         */
        ScenarioSign: string;
        /**
         * 条件列表。
         * @example `[{\"condition\":\"AND\",\"enable\":true,\"path\":\"/\",\"priority\":1,\"restItems\":[{\"cond\":\"==\",\"datum\":\"value\",\"name\":\"tags\",\"operator\":\"rawvalue\",\"type\":\"header\",\"value\":\"value\"}]}]`
         */
        EntryRule: string;
        /**
         * 标签。
         * @example `2cb6b8a`
         */
        Tag: string;
        /**
         * 流控规则是否开启。
         * @example `true`
         */
        EnableRules: boolean;
        /**
         * 泳道名称。
         * @example `name`
         */
        Name: string;
        /**
         * 流控泳道ID。
         * @example `348`
         */
        Id: number;
        /**
         * 流控泳道涉及应用列表。
         */
        SwimmingLaneAppRelationShipList: {
            /**
             * 应用名称。
             * @example `prod-app-58846`
             */
            AppName: string;
            /**
             * 关联规则。
             * @example `""`
             */
            Rules: string;
            /**
             * 泳道ID。
             * @example `348`
             */
            LaneId: number;
            /**
             * 应用ID。
             * @example `3b615783-01f1-4569-baa3-cb71bdb6****`
             */
            AppId: string;
            /**
             * 补充信息。
             * @example `edas-canary`
             */
            Extra: string;
        }[];
    }[];
}
