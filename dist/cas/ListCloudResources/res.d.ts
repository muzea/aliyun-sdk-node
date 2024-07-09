export interface ListCloudResourcesResponse {
    /**
     * 总记录条数。
     * @example `440`
     */
    Total: number;
    /**
     * 分页，当前页，默认1。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页查询时，设置每页包含CA证书的数量。默认值为**20**。
     * @example `20`
     */
    ShowSize: number;
    /**
     * 请求接口返回的数据。
     */
    Data: {
        /**
         * 云产品资源ID。
         * @example `2356`
         */
        Id: number;
        /**
         * 同步资源创建时间（秒，时间戳格式）。
         * @example `1673423339000`
         */
        GmtCreate: string;
        /**
         * 同步资源最近一次修改时间（秒，时间戳格式）。
         * @example `1696911946000`
         */
        GmtModified: string;
        /**
         * 云产品。
         * @example `ALB`
         */
        CloudProduct: string;
        /**
         * 阿里云账号ID
         * @example `1666884372******`
         */
        UserId: number;
        /**
         * 云产品资源绑定的证书ID。
         * @example `12433121`
         */
        CertId: number;
        /**
         * 云产品资源绑定的证书名称。
         * @example `shop.amsaudio.cn`
         */
        CertName: string;
        /**
         * 云产品资源绑定证书的结束日期（秒，时间戳格式）。
         * @example `1737795520000`
         */
        CertEndTime: string;
        /**
         * 云产品资源绑定证书的开始日期（秒，时间戳格式）。
         * @example `1706259520000`
         */
        CertStartTime: string;
        /**
         * 云产品资源绑定的域名。
         * @example `www.tkgeo.ru`
         */
        Domain: string;
        /**
         * 云产品资源实例ID。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `nlb-rv05agjc97ovm14il5`
         */
        InstanceId: string;
        /**
         * 云产品资源监听ID。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `lsn-jiugof6t23et66lsnc@443`
         */
        ListenerId: string;
        /**
         * 云产品资源监听端口。
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `8047`
         */
        ListenerPort: string;
        /**
         * 云产品资源是否开启HTTPS。
         * - **1**：开启
         * - **0**：未开启
         * @example `1`
         */
        EnableHttps: number;
        /**
         * 云产品资源是否为默认资源。
         * - **1**：默认资源
         * - **0**：非默认资源
         * > 仅部署SLB、NLB、ALB和GA才会返回该参数。
         * @example `0`
         */
        DefaultResource: number;
        /**
         * 同步的云产品资源状态。
         * @example `BUY`
         */
        Status: string;
        /**
         * 是否使用阿里云SSL证书。
         * - **1**：使用
         * - **0**：未使用
         * > 仅多云部署才会返回该参数。
         * @example `1`
         */
        UseSsl: number;
        /**
         * 同步的云产品资源地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 云产品资源供应商。
         * - **aliyun**：阿里云
         * - **Tencent**：腾讯云
         * @example `aliyun`
         */
        CloudName: string;
        /**
         * 云产品资源在云供应商的地域ID。
         * @example `cn-hangzhou
        `
         */
        CloudRegion: string;
        /**
         * 云资源集访问的密钥ID。
         * > 仅多云部署才会返回该参数。
         * @example `1234`
         */
        CloudAccessId: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `12345678-1234-1234-1234-123456789ABC`
     */
    RequestId: string;
}
