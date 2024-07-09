export interface QueryNetListResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24B652B5-AEFF-3F03-9114-00D053C42277`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 网段列表。
     */
    Data: {
        Total: number;
        Page: number;
        Num: number;
        Nets: {
            UserId: string;
            SaleId: string;
            UpstreamType: string;
            Net: string;
            NetType: string;
            Mode: string;
            DeclaredState: number;
            Declared: {
                Region: string;
                Declared: string;
            }[];
            GmtCreate: string;
            GmtModify: string;
            NetExtend: string;
            DDoSDefense: {
                DjPolicy: {
                    PolicyName: string;
                };
                CleanTh: {
                    Mbps: number;
                    Pps: number;
                };
                HoleTh: {
                    ThreshMbps: number;
                };
            };
            FwdEffect: number;
            NetMain: number;
        }[];
    };
}
