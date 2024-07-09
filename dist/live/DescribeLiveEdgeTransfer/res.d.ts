export interface DescribeLiveEdgeTransferResponse {
    /**
     * 获取转推目标地址的HTTPDNS接口。
     * @example `http://developer.aliyundoc.com/****`
     */
    HttpDns: string;
    /**
     * 直播流所属应用名称。
     * @example `liveApp****`
     */
    AppName: string;
    /**
     * 请求ID。
     * @example `53FCB985-C67C-467B-B2B3-398430A21E14`
     */
    RequestId: string;
    /**
     * 推流参数是否透传。取值：
     * - **yes**：推流参数透传。
     * - **no**：推流参数不透传。
     * @example `yes`
     */
    TransferArgs: string;
    /**
     * 推流名称。
     * @example `liveStream****`
     */
    StreamName: string;
    /**
     * 转推域名列表，多个用英文逗号（,）分隔。
     * @example `learn.aliyundoc.com,guide.aliyundoc.com`
     */
    TargetDomainList: string;
    /**
     * 推流域名。
     * @example `demo.aliyundoc.com`
     */
    DomainName: string;
}
