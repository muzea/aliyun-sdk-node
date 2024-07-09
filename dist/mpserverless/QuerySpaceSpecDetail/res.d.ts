export interface QuerySpaceSpecDetailResponse {
    /**
     * 唯一请求ID。
     * @example `20C1EDFE-6355-4344-B20A-A7A5A1581026`
     */
    RequestId: string;
    /**
     * 创建时间。
     */
    GmtCreate: string;
    /**
     * - FREE 开发者版
     * - BASE 基础版
     * - STANDARD 标准版
     * - PROFESSIONAL 专业版
     * - ENTERPRISE 企业版
     * - UTIMATE 旗舰版
     * @example `BASE`
     */
    SpecCode: string;
    /**
     * 云存储流量，单位：byte。
     * @example `2147483648`
     */
    CsCdnTraffic: number;
    /**
     * 云存储文件访问或者下载次数。
     * @example `100000`
     */
    CsDownloadCount: number;
    /**
     * 云存储磁盘容量，单位：byte。
     * @example `8589934592`
     */
    CsStorageSize: number;
    /**
     * 云存储文件上传次数。
     * @example `50000`
     */
    CsUploadCount: number;
    /**
     * 云数据库读请求次数。
     * @example `50000`
     */
    DbReadCount: number;
    /**
     * 云数据库磁盘容量，单位：byte。
     * @example `2147483648`
     */
    DbStorageSize: number;
    /**
     * 云数据库写请求次数。
     * @example `30000`
     */
    DbWriteCount: number;
    /**
     * 云函数计算量（MB百毫秒）
     * @example `102400000`
     */
    FcCost: number;
    /**
     * 云函数调用次数
     * @example `150000`
     */
    FcRequestCount: number;
    /**
     * 云函数出网流量
     * @example `1073741824`
     */
    FcTxTraffic: number;
    /**
     * 静态网站托管 CDN 流量，单位 byte
     * @example `2147483648`
     */
    WhCdnTraffic: number;
    /**
     * 静态网站托管磁盘容量，单位：byte。
     * @example `8589934592`
     */
    WhStorageSize: number;
    /**
     * 套餐规格文案详情
     * @example `云函数：\\n 资源使用量 1万 GBs/月\\n调用次数 15 万次/月\\n出网流量 1 GB/月\\n\\br云数据库：\\n容量 2 GB\\n读操作 5 万次/天\\n写操作 3 万次/天\\n\\br云存储：\\n容量 8 GB\\n下载操作次数 10 万次/月\\n上传操作次数 5 万次/月\\nCDN流量 2 GB/月\\n\\br静态网站托管：\\n 容量 8 GB\\nCDN流量 2 GB/月"`
     */
    SpecDetailText: string;
}
