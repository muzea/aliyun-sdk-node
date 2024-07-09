export interface DataSourceBloodResponse {
    /**
     * 请求ID。
     * @example `46e537a5****,3dadsu****`
     */
    RequestId: string;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据集id数组。
     */
    Result: string[];
}
