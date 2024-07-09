export interface DescribeApiGroupRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    "GroupId": string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `appname`
         */
        Key: string;
        /**
         * 标签值
         * @example `test_app`
         */
        Value: string;
    }[];
}
