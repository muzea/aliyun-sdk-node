export interface DescribeActiveOperationTaskCountRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 产品， 默认polarx。
     * @example `polarx`
     */
    "Product"?: string;
    /**
     * 保留参数，无需填写。
     * @example `Category`
     */
    "Category"?: string;
}
