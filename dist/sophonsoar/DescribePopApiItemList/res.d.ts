export interface DescribePopApiItemListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6336D603-7028-52DE-AD88-E34AA5248355`
     */
    RequestId: string;
    /**
     * 阿里云产品接口的POP CODE。
     * @example `Sas`
     */
    PopCode: string;
    /**
     * 阿里云产品接口的版本号。
     * @example `2018-12-03`
     */
    Version: string;
    /**
     * 总记录条数。
     * @example `100`
     */
    Total: number;
    /**
     * 产品API列表。
     */
    Names: string[];
}
