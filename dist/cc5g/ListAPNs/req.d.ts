export interface ListAPNsRequest {
    /**
     * 云连接器实例所在的地域ID，仅取值：cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 运营商接入点APN ID。
     * @example `CMWAP`
     */
    "APN"?: string;
    /**
     * 运营商ID
     * @example `unicom`
     */
    "ISP"?: string;
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。
     * > 第一次调用不用填写，会在返回结果中包含第二次调用时用的NextToken，之后每次调用返回结果中都有下一次调用时的NextToken。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分页大小，取值范围：1~50，默认为10。
     * @example `20`
     */
    "MaxResults"?: number;
}
