export interface ListCertRequest {
    /**
     * 查询关键字。支持通过名称、域名、SANS模糊查询。
     * @example `test_name`
     */
    "KeyWord"?: string;
    /**
     * 仓库ID。可通过[ListCertWarehouse](~~453246~~)接口查询。
     * @example `12`
     */
    "WarehouseId"?: number;
    /**
     * 证书状态，取值：
     * - **ISSUE**： 已签发
     * - **REVOKE**： 吊销
     * @example `ISSUE`
     */
    "Status"?: string;
    /**
     * 证书来源，取值：
     * - **upload**：上传证书
     * - **aliyun**：阿里云证书
     * @example `aliyun`
     */
    "SourceType"?: string;
    /**
     * 证书的类型 。取值：
     * - **CA**：表示CA证书。
     * - **CERT**：表示签发的证书。
     * @example `CERT`
     */
    "CertType"?: string;
    /**
     * 分页。当前页，默认1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页，每页展示数据大小，默认50条。
     * @example `50`
     */
    "ShowSize"?: number;
}
