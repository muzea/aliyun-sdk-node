export interface ListCertWarehouseResponse {
    /**
     * 分页，每页展示数据大小，默认50。
     * @example `50`
     */
    ShowSize: number;
    /**
     * 分页，当前页，默认1。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页，总数据。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 证书仓库列表。
     */
    CertWarehouseList: {
        /**
         * 仓库ID。
         * @example `1`
         */
        WhId: number;
        /**
         * 售卖实例。
         * @example `14dcc8afc7578e1f`
         */
        InstanceId: string;
        /**
         * 仓库名称。
         * @example `name`
         */
        Name: string;
        /**
         * PCA实例。
         * @example `14dcc8afc7578e1f`
         */
        PcaInstanceId: string;
        /**
         * Qps。
         * @example `10`
         */
        Qps: number;
        /**
         * 仓库类型，取值：
         * - **ssl**：SSL证书
         * - **uploadPCA**：上传PCA证书
         * - **free**：免费证书（仅中国站）
         * - **aliyunPCA**：阿里云PCA证书（仅中国站）
         * - **disable**：未启用
         * @example `aliyunPCA`
         */
        Type: string;
        /**
         * 到期时间，使用时间戳格式，单位为毫秒。
         * @example `1665819958000`
         */
        EndTime: number;
        /**
         * 是否过期。取值：
         * - **true**
         * - **false**
         * @example `false`
         */
        IsExpired: boolean;
    }[];
    /**
     * 请求ID。
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
}
