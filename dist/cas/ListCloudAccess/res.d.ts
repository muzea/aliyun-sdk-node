export interface ListCloudAccessResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D3F1FA43-1C26-50A2-8F0F-7A03851DBB46`
     */
    RequestId: string;
    /**
     * 查询到符合条件的AK总数。
     * @example `23`
     */
    TotalCount: number;
    /**
     * 分页查询时，每页显示的数据。如果未传入ShowSize则不返回。
     * @example `20`
     */
    ShowSize: number;
    /**
     * 默认为当前页。如果未传入CurrentPage则不返回。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 列表集合。
     */
    CloudAccessList: {
        /**
         * AK主键ID。
         * @example `888`
         */
        AccessId: number;
        /**
         * 云服务供应商。
         * @example `Tencent`
         */
        CloudName: string;
        /**
         * 云资源集访问的密钥ID。
         * @example `LTAI4G5KAZCJQ******`
         */
        SecretId: string;
        /**
         * 服务状态。nomal表示账号正常。
         * @example `normal`
         */
        ServiceStatus: string;
    }[];
}
