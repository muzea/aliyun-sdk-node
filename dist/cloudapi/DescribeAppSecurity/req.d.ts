export interface DescribeAppSecurityRequest {
    /**
     * App的编号
     * @example `20112314518278`
     */
    "AppId": number;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `app`
         */
        Key: string;
        /**
         * 标签值
         * @example `123`
         */
        Value: string;
    }[];
}
