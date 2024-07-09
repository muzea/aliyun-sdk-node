export interface ListDashboardsByNameResponse {
    /**
     * 返回结构体。
     * @example `[{"name":"Edas Ingress Url Analysis","type":"edas-ingress-url-analysis","url":"https://g.console.aliyun.com/d/1036052989950239-11040375-66-3/edas-ingress-url-analysis?var-clusterId=29ksa&var-regionId=cn-hangzhou"}]`
     */
    Data: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `2983BEF7-4A0D-47A2-94A2-8E9C5E63****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
