export interface OpenVClusterResponse {
    /**
     * 集群ID，为字符串格式。
     * @example `rre59xelcx`
     */
    Data: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `42E58E4D-ACAD-4400-8FAF-F762340AE5B3`
     */
    RequestId: string;
}
