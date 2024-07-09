export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `C9025B15-16CC-53FB-B7B1-7295AA010EBD`
     */
    RequestId: string;
    /**
     * 资源总数
     * @example `2`
     */
    TotalCount: number;
    /**
     * 资源和标签的关系列表。
     */
    TagResources: {
        /**
         * 资源类型定义，可取的值有：
         * - ALIYUN::LC::FLOW：逻辑编排工作流
         * @example `ALIYUN::LC::FLOW`
         */
        ResourceType: string;
        /**
         * 标签值
         * @example `testvalue`
         */
        TagValue: string;
        /**
         * 资源ID
         * @example `lc-0xiisfk685vhfk`
         */
        ResourceId: string;
        /**
         * 标签键
         * @example `testkey`
         */
        TagKey: string;
    }[];
}
