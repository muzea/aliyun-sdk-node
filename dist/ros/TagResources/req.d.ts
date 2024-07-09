export interface TagResourcesRequest {
    /**
     * 标签所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。取值：
     * - stack：资源栈。
     * - stackgroup：资源栈组。
     * - template：模板。
     * - templatescratch：资源场景。
     * @example `stack`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * @example `7fee80e1-8c48-4c2f-8300-0f6dc40b****`
     */
    "ResourceId": string[];
    /**
     * 资源的标签。最多支持指定20个标签。
     */
    "Tag": {
        /**
         * 资源的标签键。最多支持指定20个标签键。
         * 长度不超过128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持指定20个标签值。
         * 长度不超过128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
