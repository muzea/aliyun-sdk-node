export interface DescribeKeyPairsResponse {
    /**
     * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
     * @example `FFbc8N4E1iOlcSxC+8boa0HHH2LKWbggYUinyrZWvtS1oTrMYCg1HuMLGuftj0****`
     */
    NextToken: string;
    /**
     * 返回结果对象列表。
     */
    Data: {
        /**
         * ADB密钥对的ID。
         * @example `kp-6v2q33ae4tw3a****`
         */
        KeyPairId: string;
        /**
         * ADB密钥对名称。
         * @example `testKeyPairName`
         */
        KeyPairName: string;
        /**
         * 创建时间。
         * @example `2022-10-11T08:53:32Z`
         */
        GmtCreated: string;
    }[];
    /**
     * 总条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `565FB06A-AE04-5AD0-8A32-5BA92CA5****`
     */
    RequestId: string;
}
