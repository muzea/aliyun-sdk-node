export interface DescribeDiagnosisDimensionsResponse {
    /**
     * 访问源地址列表。
     */
    ClientIps: string[];
    /**
     * 资源组列表。
     */
    ResourceGroups: string[];
    /**
     * 用户名列表。
     */
    UserNames: string[];
    /**
     * 数据库列表。
     */
    Databases: string[];
    /**
     * 请求ID。
     * @example `E0B56BCD-1BED-30EC-8CAF-1D1E5F******`
     */
    RequestId: string;
}
