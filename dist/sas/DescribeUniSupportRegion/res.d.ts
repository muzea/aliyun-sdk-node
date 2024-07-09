export interface DescribeUniSupportRegionResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F35F45B0-5D6B-4238-BE02-A62D0760****`
     */
    RequestId: string;
    /**
     * 数据库防勒索支持地域集合。
     */
    UniSupportRegion: string[];
}
