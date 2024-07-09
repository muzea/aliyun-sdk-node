export interface ListTagResourcesRequest {
    /**
     * 资源类型定义。取值：instance（实例）
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 资源ID，n 的取值范围为 [1, 50]
     */
    "ResourceId"?: string[];
    /**
     * 下一个查询开始的Token。
     * @example `153ba0bbb2be03f84eb48b699f0a4123`
     */
    "NextToken"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。N的取值范围为**1**~**20**。
         * - 不能以`aliyun`、`acs:`、`http://`或`https://`开头。
         * - 最多支持64个字符。
         * - 不允许传入空字符串。
         * @example `team`
         */
        Key: string;
        /**
         * Topic的标签值。**Key**和**Value**值必须同时输入或同时不输入。若同时输入表示根据Tag过滤符合条件的Topic，若不输入表示查询所有Topic。
         * - N的取值范围为1~20。
         * - 如果输入该值，取值允许为空字符串。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `tagValue`
         */
        Value: string;
    }[];
}
