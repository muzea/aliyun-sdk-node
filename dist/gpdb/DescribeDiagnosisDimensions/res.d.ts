export interface DescribeDiagnosisDimensionsResponse {
    /**
     * 请求ID。
     * @example `9ADCAACA-E0E8-5319-AE3B-E260E957BDF9`
     */
    RequestId: string;
    /**
     * 数据库名称。
     */
    Databases: string[];
    /**
     * 用户名。
     */
    UserNames: string[];
}
