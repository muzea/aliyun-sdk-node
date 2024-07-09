export interface DescribeInstanceKeywordsResponse {
    /**
     * 保留关键字的类型，即表示是账号名或数据库名的保留关键字。
     * @example `account`
     */
    Key: string;
    /**
     * 请求ID。
     * @example `1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC`
     */
    RequestId: string;
    Words: {
        /**
         * 保留的关键字列表。
         */
        word: string[];
    };
}
