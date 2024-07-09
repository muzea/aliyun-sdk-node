export interface ListZkTrackRequest {
    /**
     * RequestPars。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-0ju2yq****`
     */
    "InstanceId": string;
    /**
     * 路径。
     * @example `/path`
     */
    "Path"?: string;
    /**
     * SessionId。
     * @example `0x301fdfbdbf00***`
     */
    "SessionId"?: string;
    /**
     * 开始时间戳，单位秒。
     * @example `1669618483`
     */
    "StartTs": number;
    /**
     * 结束时间戳，单位秒。
     * @example `1669619383`
     */
    "EndTs": number;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 当前页。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 是否倒序。
     * @example `false`
     */
    "Reverse"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
