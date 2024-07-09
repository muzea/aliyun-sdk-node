export interface DescribeSiteMonitorLogResponse {
    /**
     * 查询下一页使用的Token。
     * @example `IWBjqMYSy0is7zSMGu16****`
     */
    NextToken: string;
    /**
     * 一次性探测任务的探测日志。
     * @example `[{\"redirectCount\":0.0,\"SSLConnectTime\":0.0,\"pingDetail\":\"\",\"HTTPConnectTime\":0.0,\"isp\":\"465\",\"errorCode\":611,\"ispCN\":\"阿里巴巴\",\"resolution\":\"\",\"areaEN\":\"HuaBei\",\"taskEndTimestamp\":1638422475687,\"targetIspEN\":\"\",\"TotalTime\":1.0,\"taskStartTimestamp\":1638422474389,\"countryCN\":\"中国\",\"provinceEN\":\"Beijing\",\"countryEN\":\"China\",\"targetCityEN\":\"\",\"curlConnectTime\":0.0,\"ips\":\"\",\"route\":\"\",\"tcpConnectTime\":0.0,\"cityEN\":\"Beijing\",\"HTTPDownloadSpeed\":0.0,\"HTTPDownloadTime\":0.0,\"HTTPResponseCode\":0.0,\"areaCN\":\"华北\",\"city\":\"546\",\"expection\":\"\",\"suorceIp\":\"192.168.XX.XX \",\"ispEN\":\"Alibaba\",\"HTTPDNSTime\":1.0,\"targetIsp\":\"\",\"curlStarttransferTime\":0.0,\"provinceCN\":\"北京市\",\"timestamp\":1638422474000,\"redirectTime\":0.0,\"targetCity\":\"\", \"expect\":\"\",\"HTTPDownloadSize\":0.0,\"localDns\":\"192.168.XX.XX\",\"cityCN\":\"北京市\",\"taskId\":\"afa5c3ce-f944-4363-9edb-ce919a29****\"}]`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `67F646FA-ED8A-58C2-B461-451DB52C8B14`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
}
