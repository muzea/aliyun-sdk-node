export interface DescribeInstanceKeywordsRequest {
    /**
     * 保留关键字的类型，即表示是账号名或数据库名的保留关键字。取值：
     * - **account**
     * - **database**
     * > 该参数为必填参数。
     * @example `account`
     */
    "Key"?: string;
}
