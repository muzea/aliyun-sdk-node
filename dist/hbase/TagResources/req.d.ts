export interface TagResourcesRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID列表，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `bds-bp15e022622fk0w1`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 标签的键。
         * > N表示传入第几个标签的键。例如：<ul>
         * <li>Tag.1.Key表示传入第一个标签的键。</li>
         * <li>Tag.2.Key表示传入第二个标签的键。</li></ul>
         * @example `key1`
         */
        Key: string;
        /**
         * 标签的值。
         * > N表示传入第几个标签的值。例如：<ul>
         * <li>Tag.1.Value表示传入第一个标签的值。</li>
         * <li>Tag.2.Value表示传入第二个标签的值。</li></ul>
         * @example `value1`
         */
        Value: string;
    }[];
}
