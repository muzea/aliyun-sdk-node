export interface DescribeVerifySchemeResponse {
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[服务端API返回码](~~85198~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0C5380A7-2032-5F7D-9614-1BF8B54D16CB`
     */
    RequestId: string;
    /**
     * 结构体。
     */
    SchemeQueryResultDTO: {
        /**
         * 在控制台创建方案号生成的密钥。
         * @example `ZDMARqPkyQzWVJjB/sB/+fCp5TA4lNsRnY7rEC+HfGsOIOk1Brj8UyXFW2RBYIWqLieCSo8ZypEaEj+h9rLd3FgpXAjGYDfmOperod6jPUUwFHhBObxK+HuKVoi2jOqN7aDOlyPyGcATyq3BDdlf922JmnFLT8Hvnu4qgzzCZk0LXWTb0XVPnm5/fHUGHEA2Q+aTrGkaWcHjmTDqQ7BtvrAIIcJJkCJu4i1aeU++/0EzGWap4mcb2VhKROBs****`
         */
        AppEncryptInfo: string;
    };
}
