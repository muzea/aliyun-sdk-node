export interface GetBlockChainInfoResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误消息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 返回唯一标识key对应的区块链元数据信息（JSON格式）。详情请参见下表blockChainInfo。
     * @example `{"blockChainInfo":{"chainName":"某公司业务链","blockHeight":48971,"transactionHash":"ea8752787f79be085d9ee244a1b9ed0deb198903a14b9b1a6800b20fbf0d****","iotId":"1BE0F46275B17147E7D2****","endorsementNames":"某公司,某某公司","timestamp":"1591676312000","blockHash":"d07bdaf2736c4d07bdaf2736e5faae508d77ceb82c0e9722a8bcca0e909e****","previousHash":"c4d07bdaf2736cc0ec0e909e60e5c21dc14d0eb823eb82f4f99791c4d07b****","dataHash":"21dc1288bcc0e2730ae486fa04fdeb828ae5c21dc128c525a655972e5faa****"}}`
     */
    Data: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
