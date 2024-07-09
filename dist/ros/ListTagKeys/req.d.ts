export interface ListTagKeysRequest {
    /**
     * 标签键所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。取值：
     * - stack：资源栈。
     * - stackgroup：资源栈组。
     * - template：模板。
     * - templatescratch：资源场景。
     * @example `stack`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0*****`
     */
    "NextToken"?: string;
}
